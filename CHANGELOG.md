# Journal des modifications

Format basé sur [Keep a Changelog](https://keepachangelog.com/fr/1.0.0/).
Le projet suit le [versionnage sémantique](https://semver.org/lang/fr/).

---

## [Non publié]

---

## [1.2.0] - 2026-05-16

### Ajouté
- Presets officiels `default`, `dark` et `high-contrast` pour les tokens et le `ThemeProvider`.
- Contrat d’accessibilité, phases de release, roadmap, gap analysis et guides de patterns.
- Couverture de tests React complète sur les 52 composants documentés.

### Corrigé
- Packaging npm aligné sur les versions déjà publiées.
- Image de hero décorative correctement masquée si aucun texte alternatif n’est fourni.
- Transitions CSS explicites sur breadcrumb et pagination.

### Modifié
- Publication ciblée sur les artefacts de build pour réduire le poids des packages npm.
- Peer dependencies internes alignées sur `^1.2.0`.

---

## [1.1.0] - 2026-04-13

### Ajouté
- **30+ nouveaux composants** React et Core SCSS :
  - Formulaires : TextArea, NumberInput, PasswordInput, PhoneInput, DateInput, TimeInput, Fieldset, SelectionGroup, ErrorSummary, FileInput
  - Mise en page : Container, Columns, Section, Link, Pagination, LoadingSpinner, StatusLabel, Tooltip, ToggleButton
  - Composite : Accordion, Hero, Highlight, Linkbox, Table, Stepper, StepByStep, CookieConsent, Logo, ImageWithCard, Login, Koros
  - Structure : SideNavigation
- Stories Storybook pour chaque nouveau composant
- 16 nouvelles suites de tests (37 suites, 172 tests au total)
- Focus ring unifié par outline sur tous les composants interactifs
- API CSS par composant : chaque composant expose des custom properties sur son élément racine
- Token `touch-target-min` (48px, WCAG 2.2 AA)
- Tokens d’opacité et de z-index
- `aria-describedby` composable sur TextInput (error + helper)

### Corrigé
- 6 suites de tests préexistantes réalignées (Alert, Tag, Card, TextInput, Select, Checkbox)

### Modifié
- **Couleur primary** : `#e6730d` -> `#CC5500` (burnt orange) — palette complète recalculée
- **Typographie** : `Public Sans` -> `Inter` (body), `IBM Plex Sans` (headings)
- **Couleurs accent** : fallbacks alignés sur les valeurs réelles des tokens
- **Min-height** de tous les composants interactifs portée à 48px minimum
- Nettoyage des références internes obsolètes dans la documentation

### Supprimé
- Mixin `button-ripple` (inutilisé)
- Références à des systèmes tiers dans la documentation et les commentaires de code

---

## [1.0.0] - 2026-03-12

### Ajouté
- Monorepo avec Lerna et trois packages (`@ivds/design-tokens`, `@ivds/core`, `@ivds/react`)
- Système de couleurs : brand (orange, vert, cocoa, gold, lagoon), UI neutrals, feedback
- Tokens de typographie, espacement, élévation, animations, breakpoints, border-radius
- Build multi-format : CSS, SCSS, JavaScript, JSON, TypeScript
- 20 composants CSS Core avec convention BEM
- 20 composants React avec TypeScript et forwardRef
- ThemeProvider avec modes light/dark
- Storybook pour Core (HTML) et React

---

## Dépendances entre packages

```text
@ivds/design-tokens  (aucune dépendance)
       |
  @ivds/core         (dépend de design-tokens)
       |
  @ivds/react        (dépend de core et design-tokens)
```

## Changelogs par package

- [@ivds/design-tokens](packages/ivds-design-tokens/CHANGELOG.md)
- [@ivds/react](packages/ivds-react/CHANGELOG.md)
