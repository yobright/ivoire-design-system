# ivds-design-tokens

Design tokens pour le Ivoire Design System  (IVDS).

## Getting started

Installez le package.

```bash
yarn add @ivds/design-tokens
```

## What's included

```
@ivds/design-tokens/
├── lib/                           # token source files
│   ├── breakpoints/
│   │   ├── breakpoints (.scss,.css)     # breakpoint variables
│   │   └── breakpoints (.json,.js)      # breakpoint data
│   ├── border/
│   │   ├── border (.scss,.css)          # border radius variables
│   │   └── border (.json,.js)           # border radius data
│   ├── color/
│   │   ├── colors (.scss,.css)          # brand color variables
│   │   ├── colors (.json,.js)           # brand color data
│   │   └── semantic (.json)             # semantic color variables
│   ├── elevation/
│   │   ├── elevation (.scss,.css)       # shadow variables
│   │   └── elevation (.json,.js)        # shadow data
│   ├── spacing/
│   │   ├── spacing (.scss,.css)         # layout spacing variables
│   │   └── spacing (.json,.js)          # spacing data
│   ├── typography/
│   │   ├── typography (.scss,.css)      # font variables
│   │   ├── font-sizes (.json)           # font-size variables
│   │   ├── font-weights (.json)         # font-weight variables
│   │   └── line-heights (.json)         # line-height variables
│   ├── all (.scss,.css)                 # all variables
│   ├── index (.js,.d.ts,.cjs)          # JavaScript exports
│   └── tokens (.json)                   # all token data
```

## Using the tokens

Importez n'importe lequel des fichiers `.css` ou `.scss` disponibles. Les **variables CSS** importées seront appliquées à l'élément `:root`.

### CSS

```css
/* Import all tokens */
@import '@ivds/design-tokens/lib/all.css';

.my-component {
  color: var(--color-brand-primary-500);
  padding: var(--spacing-4);
  border-radius: var(--borderRadius-md);
  box-shadow: var(--shadow-lg);
}
```

### SCSS

```scss
@import '@ivds/design-tokens/lib/all.scss';

.my-component {
  color: $color-brand-primary-500;
  padding: $spacing-4;
  border-radius: $borderRadius-md;
  box-shadow: $shadow-lg;
}
```

### JavaScript

```javascript
// Import all tokens
import { tokens } from '@ivds/design-tokens/lib/index.js';

// Import specific categories
import { color, spacing } from '@ivds/design-tokens/lib/index.js';

const styles = {
  color: tokens.color.brand.primary['500'],
  padding: tokens.spacing['4'],
  borderRadius: tokens.borderRadius.md,
  boxShadow: tokens.shadow.lg,
};
```

### TypeScript

```typescript
import type { Tokens } from '@ivds/design-tokens/lib/index.d.ts';
import { tokens } from '@ivds/design-tokens/lib/index.js';

const theme: Partial<Tokens> = {
  color: tokens.color.brand.primary['500'],
  spacing: tokens.spacing['4'],
};
```

### JSON

```javascript
// For build tools and integrations
import tokens from '@ivds/design-tokens/lib/tokens.json';
```

## Token Categories

### Colors

**Brand Colors**
- `--color-brand-primary-*` (50-950)
- `--color-brand-secondary-*` (50-950)

**Semantic Colors**
- `--color-semantic-success-*` (50-950)
- `--color-semantic-warning-*` (50-950)
- `--color-semantic-error-*` (50-950)
- `--color-semantic-info-*` (50-950)
- `--color-semantic-neutral-*` (50-950)

### Typography

**Font Sizes**
- `--fontSize-xs` à `--fontSize-9xl` (12px à 128px)

**Font Weights**
- `--fontWeight-thin` (100) à `--fontWeight-black` (900)

**Line Heights**
- `--lineHeight-none` (1) à `--lineHeight-loose` (2)

### Spacing

Basé sur une grille 4px/8px :
- `--spacing-0` (0) à `--spacing-64` (16rem)

### Shadows

7 niveaux d'élévation :
- `--shadow-none` à `--shadow-2xl`
- `--shadow-inner` pour les ombres intérieures

### Border Radius

9 valeurs de rayon :
- `--borderRadius-none` (0) à `--borderRadius-full` (9999px)

### Breakpoints

6 points de rupture responsive :
- `--breakpoint-xs` (320px) à `--breakpoint-2xl` (1536px)

## Framework Integration

### Tailwind CSS

```javascript
// tailwind.config.js
const tokens = require('@ivds/design-tokens/lib/tokens.json');

module.exports = {
  theme: {
    extend: {
      colors: tokens.color,
      spacing: tokens.spacing,
      fontSize: tokens.fontSize,
      fontWeight: tokens.fontWeight,
      borderRadius: tokens.borderRadius,
      boxShadow: tokens.shadow,
      screens: tokens.breakpoints,
    },
  },
};
```

### CSS-in-JS (Styled Components, Emotion)

```javascript
import { tokens } from '@ivds/design-tokens/lib/index.js';

const theme = {
  colors: tokens.color,
  space: tokens.spacing,
  fontSizes: tokens.fontSize,
  fontWeights: tokens.fontWeight,
  radii: tokens.borderRadius,
  shadows: tokens.shadow,
  breakpoints: tokens.breakpoints,
};

export default theme;
```

### React (CSS Modules)

```css
/* styles.module.css */
@import '@ivds/design-tokens/lib/all.css';

.button {
  background-color: var(--color-brand-primary-500);
  color: var(--color-semantic-neutral-50);
  padding: var(--spacing-3) var(--spacing-6);
  border-radius: var(--borderRadius-md);
  font-size: var(--fontSize-sm);
  font-weight: var(--fontWeight-medium);
  box-shadow: var(--shadow-sm);
}

.button:hover {
  background-color: var(--color-brand-primary-600);
  box-shadow: var(--shadow-md);
}
```

## Dark Mode

Implémentez le mode sombre en surchargeant les variables CSS :

```css
@import '@ivds/design-tokens/lib/all.css';

/* Light mode (default) */
:root {
  --color-bg: var(--color-semantic-neutral-50);
  --color-text: var(--color-semantic-neutral-900);
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
  :root {
    --color-bg: var(--color-semantic-neutral-900);
    --color-text: var(--color-semantic-neutral-50);
    --color-semantic-neutral-50: #0a0a0a;
    --color-semantic-neutral-950: #fafafa;
    /* ... autres surcharges */
  }
}

/* Manual dark mode toggle */
[data-theme="dark"] {
  --color-bg: var(--color-semantic-neutral-900);
  --color-text: var(--color-semantic-neutral-50);
}
```

## Development

En savoir plus [ici](https://github.com/babiverse/ivoire-design-system/blob/main/packages/ivds-design-tokens/DEVELOPMENT.md).

## Built with

- [Style Dictionary](https://amzn.github.io/style-dictionary/) pour la transformation des tokens
- [clean-css](https://github.com/clean-css/clean-css) pour la minification CSS
- [TypeScript](https://www.typescriptlang.org/) pour les définitions de types

## Versioning

Ce package suit [Semantic Versioning](https://semver.org/). Les changements breaking sont documentés dans les releases notes.

## Contributing

Consultez le [guide de contribution](https://github.com/babiverse/ivoire-design-system/blob/main/CONTRIBUTING.md).

## License

MIT © [Contributeurs IVDS](https://github.com/babiverse/ivoire-design-system/blob/main/LICENSE)

## Links

- [📦 Package npm](https://www.npmjs.com/package/@ivds/design-tokens)
- [📖 Documentation](https://github.com/babiverse/ivoire-design-system)
- [🐛 Issues](https://github.com/babiverse/ivoire-design-system/issues)
- [🎨 Composants React](https://www.npmjs.com/package/@ivds/react) (à venir)
- [🎭 Playground](https://ivds-playground.vercel.app) (à venir)

---

**Keywords:** design-tokens, design-system, css, scss, javascript, typescript, ivds, tokens, ui, frontend, react, vue, angular, tailwind, styled-components, emotion