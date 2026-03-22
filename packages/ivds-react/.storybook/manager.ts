import { addons } from '@storybook/manager-api';
import { themes } from '@storybook/theming';

addons.setConfig({
  theme: {
    ...themes.light,
    brandTitle: 'IVDS React — Ivoire Design System',
    brandUrl: 'https://babiverse.github.io/ivoire-design-system',
    brandImage: undefined,
    brandTarget: '_self',

    colorPrimary: '#CC5500',
    colorSecondary: '#1a6bdb',

    // UI
    appBg: '#faf9f7',
    appContentBg: '#ffffff',
    appBorderColor: '#e2e7ec',
    appBorderRadius: 6,

    // Typography
    fontBase: '"Inter", "IBM Plex Sans", system-ui, sans-serif',
    fontCode: '"JetBrains Mono", "Consolas", monospace',

    // Text colors
    textColor: '#121a24',
    textInverseColor: '#ffffff',

    // Toolbar
    barTextColor: '#6b7785',
    barSelectedColor: '#CC5500',
    barHoverColor: '#b34a00',
    barBg: '#faf9f7',

    // Form colors
    inputBg: '#ffffff',
    inputBorder: '#cfd6dd',
    inputTextColor: '#121a24',
    inputBorderRadius: 4,
  },

  panelPosition: 'bottom',
  showNav: true,
  showPanel: true,
  showToolbar: true,
  isFullscreen: false,

  sidebar: {
    showRoots: true,
    collapsedRoots: ['other'],
  },
});
