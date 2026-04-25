# Journal des modifications

Format base sur [Keep a Changelog](https://keepachangelog.com/fr/1.0.0/).
Le projet suit le [Versionnage semantique](https://semver.org/lang/fr/).

---

## [Non publie]

---

## [1.1.0] - 2026-04-13

### Ajoute
- **30+ nouveaux composants** React et Core SCSS :
  - Formulaires : TextArea, NumberInput, PasswordInput, PhoneInput, DateInput, TimeInput, Fieldset, SelectionGroup, ErrorSummary, FileInput
  - Mise en page : Container, Columns, Section, Link, Pagination, LoadingSpinner, StatusLabel, Tooltip, ToggleButton
  - Composite : Accordion, Hero, Highlight, Linkbox, Table, Stepper, StepByStep, CookieConsent, Logo, ImageWithCard, Login, Koros
  - Structure : SideNavigation
- Stories Storybook pour chaque nouveau composant
- 16 nouvelles suites de tests (37 suites, 172 tests au total)
- Focus ring unifie par outline sur tous les composants interactifs
- API CSS par composant : chaque composant expose des custom properties sur son element racine
- Token `touch-target-min` (48px, WCAG 2.2 AA)
- Tokens d'opacite et de z-index
- `aria-describedby` composable sur TextInput (error + helper)

### Corrige
- 6 suites de tests pre-existantes realignees (Alert, Tag, Card, TextInput, Select, Checkbox)

### Modifie
- **Couleur primary** : `#e6730d` -> `#CC5500` (burnt orange) — palette complete recalculee
- **Typographie** : `Public Sans` -> `Inter` (body), `IBM Plex Sans` (headings)
- **Couleurs accent** : fallbacks alignes sur les valeurs reelles des tokens
- **Min-height** de tous les composants interactifs portee a 48px minimum
- Nettoyage des references internes obsoletes dans la documentation

### Supprime
- Mixin `button-ripple` (inutilise)
- References a des systemes tiers dans la documentation et les commentaires de code

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
