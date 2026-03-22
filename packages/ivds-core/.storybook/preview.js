/** @type { import('@storybook/html').Preview } */

// Import design tokens first — defines all CSS custom properties
import '../../ivds-design-tokens/lib/all.css';

// Import the complete IVDS Core styles
import '../src/all.scss';

// Load Inter + IBM Plex Sans from Google Fonts
const fontLink = document.createElement('link');
fontLink.rel = 'stylesheet';
fontLink.href = 'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;0,700&family=Inter:wght@300;400;500;600;700&display=swap';
document.head.appendChild(fontLink);

const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    docs: {
      description: {
        component: 'IVDS Core provides CSS-only component styles and utilities that consume design tokens from @ivds/design-tokens.'
      }
    },
    // Accessibility addon configuration
    a11y: {
      config: {
        rules: [
          {
            id: 'color-contrast',
            enabled: true
          },
          {
            id: 'focus-order-semantics',
            enabled: true
          },
          {
            id: 'keyboard-navigation',
            enabled: true
          },
          {
            id: 'aria-allowed-attr',
            enabled: true
          },
          {
            id: 'aria-required-attr',
            enabled: true
          },
          {
            id: 'button-name',
            enabled: true
          },
          {
            id: 'form-field-multiple-labels',
            enabled: true
          },
          {
            id: 'label',
            enabled: true
          }
        ]
      },
      options: {
        checks: { 
          'color-contrast': { options: { noScroll: true } },
          'aria-allowed-attr': { options: { noScroll: true } }
        },
        restoreScroll: true,
        runOnly: {
          type: 'tag',
          values: ['wcag2a', 'wcag2aa', 'wcag21aa']
        }
      }
    },
    // Viewport addon configuration
    viewport: {
      defaultViewport: 'desktop',
      viewports: {
        mobile: {
          name: 'Mobile (375px)',
          styles: {
            width: '375px',
            height: '667px'
          },
          type: 'mobile'
        },
        mobileLarge: {
          name: 'Mobile Large (414px)',
          styles: {
            width: '414px',
            height: '896px'
          },
          type: 'mobile'
        },
        tablet: {
          name: 'Tablet (768px)',
          styles: {
            width: '768px',
            height: '1024px'
          },
          type: 'tablet'
        },
        desktop: {
          name: 'Desktop (1024px)',
          styles: {
            width: '1024px',
            height: '768px'
          },
          type: 'desktop'
        },
        desktopLarge: {
          name: 'Desktop Large (1280px)',
          styles: {
            width: '1280px',
            height: '800px'
          },
          type: 'desktop'
        },
        wide: {
          name: 'Wide Desktop (1440px)',
          styles: {
            width: '1440px',
            height: '900px'
          },
          type: 'desktop'
        }
      }
    },
    // Backgrounds addon configuration
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#ffffff'
        },
        {
          name: 'dark',
          value: '#1a1a1a'
        },
        {
          name: 'gray-50',
          value: '#f9fafb'
        },
        {
          name: 'gray-100',
          value: '#f3f4f6'
        },
        {
          name: 'gray-900',
          value: '#111827'
        },
        {
          name: 'brand-primary',
          value: '#CC5500'
        }
      ]
    },
    
    // Measure addon configuration
    measure: {
      results: {
        precision: 2,
        fontSize: 12
      }
    },
    
    // Outline addon configuration
    outline: {
      disable: false
    }
  },
  
  // Global decorators - removed to fix HTML string rendering issue

  // Global types for toolbar controls
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'paintbrush',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' }
        ],
        dynamicTitle: true
      }
    }
  }
};

export default preview;