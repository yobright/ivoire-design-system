# @ivds/design-tokens

Les tokens de design d’Ivoire Design System. Ce package fournit la couche de fondation du système : couleurs, typographie, espacements, élévation, animation, surfaces et alias sémantiques, dans des formats adaptés à différents contextes d’intégration.

## Principes de fondation

La structure actuelle repose sur quatre principes :

- **Une base de marque identifiable** : une palette de marque et des gradients réutilisables.
- **Une consommation sémantique prioritaire** : les tokens sémantiques constituent l’interface recommandée pour les produits.
- **Une base neutre pour l’interface** : l’échelle `neutral` structure les surfaces, bordures et textes courants.
- **Une adoption multi-contexte** : la librairie peut être utilisée dans des interfaces publiques, privées ou éditoriales.

## Installation

```bash
yarn add @ivds/design-tokens
```

---

## Formats disponibles

Les tokens sont générés en plusieurs formats pour s’adapter à votre stack :

| Format | Import | Usage |
|--------|--------|-------|
| CSS | `@ivds/design-tokens/css` | Custom properties dans `:root` |
| SCSS | `@ivds/design-tokens/scss` | Variables SCSS |
| JavaScript | `@ivds/design-tokens/js` | Objets JS exportés |
| TypeScript | `@ivds/design-tokens` | Types générés automatiquement |
| JSON | `@ivds/design-tokens/json` | Outillage, CI, scripts |

### Presets officiels

| Preset | Import | Usage |
|--------|--------|-------|
| Default | `@ivds/design-tokens/css/default.css` | Base IVDS et mode explicite `default` |
| Dark | `@ivds/design-tokens/css/dark.css` | Variables pour `[data-ivds-theme='dark']` |
| High Contrast | `@ivds/design-tokens/css/high-contrast.css` | Variables pour `[data-ivds-theme='high-contrast']` |

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

### Utiliser un preset officiel

```css
@import '@ivds/design-tokens/css/all.css';
@import '@ivds/design-tokens/css/default.css';
@import '@ivds/design-tokens/css/dark.css';
@import '@ivds/design-tokens/css/high-contrast.css';
```

```html
<html data-ivds-theme="dark">
```

---

## Catégories de tokens

### Couleurs

| Catégorie | Tokens | Description |
|-----------|--------|-------------|
| Brand primary | `--color-brand-primary-50` à `950` | Orange principal utilisé pour les appels à l’action et les mises en avant |
| Brand secondary | `--color-brand-secondary-50` à `950` | Palette secondaire pour la structure et les actions complémentaires |
| Brand accent | `--color-brand-accent-50` à `950` | Couleur d’accent pour liens, focus et états actifs |
| Brand premium | `--color-brand-premium-50` à `950` | Palette de mise en valeur pour variantes premium |
| Brand earth | `--color-brand-earth-50` à `950` | Palette plus dense pour l’ancrage visuel et certains usages destructifs |
| Semantic | `--color-semantic-success/warning/error/destructive/info-*` | États de feedback et contrastes associés |
| Semantic surfaces | `--color-semantic-surface-primary/secondary/tertiary/inverse` | Surfaces de base pour interfaces claires et sombres |
| UI base | `--color-ui-neutral-*` | Échelle neutre de base pour l’interface |
| UI feedback | `--color-ui-success/warning/error/info-*` | Palette de feedback cohérente avec la marque |

### Gradients de signature

| Token | Usage |
|-------|-------|
| `--color-brand-gradient-primary` | Sections hero, CTA majeurs |
| `--color-brand-gradient-sunset` | Parcours éditoriaux, onboarding, promotions |
| `--color-brand-gradient-nature` | Sections produit, narration, blocs de confiance |
| `--color-brand-gradient-premium` | Pricing, offre premium, badges distinctifs |

### Typographie

| Token | Valeur | Usage |
|-------|--------|-------|
| `--typography-fontFamilies-primary` | Inter | Texte courant, UI |
| `--typography-fontFamilies-secondary` | IBM Plex Sans | Titres, headings |
| `--typography-fontFamilies-mono` | JetBrains Mono | Code |
| `--fontSize-xs` à `--fontSize-9xl` | 0.75rem à 8rem | Échelle typographique |
| `--fontWeight-normal` à `--fontWeight-black` | 400 à 900 | Graisses |
| `--lineHeight-tight` à `--lineHeight-loose` | 1.25 à 2 | Hauteurs de ligne |

### Espacement

| Token | Valeur | Usage |
|-------|--------|-------|
| `--spacing-4xs` à `--spacing-5xl` | 0.125rem à 4.5rem | Espacement composant |
| `--spacing-layout-2xs` à `--spacing-layout-2xl` | 1rem à 8rem | Espacement layout |

### Élévation

| Token | Valeur |
|-------|--------|
| `--shadow-none` à `--shadow-2xl` | Ombres propres et progressives pour surfaces et overlays |
| `--shadow-glow-primary/secondary/accent` | Halos colorés pour le focus et les états actifs |
| `--blur-sm` à `--blur-2xl` | Effets de flou |
| `--backdrop-glass/frosted` | Effets de fond |

### Motion

| Token | Description |
|-------|-------------|
| `--animation-duration-fast/normal/slow` | Rythme de base : 150ms, 250ms, 400ms |
| `--animation-easing-standard` | Courbe par défaut pour les transitions UI |
| `--animation-easing-smooth` | Courbe plus organique pour mouvements continus |
| `--animation-easing-bounce` | Courbe de micro-rebond pour feedback premium |
| `--animation-transition-colors/surface/transform` | Transitions explicites sans `transition: all` |

### Autres

| Catégorie | Tokens |
|-----------|--------|
| Border radius | `--borderRadius-none` à `--borderRadius-full` |
| Breakpoints | `--breakpoints-xs` (480px) à `--breakpoints-xl` (1440px) |
| Container | `--breakpoint-container-width-xs` à `2xl` |
| Animation | `--animation-duration-*`, `--animation-easing-*`, `--animation-transition-*` |
| Opacité | `--opacity-0` à `--opacity-100` |
| Z-index | `--zIndex-hide` à `--zIndex-tooltip` |

### Couche de preset IVDS

Les presets officiels introduisent une couche `ivds.preset.*` destinée à stabiliser la thématisation. Cette couche est ensuite consommée par le contrat de thème de `@ivds/core` :

- `ivds.preset.brand.*`
- `ivds.preset.surface.*`
- `ivds.preset.border.*`
- `ivds.preset.text.*`
- `ivds.preset.interactive.*`
- `ivds.preset.gradient.*`
- `ivds.preset.radius.*`
- `ivds.preset.shadow.*`
- `ivds.preset.focus-ring.*`
- `ivds.preset.motion.*`
- `ivds.preset.transition.*`

---

## Mode sombre

Les tokens s’utilisent avec le contrat de thème défini dans `@ivds/core`. Le mode sombre s’active via l’attribut `data-ivds-theme="dark"` :

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

Les tokens sont générés par [Style Dictionary](https://amzn.github.io/style-dictionary/) à partir des fichiers JSON présents dans `tokens/`.

### Architecture d’implémentation

- **Couche marque** : `tokens/color/brand*.json`
- **Couche sémantique produit** : `tokens/color/semantic.json` pour `surface`, `text`, `border`, `interactive`, `success`, `warning`, `error`, `info`
- **Couche UI brute** : `tokens/color/ui/*`
- **Couche motion** : `tokens/animation/animation.json`
- **Couche élévation** : `tokens/elevation/shadows.json`

Cette séparation permet d’organiser les fondations du système de manière lisible, tout en conservant une identité IVDS distincte.

```bash
yarn build         # Générer tous les formats
yarn test          # Valider les sorties
```

## Licence

MIT
