# @ivds/core

Core styles for the Ivoire Design System (IVDS). This package provides CSS-only component styles and utilities that consume design tokens from `@ivds/design-tokens`.

## Theme contract

`@ivds/core` now exposes a semantic theme contract designed for a neutral, product-first design system:

- **Primary CTA**: orange (`--ivds-interactive-primary-*`)
- **Secondary action**: teal (`--ivds-interactive-secondary-*`)
- **Premium highlight**: gold gradients and premium surfaces
- **Destructive states**: earth / terre battue palette
- **Surfaces**: `--ivds-surface-*`
- **Text**: `--ivds-text-*`
- **Motion**: `--ivds-motion-*` and `--ivds-transition-*`

This layer is the stable API consumed by components. When possible, customize the theme contract rather than patching individual component rules.

## Installation

```bash
npm install @ivds/core @ivds/design-tokens
# or
yarn add @ivds/core @ivds/design-tokens
```

## Usage

### Complete Bundle

Import all IVDS Core styles:

```css
@import '@ivds/core';
```

Or use the CSS file directly:

```html
<link rel="stylesheet" href="node_modules/@ivds/core/lib/all.css">
```

### Selective Imports

Import only what you need:

```css
/* Base styles */
@import '@ivds/core/base';

/* Utilities only */
@import '@ivds/core/utils';

/* Specific components */
@import '@ivds/core/components/button';
@import '@ivds/core/components/card';

/* Icons */
@import '@ivds/core/icons';
```

### HTML Usage

Use IVDS components with CSS classes:

```html
<!-- Button component -->
<button class="ivds-button ivds-button--primary">
  Primary Button
</button>

<!-- Card component -->
<div class="ivds-card">
  <div class="ivds-card__header">
    <h3 class="ivds-card__title">Card Title</h3>
  </div>
  <div class="ivds-card__body">
    <p class="ivds-card__content">Card content goes here.</p>
  </div>
</div>

<!-- Utility classes -->
<div class="ivds-flex ivds-flex--justify-between ivds-p-4">
  <span>Left content</span>
  <span>Right content</span>
</div>
```

## Available Components

- **Form Components**: Button, Text Input, Fieldset, Selection Group, Error Summary, File Input, Checkbox, Radio Button
- **Layout Components**: Container, Columns, Section, Link, Card, Notification, Tag, Tooltip, Toggle Button, Accordion, Hero, Highlight, Linkbox, Table, Stepper, Step By Step, Cookie Consent, Logo, Image With Card, Login, Koros
- **Navigation Components**: Breadcrumb, Navigation, Pagination
- **Structural Components**: Header, Footer
- **Utilities**: Spacing, Typography, Layout, Grid, Flexbox
- **Icons**: Essential icon set with base styling

## Customization

IVDS Core uses CSS custom properties from `@ivds/design-tokens`. You can customize the design system by overriding these properties:

```css
:root {
  --ivds-interactive-primary-bg: var(--color-brand-primary-500);
  --ivds-interactive-secondary-border: var(--color-brand-secondary-600);
  --ivds-surface-base: #ffffff;
  --ivds-text-primary: var(--color-semantic-neutral-900);
}
```

### Recommended customization strategy

1. Override design tokens when you need to extend the IVDS identity.
2. Override `--ivds-*` theme aliases when you want to reskin the system safely.
3. Override component selectors only as a last resort.

## Framework Integration

### CSS Modules

```javascript
import styles from '@ivds/core/components/button.css';

function Button({ children, variant = 'primary' }) {
  return (
    <button className={`ivds-button ivds-button--${variant}`}>
      {children}
    </button>
  );
}
```

### Styled Components

```javascript
import styled from 'styled-components';
import '@ivds/core/components/button';

const StyledButton = styled.button.attrs({
  className: 'ivds-button ivds-button--primary'
})`
  /* Additional custom styles */
`;
```

### Vue.js

```vue
<template>
  <button :class="buttonClasses">
    <slot />
  </button>
</template>

<script>
import '@ivds/core/components/button';

export default {
  props: {
    variant: {
      type: String,
      default: 'primary'
    }
  },
  computed: {
    buttonClasses() {
      return `ivds-button ivds-button--${this.variant}`;
    }
  }
};
</script>
```

## Browser Support

- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+

Legacy browser support available with CSS custom property fallbacks.

## Documentation

- [Storybook Documentation](https://ivds.github.io/design-system/core)
- [Design System Guidelines](https://ivds.github.io/design-system)
- [Component Examples](https://ivds.github.io/design-system/core/examples)

## Build System

The package uses a modern build system with:

- **PostCSS** with SCSS support for compilation
- **Stylelint** for code quality and BEM methodology enforcement
- **Jest** for SCSS unit testing
- **Storybook** for component documentation
- **Bundle size monitoring** to ensure optimal performance

### Build Commands

```bash
# Development build
yarn build

# Production build (optimized, warnings suppressed)
yarn build:prod

# Watch mode for development
yarn test:watch

# Check bundle sizes
yarn size
```

### Bundle Sizes

- Main bundle: `all.css` (target: <50kB)
- Minified bundle: `all.min.css` (target: <25kB)
- Individual components available for selective imports

## Performance

IVDS Core is optimized for production use:

- Minimal CSS output with dead code elimination
- Gzip-friendly compression (typically 70%+ reduction)
- Tree-shakeable imports for optimal bundle sizes
- Modern CSS features with fallbacks for older browsers

## Contributing

See [DEVELOPMENT.md](./DEVELOPMENT.md) for development setup and contribution guidelines.

## License

MIT License - see [LICENSE](../../LICENSE) for details.
