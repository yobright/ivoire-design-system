# @ivds/design-tokens

Les tokens de design du Ivoire Design System. Ce package fournit la couche fondation du systeme : couleurs, typographie, espacements, elevation, animation, surfaces et alias semantiques, dans tous les formats utiles a une implementation produit.

## Direction visuelle

La fondation actuelle suit 4 principes :

- **Langage visuel africain moderne** : une base neutre rechauffee, un orange vibrant pour les CTA et un teal structurel pour la lisibilite produit.
- **Systeme scalable produit** : les tokens de marque restent expressifs, mais la consommation recommandee passe par les tokens semantiques.
- **Signature reconnaissable** : les gradients `primary`, `sunset`, `nature` et `premium` servent de marqueurs identitaires.
- **Neutralite d'usage** : aucune convention gouvernementale n'est necessaire pour utiliser la librairie dans un produit prive, public ou editorial.

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

const primary = tokens.color.brand.primary['500']; // '#ff9f1c'
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
| Brand primary | `--color-brand-primary-50` a `950` | Orange vibrant `#ff9f1c` pour les CTA et highlights |
| Brand secondary | `--color-brand-secondary-50` a `950` | Teal moderne `#2ec4b6` pour la structure et les actions secondaires |
| Brand accent | `--color-brand-accent-50` a `950` | Teal interactif `#14b8a6` pour liens, focus et surfaces actives |
| Brand premium | `--color-brand-premium-50` a `950` | Or africain `#f4a261` pour l'offre, les badges premium et les mises en valeur |
| Brand earth | `--color-brand-earth-50` a `950` | Terre battue `#9b2226` pour l'ancrage visuel et les usages destructifs |
| Semantic | `--color-semantic-success/warning/error/destructive/info-*` | Etats de feedback et foregrounds associes |
| Semantic surfaces | `--color-semantic-surface-primary/secondary/tertiary/inverse` | Surfaces de base pour UI light/dark |
| UI base | `--color-ui-neutral-*` | Echelle neutre rechauffee pour 70% de l'interface |
| UI feedback | `--color-ui-success/warning/error/info-*` | Palette feedback harmonisee avec la marque |

### Gradients signature

| Token | Usage |
|-------|-------|
| `--color-brand-gradient-primary` | Hero sections, CTA majeurs |
| `--color-brand-gradient-sunset` | Editorial, onboarding, promos |
| `--color-brand-gradient-nature` | Sections produit, narration, bloc de confiance |
| `--color-brand-gradient-premium` | Pricing, offre premium, badges distintifs |

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
| `--shadow-none` a `--shadow-2xl` | Ombres propres et progressives pour surfaces et overlays |
| `--shadow-glow-primary/secondary/accent` | Halos colores pour le focus et les etats actifs |
| `--blur-sm` a `--blur-2xl` | Effets de flou |
| `--backdrop-glass/frosted` | Effets de fond |

### Motion

| Token | Description |
|-------|-------------|
| `--animation-duration-fast/normal/slow` | Rythme de base : 150ms, 250ms, 400ms |
| `--animation-easing-standard` | Courbe par defaut pour les transitions UI |
| `--animation-easing-smooth` | Courbe plus organique pour mouvements continus |
| `--animation-easing-bounce` | Courbe de micro-rebond pour feedback premium |
| `--animation-transition-colors/surface/transform` | Transitions explicites sans `transition: all` |

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

### Architecture d'implementation

- **Couche marque** : `tokens/color/brand*.json`
- **Couche feedback et surfaces** : `tokens/color/semantic.json` et `tokens/color/ui/*`
- **Couche motion** : `tokens/animation/animation.json`
- **Couche elevation** : `tokens/elevation/shadows.json`

Cette separation permet de reproduire l'organisation des design systems de reference tout en gardant une identite IVDS propre.

```bash
yarn build         # Generer tous les formats
yarn test          # Valider les sorties
```

## Licence

MIT
