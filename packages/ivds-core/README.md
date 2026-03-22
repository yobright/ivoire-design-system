# @ivds/core

Core styles for the Ivoire Design System (IVDS). This package provides CSS-only component styles and utilities that consume design tokens from `@ivds/design-tokens`.

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

/* Government namespace patterns */
@import '@ivds/core/gov';

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

- **Form Components**: Button, Text Input, Checkbox, Radio Button
- **Layout Components**: Card, Notification, Tag
- **Navigation Components**: Breadcrumb, Navigation, Pagination
- **Structural Components**: Header, Footer
- **Government Patterns**: Gov shell, promo, flash ticker, primary nav, news/agenda panels, service directory, mega footer
- **Utilities**: Spacing, Typography, Layout, Grid, Flexbox
- **Icons**: Essential icon set with base styling

## Customization

IVDS Core uses CSS custom properties from `@ivds/design-tokens`. You can customize the design system by overriding these properties:

```css
:root {
  --color-brand-primary-500: #your-brand-color;
  --fontFamily-sans: 'Your Font', system-ui, sans-serif;
  --spacing-4: 1.5rem; /* Custom spacing */
}
```

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
