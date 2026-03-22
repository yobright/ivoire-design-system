import type { Preview } from '@storybook/react-vite';
import React from 'react';
import { ThemeProvider, type IvdsThemeMode } from '../src/theme';

// Import design tokens first — defines all CSS custom properties
import '@ivds/design-tokens/lib/all.css';

// Import IVDS Core styles
import '@ivds/core';

// Load Inter + IBM Plex Sans from Google Fonts
const fontLink = document.createElement('link');
fontLink.rel = 'stylesheet';
fontLink.href = 'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;0,700&family=Inter:wght@300;400;500;600;700&display=swap';
document.head.appendChild(fontLink);

const preview: Preview = {
    decorators: [
        (Story, context) => {
            const mode = (context.globals.ivdsTheme as IvdsThemeMode) || 'light';
            return React.createElement(
                ThemeProvider,
                { mode, target: 'scoped' },
                React.createElement(Story),
            );
        },
    ],

    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        docs: {
            description: {
                component: "IVDS React fournit des composants React qui s'appuient sur IVDS Core, avec TypeScript et des patterns React modernes.",
            },
        },
        // Accessibility addon configuration
        a11y: {
            config: {
                rules: [
                    {
                        id: 'color-contrast',
                        enabled: true,
                    },
                    {
                        id: 'focus-order-semantics',
                        enabled: true,
                    },
                    {
                        id: 'keyboard-navigation',
                        enabled: true,
                    },
                ],
            },
            options: {
                checks: {
                    'color-contrast': { options: { noScroll: true } },
                },
                restoreScroll: true,
                runOnly: {
                    type: 'tag',
                    values: ['wcag2a', 'wcag2aa', 'wcag21aa'],
                },
            },
        },
        // Viewport addon configuration
        viewport: {
            defaultViewport: 'desktop',
            viewports: {
                mobile: {
                    name: 'Mobile (375 px)',
                    styles: {
                        width: '375px',
                        height: '667px',
                    },
                    type: 'mobile',
                },
                tablet: {
                    name: 'Tablette (768 px)',
                    styles: {
                        width: '768px',
                        height: '1024px',
                    },
                    type: 'tablet',
                },
                desktop: {
                    name: 'Bureau (1024 px)',
                    styles: {
                        width: '1024px',
                        height: '768px',
                    },
                    type: 'desktop',
                },
            },
        },
        // Backgrounds addon configuration
        backgrounds: {
            default: 'light',
            values: [
                {
                    name: 'clair',
                    value: '#ffffff',
                },
                {
                    name: 'sombre',
                    value: '#1a1a1a',
                },
                {
                    name: 'gray-50',
                    value: '#f9fafb',
                },
            ],
        },
    },

    // Global types for toolbar controls
    globalTypes: {
        ivdsTheme: {
            description: 'Theme global des composants',
            defaultValue: 'light',
            toolbar: {
                title: 'Thème',
                icon: 'paintbrush',
                items: [
                    { value: 'light', title: 'Clair' },
                    { value: 'dark', title: 'Sombre' },
                ],
                dynamicTitle: true,
            },
        },
    },
};

export default preview;
