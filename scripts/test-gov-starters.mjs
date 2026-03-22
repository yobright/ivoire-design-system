#!/usr/bin/env node

import fs from 'node:fs/promises';
import path from 'node:path';
import Ajv from 'ajv';

const cwd = process.cwd();

const schemaFiles = [
  'schemas/gov/nav.schema.json',
  'schemas/gov/flash.schema.json',
  'schemas/gov/news.schema.json',
  'schemas/gov/services.schema.json',
  'schemas/gov/agenda.schema.json',
  'schemas/gov/footer.schema.json',
  'schemas/gov/landing.schema.json',
];

const landingDataTargets = [
  'starters/gov-html/data/landing.fr.json',
  'starters/gov-html/data/landing.en.json',
  'starters/gov-next/data/landing.fr.json',
  'starters/gov-next/data/landing.en.json',
];

const htmlChecks = [
  {
    file: 'starters/gov-html/index.html',
    requiredMarkers: ['id="app"', 'locale-switch', 'assets/app.js'],
  },
  {
    file: 'starters/gov-html/passport.html',
    requiredMarkers: ['ivds-gov-form-page', 'ivds-gov-step-list', 'ivds-button--primary'],
  },
  {
    file: 'starters/gov-html/opisms.html',
    requiredMarkers: ['ivds-gov-auth-layout', 'ivds-gov-action-modal', 'ivds-button--primary'],
  },
];

const nextChecks = [
  {
    file: 'starters/gov-next/app/[locale]/page.tsx',
    requiredMarkers: ['GovShell', 'GovHeader', 'GovServiceDirectory', 'GovMegaFooter'],
  },
  {
    file: 'starters/gov-next/app/[locale]/passport/page.tsx',
    requiredMarkers: ['ivds-gov-form-page', 'ivds-gov-step-list', 'GovMegaFooter'],
  },
  {
    file: 'starters/gov-next/app/[locale]/opisms/page.tsx',
    requiredMarkers: ['ivds-gov-auth-layout', 'ivds-gov-action-modal', 'GovMegaFooter'],
  },
];

async function readText(relPath) {
  return fs.readFile(path.join(cwd, relPath), 'utf8');
}

async function readJson(relPath) {
  return JSON.parse(await readText(relPath));
}

function createAjvWithSchemas(schemas) {
  const ajv = new Ajv({ allErrors: true, strict: false, validateFormats: false });
  schemas.forEach((schema) => ajv.addSchema(schema));
  const landingSchema = schemas.find((schema) => schema.$id === 'https://ivds.dev/schemas/gov/landing.schema.json');
  if (!landingSchema) {
    throw new Error('Landing schema id not found.');
  }
  return ajv.getSchema(landingSchema.$id) ?? ajv.compile(landingSchema);
}

async function main() {
  const failures = [];
  const checks = [];

  const schemas = await Promise.all(schemaFiles.map((file) => readJson(file)));
  const validateLanding = createAjvWithSchemas(schemas);

  for (const target of landingDataTargets) {
    const data = await readJson(target);
    const ok = Boolean(validateLanding(data));
    checks.push({ id: `landing-schema:${target}`, ok });

    if (!ok) {
      failures.push(
        `Schema validation failed for ${target}: ${(validateLanding.errors || [])
          .slice(0, 3)
          .map((error) => `${error.instancePath || '/'} ${error.message || 'invalid'}`)
          .join('; ')}`,
      );
    }
  }

  for (const target of htmlChecks) {
    const text = await readText(target.file);
    const missing = target.requiredMarkers.filter((marker) => !text.includes(marker));
    const ok = missing.length === 0;
    checks.push({ id: `html:${target.file}`, ok });

    if (!ok) {
      failures.push(`Missing required markers in ${target.file}: ${missing.join(', ')}`);
    }
  }

  for (const target of nextChecks) {
    const text = await readText(target.file);
    const missing = target.requiredMarkers.filter((marker) => !text.includes(marker));
    const ok = missing.length === 0;
    checks.push({ id: `next:${target.file}`, ok });

    if (!ok) {
      failures.push(`Missing required markers in ${target.file}: ${missing.join(', ')}`);
    }
  }

  const summary = {
    checks: checks.length,
    passed: checks.filter((check) => check.ok).length,
    failed: failures.length,
  };

  process.stdout.write(`${JSON.stringify(summary)}\n`);

  if (failures.length > 0) {
    failures.forEach((failure) => process.stderr.write(`- ${failure}\n`));
    process.exit(1);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
