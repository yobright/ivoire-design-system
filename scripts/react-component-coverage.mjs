#!/usr/bin/env node

import fs from 'node:fs/promises';
import path from 'node:path';

const cwd = process.cwd();
const componentsDir = path.join(cwd, 'packages/ivds-react/src/components');
const reportsDir = path.join(cwd, 'reports');
const strict = process.argv.includes('--strict');

const isStory = (file) => /\.stories\.(js|jsx|ts|tsx)$/.test(file);
const isTest = (file) => /\.(test|spec)\.(js|jsx|ts|tsx)$/.test(file);
const isSource = (file) => /\.(js|jsx|ts|tsx)$/.test(file) && !isStory(file) && !isTest(file) && !file.endsWith('.d.ts');

async function listComponentDirs() {
  const entries = await fs.readdir(componentsDir, { withFileTypes: true });
  return entries.filter((entry) => entry.isDirectory()).map((entry) => entry.name).sort();
}

async function inspectComponent(component) {
  const dir = path.join(componentsDir, component);
  const files = await fs.readdir(dir);

  const stories = files.filter(isStory).sort();
  const tests = files.filter(isTest).sort();
  const sources = files.filter(isSource).sort();

  return {
    component,
    sources,
    stories,
    tests,
    hasStory: stories.length > 0,
    hasTest: tests.length > 0,
    fullyCovered: stories.length > 0 && tests.length > 0,
  };
}

function toMarkdownTable(rows) {
  const header = [
    '| Component | Source Files | Stories | Tests | Coverage |',
    '| --- | ---: | ---: | ---: | --- |',
  ];

  const body = rows.map((row) => {
    const status = row.fullyCovered ? 'story+test' : row.hasStory ? 'story-only' : row.hasTest ? 'test-only' : 'missing';

    return `| ${row.component} | ${row.sources.length} | ${row.stories.length} | ${row.tests.length} | ${status} |`;
  });

  return [...header, ...body].join('\n');
}

async function main() {
  const componentNames = await listComponentDirs();
  const coverage = await Promise.all(componentNames.map(inspectComponent));

  const totals = {
    components: coverage.length,
    withStories: coverage.filter((row) => row.hasStory).length,
    withTests: coverage.filter((row) => row.hasTest).length,
    fullyCovered: coverage.filter((row) => row.fullyCovered).length,
  };

  const score = {
    storyCoverage: Math.round((totals.withStories / totals.components) * 100),
    testCoverage: Math.round((totals.withTests / totals.components) * 100),
    fullCoverage: Math.round((totals.fullyCovered / totals.components) * 100),
  };

  const missingStory = coverage.filter((row) => !row.hasStory).map((row) => row.component);
  const missingTest = coverage.filter((row) => !row.hasTest).map((row) => row.component);

  const report = {
    generatedAt: new Date().toISOString(),
    strict,
    totals,
    score,
    missing: {
      stories: missingStory,
      tests: missingTest,
    },
    components: coverage,
  };

  await fs.mkdir(reportsDir, { recursive: true });

  await fs.writeFile(
    path.join(reportsDir, 'react-component-coverage.json'),
    JSON.stringify(report, null, 2),
    'utf8',
  );

  const markdown = [
    '# React Component Coverage Baseline',
    '',
    `- Generated: ${report.generatedAt}`,
    `- Components: ${totals.components}`,
    `- Story coverage: ${score.storyCoverage}% (${totals.withStories}/${totals.components})`,
    `- Test coverage: ${score.testCoverage}% (${totals.withTests}/${totals.components})`,
    `- Full coverage (story + test): ${score.fullCoverage}% (${totals.fullyCovered}/${totals.components})`,
    '',
    '## Matrix',
    '',
    toMarkdownTable(coverage),
    '',
    '## Missing Stories',
    '',
    missingStory.length > 0 ? missingStory.map((component) => `- ${component}`).join('\n') : '- None',
    '',
    '## Missing Tests',
    '',
    missingTest.length > 0 ? missingTest.map((component) => `- ${component}`).join('\n') : '- None',
  ].join('\n');

  await fs.writeFile(path.join(reportsDir, 'react-component-coverage.md'), markdown, 'utf8');

  process.stdout.write(`${JSON.stringify({ totals, score, strict })}\n`);

  if (strict && (missingStory.length > 0 || missingTest.length > 0)) {
    process.exit(2);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
