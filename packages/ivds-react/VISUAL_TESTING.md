# Visual Regression Testing

This package includes comprehensive visual regression testing using Chromatic and Playwright, along with automated accessibility testing.

## Overview

We use multiple tools for visual testing:

1. **Chromatic** - Cloud-based visual regression testing for Storybook stories
2. **Playwright** - Local cross-browser visual testing and screenshots
3. **Storybook Test Runner** - Automated accessibility testing with axe-core

## Setup

### Prerequisites

1. Install dependencies:
   ```bash
   yarn install
   ```

2. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

### Chromatic Setup

1. Create a Chromatic project at [chromatic.com](https://chromatic.com)
2. Set the `CHROMATIC_PROJECT_TOKEN` environment variable or GitHub secret
3. Update `chromatic.config.json` with your project token

## Running Tests

### Visual Regression Tests

```bash
# Run Chromatic visual tests (requires project token)
yarn test:visual

# Run local Playwright visual tests
yarn test:visual:local

# Update Playwright visual snapshots
yarn test:visual:update
```

### Accessibility Tests

```bash
# Run accessibility tests with axe-core
yarn test:a11y

# Run all tests (unit + visual + accessibility)
yarn test:all
```

## Writing Visual Tests

### Playwright Visual Tests

Create `.visual.test.ts` files in component directories:

```typescript
import { test, expect } from '@playwright/test';

test.describe('Component Visual Tests', () => {
  test('should render correctly', async ({ page }) => {
    await page.goto('/iframe.html?id=components-component--default');
    await page.waitForLoadState('networkidle');
    
    await expect(page).toHaveScreenshot('component-default.png');
  });
});
```

### Storybook Stories for Visual Testing

Ensure your stories include:

1. **Default state** - Basic component rendering
2. **All variants** - Different visual variations
3. **Interactive states** - Hover, focus, active states
4. **Edge cases** - Long text, empty states, etc.

Example story structure:

```typescript
export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    // Chromatic configuration
    chromatic: {
      viewports: [320, 768, 1200],
      delay: 300, // Wait for animations
    },
  },
};

export const Default = {};

export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
    </div>
  ),
};
```

## Configuration

### Chromatic Configuration

Edit `chromatic.config.json`:

```json
{
  "projectToken": "YOUR_PROJECT_TOKEN",
  "buildScriptName": "build-storybook",
  "exitZeroOnChanges": true,
  "autoAcceptChanges": "main",
  "onlyChanged": true
}
```

### Playwright Configuration

Edit `playwright.config.ts` for:

- Browser configurations
- Viewport sizes
- Test timeouts
- Screenshot settings

### Accessibility Testing

Configure accessibility rules in `.storybook/test-runner.ts`:

```typescript
await configureAxe(page, {
  rules: [
    { id: 'color-contrast', enabled: true },
    { id: 'aria-valid-attr', enabled: true },
    // Add more rules as needed
  ]
});
```

## CI/CD Integration

The visual regression tests run automatically on:

- Pull requests to `main` or `develop`
- Pushes to `main` or `develop`
- Changes to component files

### GitHub Actions

The workflow includes:

1. **Build** - Build all packages
2. **Chromatic** - Upload to Chromatic for visual diff
3. **Accessibility** - Run axe-core tests
4. **Cross-browser** - Test on multiple browsers

### Environment Variables

Set these in your CI environment:

- `CHROMATIC_PROJECT_TOKEN` - Your Chromatic project token

## Best Practices

### Visual Test Guidelines

1. **Consistent snapshots** - Use `waitForLoadState('networkidle')` before screenshots
2. **Multiple viewports** - Test responsive behavior
3. **Interactive states** - Test hover, focus, and active states
4. **Edge cases** - Test with long text, empty states, etc.

### Accessibility Guidelines

1. **Semantic HTML** - Use proper HTML elements
2. **ARIA attributes** - Add ARIA labels where needed
3. **Keyboard navigation** - Ensure all interactive elements are keyboard accessible
4. **Color contrast** - Maintain WCAG AA contrast ratios

### Performance

1. **Selective testing** - Use `onlyChanged: true` in Chromatic
2. **Parallel execution** - Configure appropriate worker counts
3. **Caching** - Use GitHub Actions cache for dependencies

## Troubleshooting

### Common Issues

1. **Flaky tests** - Add appropriate waits and delays
2. **Screenshot differences** - Check for animations or dynamic content
3. **Accessibility failures** - Review ARIA attributes and semantic HTML
4. **CI timeouts** - Increase timeout values in configuration

### Debugging

```bash
# Run tests in headed mode
npx playwright test --headed

# Debug specific test
npx playwright test --debug Button.visual.test.ts

# Generate test report
npx playwright show-report
```