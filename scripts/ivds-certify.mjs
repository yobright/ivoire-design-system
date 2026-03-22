#!/usr/bin/env node

import fs from 'node:fs/promises';
import path from 'node:path';
import Ajv from 'ajv';

const cwd = process.cwd();
const reportDir = path.join(cwd, 'reports');

const requiredSchemaFiles = [
  'schemas/gov/nav.schema.json',
  'schemas/gov/flash.schema.json',
  'schemas/gov/news.schema.json',
  'schemas/gov/services.schema.json',
  'schemas/gov/agenda.schema.json',
  'schemas/gov/footer.schema.json',
  'schemas/gov/landing.schema.json',
];

const requiredStarterFiles = [
  'starters/gov-html/index.html',
  'starters/gov-html/passport.html',
  'starters/gov-html/opisms.html',
  'starters/gov-html/package.json',
  'starters/gov-html/adapters/json-adapter.js',
  'starters/gov-html/data/landing.fr.json',
  'starters/gov-html/data/landing.en.json',
  'starters/gov-next/package.json',
  'starters/gov-next/app/[locale]/page.tsx',
  'starters/gov-next/app/[locale]/passport/page.tsx',
  'starters/gov-next/app/[locale]/opisms/page.tsx',
  'starters/gov-next/app/[locale]/_content.ts',
  'starters/gov-next/app/page.tsx',
  'starters/gov-next/adapters/jsonAdapter.ts',
  'starters/gov-next/data/landing.fr.json',
  'starters/gov-next/data/landing.en.json',
];

const landingTargets = [
  { file: 'starters/gov-html/data/landing.fr.json', expectedLocale: 'fr' },
  { file: 'starters/gov-html/data/landing.en.json', expectedLocale: 'en' },
  { file: 'starters/gov-next/data/landing.fr.json', expectedLocale: 'fr' },
  { file: 'starters/gov-next/data/landing.en.json', expectedLocale: 'en' },
];

function parseArg(name, fallback = false) {
  return process.argv.includes(`--${name}`) ? true : fallback;
}

async function readTextIfExists(relPath) {
  if (!(await exists(relPath))) return '';
  return fs.readFile(path.join(cwd, relPath), 'utf8');
}

async function exists(relPath) {
  try {
    await fs.access(path.join(cwd, relPath));
    return true;
  } catch {
    return false;
  }
}

async function readJsonIfExists(relPath) {
  if (!(await exists(relPath))) return null;
  const raw = await fs.readFile(path.join(cwd, relPath), 'utf8');
  return JSON.parse(raw);
}

function computeBadge(score) {
  if (score >= 90) return 'gold';
  if (score >= 85) return 'silver';
  return 'non-conforme';
}

function compactAjvError(errors) {
  if (!errors || errors.length === 0) return 'Unknown schema validation error';
  return errors
    .slice(0, 3)
    .map((error) => `${error.instancePath || '/'} ${error.message || 'invalid'}`)
    .join('; ');
}

async function buildLandingValidator(schemaChecks) {
  if (schemaChecks.some((check) => !check.ok)) {
    return null;
  }

  const ajv = new Ajv({ allErrors: true, strict: false, validateFormats: false });
  const schemas = await Promise.all(requiredSchemaFiles.map((file) => readJsonIfExists(file)));

  for (const schema of schemas) {
    if (schema) {
      ajv.addSchema(schema);
    }
  }

  const landingSchema = schemas.find((schema) => schema?.$id === 'https://ivds.dev/schemas/gov/landing.schema.json');
  if (!landingSchema) {
    return null;
  }

  const validate = ajv.getSchema(landingSchema.$id) ?? ajv.compile(landingSchema);
  return validate;
}

async function main() {
  const strict = parseArg('strict');
  const details = [];

  const schemaChecks = await Promise.all(requiredSchemaFiles.map(async (file) => ({ file, ok: await exists(file) })));
  const starterChecks = await Promise.all(requiredStarterFiles.map(async (file) => ({ file, ok: await exists(file) })));

  const validateLanding = await buildLandingValidator(schemaChecks);

  const landingChecks = await Promise.all(
    landingTargets.map(async (target) => {
      const data = await readJsonIfExists(target.file);

      let schemaOk = false;
      let schemaMessage = 'Landing data missing';

      if (data && validateLanding) {
        schemaOk = Boolean(validateLanding(data));
        schemaMessage = schemaOk
          ? 'Landing data is valid against landing schema'
          : compactAjvError(validateLanding.errors || []);
      } else if (data && !validateLanding) {
        schemaMessage = 'Landing schema validator is unavailable';
      }

      const localeOk = Boolean(data && data.locale === target.expectedLocale);
      const localeMessage = localeOk
        ? `Locale matches expected value (${target.expectedLocale})`
        : `Locale mismatch: expected ${target.expectedLocale}, got ${data?.locale || 'undefined'}`;

      return {
        file: target.file,
        expectedLocale: target.expectedLocale,
        schemaOk,
        schemaMessage,
        localeOk,
        localeMessage,
      };
    }),
  );

  const styleScopeFiles = [
    'packages/ivds-core/src/gov/gov.scss',
    'starters/gov-html/assets/styles.css',
    'starters/gov-next/app/globals.css',
  ];

  const styleScopes = await Promise.all(
    styleScopeFiles.map(async (file) => ({
      file,
      content: await readTextIfExists(file),
    })),
  );

  const hardcodedHex = styleScopes
    .flatMap((scope) => scope.content.match(/#[0-9a-fA-F]{3,8}\b/g) || [])
    .filter(Boolean);

  const schemaCompletion = schemaChecks.filter((check) => check.ok).length / schemaChecks.length;
  const starterCompletion = starterChecks.filter((check) => check.ok).length / starterChecks.length;
  const landingSchemaCompletion = landingChecks.filter((check) => check.schemaOk).length / landingChecks.length;
  const localeCompletion = landingChecks.filter((check) => check.localeOk).length / landingChecks.length;

  const integrationRaw = Math.round(
    ((schemaCompletion + starterCompletion + landingSchemaCompletion + localeCompletion) / 4) * 100,
  );
  const designRaw = hardcodedHex.length === 0 ? 100 : 0;

  const externalA11y = Number.parseInt(process.env.IVDS_A11Y_SCORE || '', 10);
  const externalPerf = Number.parseInt(process.env.IVDS_PERF_SCORE || '', 10);

  const a11yRaw = Number.isFinite(externalA11y) ? externalA11y : 70;
  const perfRaw = Number.isFinite(externalPerf) ? externalPerf : 70;

  const weightedScore = Math.round(a11yRaw * 0.4 + perfRaw * 0.3 + designRaw * 0.2 + integrationRaw * 0.1);
  const criticalAxes = [];
  if (a11yRaw < 70) criticalAxes.push('accessibility');
  if (perfRaw < 70) criticalAxes.push('performance');

  const brandingBlocker = designRaw < 100;
  const isCompliant = weightedScore >= 85 && criticalAxes.length === 0 && !brandingBlocker;
  const badge = isCompliant ? computeBadge(weightedScore) : 'non-conforme';

  details.push(
    ...schemaChecks.map((check) => ({
      id: `schema:${check.file}`,
      area: 'integration',
      status: check.ok ? 'pass' : 'fail',
      message: check.ok ? 'Schema file found' : 'Schema file missing',
    })),
  );

  details.push(
    ...starterChecks.map((check) => ({
      id: `starter:${check.file}`,
      area: 'integration',
      status: check.ok ? 'pass' : 'fail',
      message: check.ok ? 'Starter file found' : 'Starter file missing',
    })),
  );

  details.push(
    ...landingChecks.map((check) => ({
      id: `contract:${check.file}:schema`,
      area: 'integration',
      status: check.schemaOk ? 'pass' : 'fail',
      message: check.schemaOk ? 'Landing schema validation passed' : `Landing schema validation failed: ${check.schemaMessage}`,
    })),
  );

  details.push(
    ...landingChecks.map((check) => ({
      id: `contract:${check.file}:locale`,
      area: 'integration',
      status: check.localeOk ? 'pass' : 'fail',
      message: check.localeMessage,
    })),
  );

  details.push({
    id: 'design:no-hardcoded-hex',
    area: 'design',
    status: hardcodedHex.length === 0 ? 'pass' : 'fail',
    message:
      hardcodedHex.length === 0
        ? 'No hardcoded hex colors found in gov namespace styles'
        : `Found hardcoded hex colors in gov styles: ${hardcodedHex.join(', ')}`,
  });

  details.push({
    id: 'gating:critical-axes',
    area: 'integration',
    status: criticalAxes.length === 0 ? 'pass' : 'fail',
    message:
      criticalAxes.length === 0
        ? 'No critical axis detected'
        : `Critical axis detected: ${criticalAxes.join(', ')}`,
  });

  details.push({
    id: 'gating:branding-blocker',
    area: 'design',
    status: brandingBlocker ? 'fail' : 'pass',
    message: brandingBlocker
      ? 'Branding blocker detected: hardcoded colors outside token system'
      : 'No branding blocker detected',
  });

  const report = {
    generatedAt: new Date().toISOString(),
    mode: strict ? 'strict' : 'soft',
    scorecard: {
      accessibility: { weight: 40, raw: a11yRaw },
      performance: { weight: 30, raw: perfRaw },
      designTokens: { weight: 20, raw: designRaw },
      integrationStandard: { weight: 10, raw: integrationRaw },
    },
    totalScore: weightedScore,
    badge,
    threshold: {
      compliantAt: 85,
      criticalAxisFloor: 70,
      noBrandingBlocker: !brandingBlocker,
      criticalAxes,
      isCompliant,
    },
    details,
    notes: [
      'Accessibility/performance values default to 70 when external reports are not provided.',
      'Set IVDS_A11Y_SCORE and IVDS_PERF_SCORE to inject measured values.',
      'Design/tokens axis fails when hardcoded hex colors are detected in gov/core and starter style scopes.',
    ],
  };

  await fs.mkdir(reportDir, { recursive: true });
  await fs.writeFile(path.join(reportDir, 'ivds-certification-report.json'), JSON.stringify(report, null, 2));

  const badgePayload = {
    schemaVersion: 1,
    label: 'IVDS conformité',
    message: `${badge} (${weightedScore}/100)`,
    color: badge === 'gold' ? 'gold' : badge === 'silver' ? 'silver' : 'red',
  };

  await fs.writeFile(path.join(reportDir, 'ivds-certification-badge.json'), JSON.stringify(badgePayload, null, 2));

  const md = [
    '# IVDS Certification Report',
    '',
    `- Generated: ${report.generatedAt}`,
    `- Mode: ${report.mode}`,
    `- Score: **${report.totalScore}/100**`,
    `- Badge: **${report.badge}**`,
    `- Critical axes: **${criticalAxes.length ? criticalAxes.join(', ') : 'none'}**`,
    `- Branding blocker: **${brandingBlocker ? 'yes' : 'no'}**`,
    '',
    '## Scorecard',
    '',
    '| Axis | Weight | Raw |',
    '| --- | ---: | ---: |',
    `| Accessibility | 40 | ${a11yRaw} |`,
    `| Performance | 30 | ${perfRaw} |`,
    `| Design/Tokens | 20 | ${designRaw} |`,
    `| Integration Standard | 10 | ${integrationRaw} |`,
    '',
    '## Checks',
    '',
    ...details.map((item) => `- [${item.status === 'pass' ? 'x' : ' '}] ${item.id}: ${item.message}`),
  ].join('\n');

  await fs.writeFile(path.join(reportDir, 'ivds-certification-report.md'), md);

  process.stdout.write(`${JSON.stringify({ totalScore: weightedScore, badge, strict })}\n`);

  if (strict && !isCompliant) {
    process.exit(2);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
