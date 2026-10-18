#!/usr/bin/env node

import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const strict = process.argv.includes('--strict');
const reportsDir = path.join(root, 'reports');

const scorecard = {
  accessibility: { weight: 40, raw: Number(process.env.IVDS_A11Y_SCORE ?? 85) },
  performance: { weight: 30, raw: Number(process.env.IVDS_PERF_SCORE ?? 80) },
  designTokens: { weight: 20, raw: 0 },
  integrationStandard: { weight: 10, raw: 0 },
};

const details = [];

const addCheck = (id, area, status, message) => {
  details.push({ id, area, status, message });
};

const exists = (relativePath) => fs.existsSync(path.join(root, relativePath));

const readJson = (relativePath) => JSON.parse(fs.readFileSync(path.join(root, relativePath), 'utf8'));

const ensureReportDir = () => {
  fs.mkdirSync(reportsDir, { recursive: true });
};

const checkFile = (id, area, relativePath, label = 'Required file found') => {
  const ok = exists(relativePath);
  addCheck(id, area, ok ? 'pass' : 'fail', ok ? label : `Missing ${relativePath}`);
  return ok;
};

ensureReportDir();

const coverageResult = spawnSync(
  process.execPath,
  ['scripts/react-component-coverage.mjs', '--strict'],
  { cwd: root, encoding: 'utf8' }
);

if (coverageResult.status === 0) {
  addCheck('react:coverage-strict', 'integration', 'pass', 'React stories/tests matrix is complete');
} else {
  addCheck(
    'react:coverage-strict',
    'integration',
    'fail',
    coverageResult.stderr || coverageResult.stdout || 'React coverage matrix failed'
  );
}

const coverage = exists('reports/react-component-coverage.json')
  ? readJson('reports/react-component-coverage.json')
  : undefined;

const coverageScore = coverage?.score?.fullCoverage ?? 0;
scorecard.integrationStandard.raw = coverageResult.status === 0 ? coverageScore : 0;

const packageFiles = [
  'packages/ivds-design-tokens/package.json',
  'packages/ivds-core/package.json',
  'packages/ivds-react/package.json',
];
const versions = packageFiles.map((file) => readJson(file).version);
const alignedVersions = new Set(versions).size === 1;
addCheck(
  'packages:version-alignment',
  'integration',
  alignedVersions ? 'pass' : 'fail',
  alignedVersions ? `Packages aligned on ${versions[0]}` : `Package versions are not aligned: ${versions.join(', ')}`
);

const requiredComponents = [
  'Header',
  'Hero',
  'Card',
  'Navigation',
  'SideNavigation',
  'Footer',
  'TextInput',
  'TextArea',
  'Button',
  'Fieldset',
  'SelectionGroup',
  'ErrorSummary',
  'Link',
  'Pagination',
  'Modal',
  'Table',
];

const componentChecks = requiredComponents.map((component) =>
  checkFile(
    `react:starter-component:${component}`,
    'integration',
    `packages/ivds-react/src/components/${component}/${component}.tsx`,
    `${component} component found`
  )
);

const presetChecks = [
  'packages/ivds-design-tokens/tokens/theme/default.json',
  'packages/ivds-design-tokens/tokens/theme/dark.json',
  'packages/ivds-design-tokens/tokens/theme/high-contrast.json',
  'packages/ivds-design-tokens/tokens/color/semantic.json',
].map((file) => checkFile(`tokens:${file}`, 'design', file));

const documentationChecks = [
  'documentation/ACCESSIBILITY-CONTRACT.md',
  'documentation/RELEASE-PHASES.md',
  'documentation/CERTIFICATION.md',
  'documentation/PATTERN-FORM-VALIDATION.md',
  'documentation/PATTERN-APP-NAVIGATION.md',
  'documentation/PATTERN-FEEDBACK-STATES.md',
].map((file) => checkFile(`docs:${file}`, 'accessibility', file));

const toolingChecks = [
  '.github/workflows/ci.yml',
  '.github/workflows/ivds-certify.yml',
  '.github/workflows/visual-regression.yml',
  'packages/ivds-react/playwright.config.ts',
  'packages/ivds-react/chromatic.config.json',
].map((file) => checkFile(`tooling:${file}`, 'performance', file));

const designPassRate = presetChecks.filter(Boolean).length / presetChecks.length;
scorecard.designTokens.raw = Math.round(designPassRate * 100);

if (documentationChecks.includes(false)) {
  scorecard.accessibility.raw = Math.min(scorecard.accessibility.raw, 70);
}

if (toolingChecks.includes(false)) {
  scorecard.performance.raw = Math.min(scorecard.performance.raw, 70);
}

if (componentChecks.includes(false)) {
  scorecard.integrationStandard.raw = Math.min(scorecard.integrationStandard.raw, 70);
}

const criticalAxes = Object.entries(scorecard)
  .filter(([, axis]) => axis.raw < 70)
  .map(([axis]) => axis);

const totalScore = Math.round(
  Object.values(scorecard).reduce((total, axis) => total + (axis.raw * axis.weight) / 100, 0)
);

const isCompliant = totalScore >= 85 && criticalAxes.length === 0;
const badge = isCompliant ? 'conforme-technique' : 'non-conforme';
const generatedAt = new Date().toISOString();

addCheck(
  'gating:critical-axes',
  'integration',
  criticalAxes.length === 0 ? 'pass' : 'fail',
  criticalAxes.length === 0 ? 'No critical axis detected' : `Critical axes: ${criticalAxes.join(', ')}`
);

addCheck(
  'gating:technical-threshold',
  'integration',
  isCompliant ? 'pass' : 'fail',
  isCompliant ? 'Technical certification threshold reached' : 'Technical certification threshold not reached'
);

const report = {
  generatedAt,
  mode: strict ? 'strict' : 'soft',
  scorecard,
  totalScore,
  badge,
  threshold: {
    compliantAt: 85,
    criticalAxisFloor: 70,
    criticalAxes,
    isCompliant,
  },
  coverage: coverage?.totals,
  details,
  notes: [
    'This is a local technical certification gate, not a replacement for a real external accessibility audit.',
    'Set IVDS_A11Y_SCORE and IVDS_PERF_SCORE to inject measured Lighthouse, axe or audit values.',
    'Strict mode fails when the technical threshold is not reached.',
  ],
};

const markdownLines = [
  '# IVDS Certification Report',
  '',
  `- Generated: ${generatedAt}`,
  `- Mode: ${report.mode}`,
  `- Score: **${totalScore}/100**`,
  `- Badge: **${badge}**`,
  `- Critical axes: **${criticalAxes.length ? criticalAxes.join(', ') : 'none'}**`,
  '',
  '## Scorecard',
  '',
  '| Axis | Weight | Raw |',
  '| --- | ---: | ---: |',
  `| Accessibility | ${scorecard.accessibility.weight} | ${scorecard.accessibility.raw} |`,
  `| Performance | ${scorecard.performance.weight} | ${scorecard.performance.raw} |`,
  `| Design/Tokens | ${scorecard.designTokens.weight} | ${scorecard.designTokens.raw} |`,
  `| Integration Standard | ${scorecard.integrationStandard.weight} | ${scorecard.integrationStandard.raw} |`,
  '',
  '## Checks',
  '',
  ...details.map((detail) => `- [${detail.status === 'pass' ? 'x' : ' '}] ${detail.id}: ${detail.message}`),
  '',
  '## Notes',
  '',
  ...report.notes.map((note) => `- ${note}`),
  '',
];

fs.writeFileSync(
  path.join(reportsDir, 'ivds-certification-report.json'),
  `${JSON.stringify(report, null, 2)}\n`
);
fs.writeFileSync(path.join(reportsDir, 'ivds-certification-report.md'), markdownLines.join('\n'));
fs.writeFileSync(
  path.join(reportsDir, 'ivds-certification-badge.json'),
  `${JSON.stringify({ schemaVersion: 1, label: 'ivds certification', message: badge, color: isCompliant ? 'green' : 'red' }, null, 2)}\n`
);

process.stdout.write(`IVDS certification: ${badge} (${totalScore}/100)\n`);

if (strict && !isCompliant) {
  process.exit(1);
}
