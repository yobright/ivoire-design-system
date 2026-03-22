# @ivds/design-tokens

Les tokens de design du Ivoire Design System. Ce package fournit les couleurs, la typographie, les espacements, l'elevation, les animations et plus encore, dans tous les formats dont vous avez besoin.

## Installation

```bash
yarn add @ivds/design-tokens
```

---

## Formats disponibles

Les tokens sont generes en plusieurs formats pour s'adapter a votre stack :

| Format | Import | Usage |
|--------|--------|-------|
| CSS | `@ivds/design-tokens/css` | Custom properties dans `:root` |
| SCSS | `@ivds/design-tokens/scss` | Variables SCSS |
| JavaScript | `@ivds/design-tokens/js` | Objets JS exportes |
| TypeScript | `@ivds/design-tokens` | Types generes automatiquement |
| JSON | `@ivds/design-tokens/json` | Outillage, CI, scripts |

---

## Utilisation

### CSS

```css
@import '@ivds/design-tokens/css/all.css';

.ma-carte {
  background: var(--color-brand-primary-50);
  color: var(--color-brand-primary-900);
  padding: var(--spacing-m);
  border-radius: var(--borderRadius-md);
  font-family: var(--typography-fontFamilies-primary);
}
```

### SCSS

```scss
@use '@ivds/design-tokens/scss/all' as tokens;

.ma-carte {
  background: tokens.$color-brand-primary-50;
  padding: tokens.$spacing-m;
  border-radius: tokens.$borderRadius-md;
}
```

### JavaScript / TypeScript

```tsx
import tokens from '@ivds/design-tokens';

const primary = tokens.color.brand.primary['500']; // '#CC5500'
const fontBody = tokens.typography.fontFamilies.primary;
const spacing = tokens.spacing.m; // '1.5rem'
```

### Imports individuels

Vous pouvez importer uniquement ce dont vous avez besoin :

```css
/* Seulement les couleurs brand */
@import '@ivds/design-tokens/css/color/brand.css';

/* Seulement la typographie */
@import '@ivds/design-tokens/css/typography/typography.css';

/* Seulement les espacements */
@import '@ivds/design-tokens/css/spacing/component.css';
```

---

## Categories de tokens

### Couleurs

| Categorie | Tokens | Description |
|-----------|--------|-------------|
| Brand primary | `--color-brand-primary-50` a `950` | Burnt orange `#CC5500` — identite ivoirienne |
| Brand secondary | `--color-brand-secondary-50` a `950` | Vert institutionnel `#007a4d` |
| Brand accent | `--color-brand-accent-50` a `950` | Bleu lagune `#1a6bdb` |
| Brand cocoa | `--color-brand-cocoa` | Brun cacao `#6b4423` |
| Brand gold | `--color-brand-gold` | Or savane `#d4af37` |
| Semantic | `--color-semantic-success/warning/error/info-*` | Couleurs de feedback |
| UI base | `--color-ui-neutral-*` | Echelle de gris neutre |
| UI feedback | `--color-ui-success/warning/error/info-*` | Palette feedback IVDS |

### Typographie

| Token | Valeur | Usage |
|-------|--------|-------|
| `--typography-fontFamilies-primary` | Inter | Texte courant, UI |
| `--typography-fontFamilies-secondary` | IBM Plex Sans | Titres, headings |
| `--typography-fontFamilies-mono` | JetBrains Mono | Code |
| `--fontSize-xs` a `--fontSize-9xl` | 0.75rem a 8rem | Echelle typographique |
| `--fontWeight-normal` a `--fontWeight-black` | 400 a 900 | Graisses |
| `--lineHeight-tight` a `--lineHeight-loose` | 1.25 a 2 | Hauteurs de ligne |

### Espacement

| Token | Valeur | Usage |
|-------|--------|-------|
| `--spacing-4xs` a `--spacing-5xl` | 0.125rem a 4.5rem | Espacement composant |
| `--spacing-layout-2xs` a `--spacing-layout-2xl` | 1rem a 8rem | Espacement layout |

### Elevation

| Token | Valeur |
|-------|--------|
| `--shadow-none` a `--shadow-2xl` | 7 niveaux d'ombre |
| `--glow-primary/secondary/accent` | Halos colores pour le focus |
| `--blur-sm` a `--blur-2xl` | Effets de flou |
| `--backdrop-glass/frosted` | Effets de fond |

### Autres

| Categorie | Tokens |
|-----------|--------|
| Border radius | `--borderRadius-none` a `--borderRadius-full` |
| Breakpoints | `--breakpoints-xs` (480px) a `--breakpoints-xl` (1440px) |
| Container | `--breakpoint-container-width-xs` a `2xl` |
| Animation | `--animation-duration-*`, `--animation-easing-*`, `--animation-transition-*` |
| Opacite | `--opacity-0` a `--opacity-100` |
| Z-index | `--zIndex-hide` a `--zIndex-tooltip` |

---

## Mode sombre

Les tokens s'utilisent avec le contrat de theme defini dans `@ivds/core`. Le mode sombre s'active via l'attribut `data-ivds-theme="dark"` :

```html
<html data-ivds-theme="dark">
```

Ou via le ThemeProvider React :

```tsx
import { ThemeProvider } from '@ivds/react/theme';
<ThemeProvider mode="dark">{children}</ThemeProvider>
```

---

## Build

Les tokens sont generes par [Style Dictionary](https://amzn.github.io/style-dictionary/) a partir des fichiers JSON dans `tokens/`.

```bash
yarn build         # Generer tous les formats
yarn test          # Valider les sorties
```

## Licence

MIT
