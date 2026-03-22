# Journal des modifications

Format base sur [Keep a Changelog](https://keepachangelog.com/fr/1.0.0/).
Le projet suit le [Versionnage semantique](https://semver.org/lang/fr/).

---

## [Non publie]

### Ajoute
- Focus ring unifie par outline (remplacement du box-shadow) sur tous les composants interactifs
- API CSS par composant : chaque composant expose des custom properties sur son element racine
- Token `touch-target-min` (48px, WCAG 2.2 AA)
- Tokens d'opacite et de z-index
- `aria-describedby` composable sur TextInput (error + helper)

### Modifie
- **Couleur primary** : `#e6730d` -> `#CC5500` (burnt orange) — palette complete recalculee
- **Typographie** : `Public Sans` -> `Inter` (body), `IBM Plex Sans` (headings)
- **Couleurs accent** : fallbacks alignes sur les valeurs reelles des tokens (`#1058b8` pour accent-600)
- **Min-height** de tous les composants interactifs portee a 48px minimum
- Suppression des variables CSS auto-referencees dans `_theme.scss`
- Border-radius xs : `0` -> `0.0625rem` (1px)

### Supprime
- Mixin `button-ripple` (inutilise)

---

## [1.0.0] - 2026-03-12

### Ajoute
- Monorepo avec Lerna et trois packages (`@ivds/design-tokens`, `@ivds/core`, `@ivds/react`)
- Systeme de couleurs : brand (orange, vert, cocoa, gold, lagoon), UI neutrals, feedback
- Tokens de typographie, espacement, elevation, animations, breakpoints, border-radius
- Build multi-format : CSS, SCSS, JavaScript, JSON, TypeScript
- 20 composants CSS Core avec convention BEM
- 20 composants React avec TypeScript et forwardRef
- ThemeProvider avec modes light/dark
- Storybook pour Core (HTML) et React
- Starters : `gov-html` (HTML/CSS) et `gov-next` (Next.js 14)

---

## Dependances entre packages

```
@ivds/design-tokens  (aucune dependance)
       |
  @ivds/core         (depend de design-tokens)
       |
  @ivds/react        (depend de core et design-tokens)
```

## Changelogs par package

- [@ivds/design-tokens](packages/ivds-design-tokens/CHANGELOG.md)
- [@ivds/react](packages/ivds-react/CHANGELOG.md)
