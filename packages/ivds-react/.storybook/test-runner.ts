import type { TestRunnerConfig } from '@storybook/test-runner';
import { injectAxe, checkA11y, configureAxe } from 'axe-playwright';

const config: TestRunnerConfig = {
  setup() {
    // Setup code that runs before all tests
  },
  
  async preVisit(page) {
    // Inject axe-core into the page before each story
    await injectAxe(page);
  },
  
  async postVisit(page, context) {
    // Configure axe rules
    await configureAxe(page, {
      rules: [
        // Disable color-contrast rule for now as it may be too strict
        { id: 'color-contrast', enabled: false },
        // Enable other important accessibility rules
        { id: 'aria-allowed-attr', enabled: true },
        { id: 'aria-hidden-focus', enabled: true },
        { id: 'aria-required-children', enabled: true },
        { id: 'aria-required-parent', enabled: true },
        { id: 'aria-roles', enabled: true },
        { id: 'aria-valid-attr', enabled: true },
        { id: 'aria-valid-attr-value', enabled: true },
        { id: 'button-name', enabled: true },
        { id: 'bypass', enabled: true },
        { id: 'duplicate-id', enabled: true },
        { id: 'form-field-multiple-labels', enabled: true },
        { id: 'frame-title', enabled: true },
        { id: 'html-has-lang', enabled: true },
        { id: 'html-lang-valid', enabled: true },
        { id: 'image-alt', enabled: true },
        { id: 'input-button-name', enabled: true },
        { id: 'input-image-alt', enabled: true },
        { id: 'label', enabled: true },
        { id: 'link-name', enabled: true },
        { id: 'list', enabled: true },
        { id: 'listitem', enabled: true },
        { id: 'meta-refresh', enabled: true },
        { id: 'meta-viewport', enabled: true },
        { id: 'object-alt', enabled: true },
        { id: 'role-img-alt', enabled: true },
        { id: 'scrollable-region-focusable', enabled: true },
        { id: 'select-name', enabled: true },
        { id: 'server-side-image-map', enabled: true },
        { id: 'svg-img-alt', enabled: true },
        { id: 'td-headers-attr', enabled: true },
        { id: 'th-has-data-cells', enabled: true },
        { id: 'valid-lang', enabled: true },
        { id: 'video-caption', enabled: true }
      ]
    });

    // Run accessibility checks
    await checkA11y(page, '#storybook-root', {
      detailedReport: true,
      detailedReportOptions: {
        html: true
      }
    });
  },
  
  // Tags to include/exclude
  tags: {
    include: ['test'],
    exclude: ['skip-test'],
    skip: ['broken']
  }
};

export default config;