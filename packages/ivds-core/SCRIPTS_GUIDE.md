# IVDS Core - Build Scripts Guide

## Overview

This guide explains the build scripts and utilities available in the ivds-core package.

## Main Build Scripts

### `yarn build`
Full production build with all transformations.

```bash
yarn build
```

**Steps:**
1. Clean `lib/` directory
2. Lint SCSS/CSS files
3. Build CSS with PostCSS (normal + minified)
4. Convert CSS to TypeScript strings
5. Copy SCSS mixin files
6. Generate SCSS mixins from CSS

**Output:** Complete `lib/` directory with all assets

---

### `yarn build:prod`
Production-optimized build with deprecation warnings silenced.

```bash
yarn build:prod
```

**Environment:**
- `NODE_ENV=production`
- `SASS_SILENCE_DEPRECATIONS=legacy-js-api,import`

---

### `yarn start`
Start Storybook development server.

```bash
yarn start
# or
yarn storybook
```

**Opens:** http://localhost:6007

---

## PostCSS Scripts

### `yarn postcss-build`
Build CSS files using PostCSS.

```bash
yarn postcss-build
```

**Generates:**
- `lib/**/*.css` - Standard CSS files
- `lib/**/*.min.css` - Minified CSS files

**Processes:**
- SCSS to CSS compilation
- Autoprefixing
- Browser compatibility transforms
- SVG inlining
- Minification (for .min.css)

---

### `yarn postcss-watch`
Watch mode for development.

```bash
yarn postcss-watch
```

**Watches:** `src/**/*.(css|scss)`  
**Rebuilds:** Automatically on file changes

---

## Utility Scripts

### `copyFiles.js`
Copy files using glob patterns.

**Usage:**
```bash
node copyFiles -source '<glob-pattern>' -target '<target-dir>' [-v]
```

**Arguments:**
- `-s, --source` - Glob pattern for source files (required)
- `-t, --target` - Target directory (required)
- `-v` - Verbose output (optional)

**Examples:**
```bash
# Copy SCSS mixins
node copyFiles -source 'src/components/**/_*.scss' -target 'lib/components' -v

# Copy utility files
node copyFiles -source 'src/utils/**/_*.scss' -target 'lib/utils' -v

# Copy specific files
node copyFiles -source 'src/icons/*.scss' -target 'lib/icons'
```

**Features:**
- Automatic directory creation
- Preserves directory structure
- Verbose logging option
- Error handling

---

### `cssToImportableString.js`
Convert CSS files to importable TypeScript/JavaScript strings.

**Usage:**
```bash
node cssToImportableString -directory '<glob-pattern>' [-targetFiles '<files>'] [-v]
```

**Arguments:**
- `-d, --directory` - Glob pattern for CSS files (required)
- `-t, --targetFiles` - Comma-separated list of specific files (optional)
- `-v` - Verbose output (optional)

**Examples:**
```bash
# Convert all CSS files
node cssToImportableString -directory 'lib/components/**/*.min.css' -v

# Convert specific files only
node cssToImportableString -directory 'lib/components/**/*.min.css' -targetFiles 'modal.min.css,notification.min.css'

# Convert single directory
node cssToImportableString -directory 'lib/components/button/*.min.css'
```

**Output:**
Creates `.css.ts` files alongside `.css` files:

```typescript
// modal.min.css.ts
export const modal_min_css = `/* CSS content */`;
```

**Use Case:**
Components that need to inject styles dynamically (e.g., Modal, Notification).

---

### `scripts/cssToScss.js`
Convert CSS classes to SCSS mixins.

**Usage:**
```bash
node scripts/cssToScss.js
# or
yarn cssToScss
```

**Configuration:**
Edit the script to specify files:
```javascript
const files = ['utils/helpers.css'];
```

**Output:**
Generates SCSS files with mixins in `lib/scss/`:

**Input (CSS):**
```css
.helper-class {
  display: flex;
}
```

**Output (SCSS):**
```scss
@mixin helper-class {
  display: flex;
}
```

**Use Case:**
Enable SCSS users to include CSS utilities as mixins.

---

## Testing Scripts

### `yarn test`
Run Jest tests.

```bash
yarn test
```

**Includes:**
- SCSS unit tests
- Component tests
- Utility tests

---

### `yarn test:watch`
Run tests in watch mode.

```bash
yarn test:watch
```

---

### `yarn test:coverage`
Run tests with coverage report.

```bash
yarn test:coverage
```

**Output:** `coverage/` directory

---

### `yarn scss-tests`
Alias for `yarn test` (Helsinki compatibility).

```bash
yarn scss-tests
```

---

## Linting Scripts

### `yarn lint`
Lint all SCSS/CSS files.

```bash
yarn lint
# or
yarn lint:styles
```

**Checks:**
- SCSS syntax
- CSS syntax
- Style conventions
- Best practices

---

### `yarn lint:fix`
Auto-fix linting issues.

```bash
yarn lint:fix
```

**Fixes:**
- Formatting issues
- Order violations
- Simple style issues

---

## Storybook Scripts

### `yarn storybook`
Start Storybook development server.

```bash
yarn storybook
```

**Port:** 6007  
**URL:** http://localhost:6007

---

### `yarn build-storybook`
Build static Storybook site.

```bash
yarn build-storybook
```

**Output:** `storybook-static/` directory

---

## Maintenance Scripts

### `yarn clean`
Remove build artifacts.

```bash
yarn clean
```

**Removes:**
- `lib/`
- `coverage/`
- `storybook-static/`

---

### `yarn prepublishOnly`
Pre-publish checks (runs automatically).

```bash
yarn prepublishOnly
```

**Steps:**
1. Clean
2. Build (production)
3. Run tests

---

## Common Workflows

### Development Workflow
```bash
# 1. Start with clean build
yarn clean
yarn build

# 2. Start Storybook
yarn storybook

# 3. In another terminal, watch for changes
yarn postcss-watch
```

### Pre-commit Workflow
```bash
# 1. Lint and fix
yarn lint:fix

# 2. Run tests
yarn test

# 3. Build
yarn build
```

### Release Workflow
```bash
# 1. Clean everything
yarn clean

# 2. Production build
yarn build:prod

# 3. Run all tests
yarn test

# 4. Build Storybook
yarn build-storybook

# 5. Publish (if tests pass)
npm publish
```

---

## Troubleshooting

### Build fails on PostCSS
```bash
# Check PostCSS config
node -c postcss.config.js

# Verify plugins
yarn list postcss-*
```

### SCSS files not copying
```bash
# Test manually
node copyFiles -source 'src/components/**/_*.scss' -target 'lib/components' -v

# Check glob
yarn list glob
```

### Storybook won't start
```bash
# Clear cache
rm -rf node_modules .storybook-cache
yarn install
yarn storybook
```

### Tests failing
```bash
# Run with verbose output
yarn test --verbose

# Run specific test
yarn test <test-name>
```

---

## Environment Variables

### `NODE_ENV`
- `production` - Production build optimizations
- `development` - Development mode (default)

### `SASS_SILENCE_DEPRECATIONS`
Silence specific SASS deprecation warnings:
```bash
SASS_SILENCE_DEPRECATIONS=legacy-js-api,import yarn build
```

---

## Performance Tips

1. **Use watch mode during development:**
   ```bash
   yarn postcss-watch
   ```

2. **Skip tests during rapid iteration:**
   ```bash
   yarn build:prod --skip-tests
   ```

3. **Build specific components:**
   ```bash
   postcss 'src/components/button/**/*.scss' --base src -d lib
   ```

4. **Parallel builds:**
   ```bash
   yarn build & yarn build-storybook
   ```

---

## Additional Resources

- [PostCSS Documentation](https://postcss.org/)
- [Storybook Documentation](https://storybook.js.org/)
- [SASS Documentation](https://sass-lang.com/)
- [Stylelint Documentation](https://stylelint.io/)

---

**Last Updated:** January 29, 2026  
**Package Version:** 0.2.0
