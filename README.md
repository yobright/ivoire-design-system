# Ivoire Design System (IVDS)

Ivoire Design System est un système de conception open source pensé pour fournir une base cohérente de design et d’implémentation pour des interfaces web. Le projet réunit des tokens de design, des composants CSS et des composants React, avec une attention particulière portée à l’accessibilité, à la clarté d’usage et à la qualité d’intégration.

IVDS est une initiative indépendante. Le monorepo rassemble les fondations techniques du système et la documentation utile à son adoption.

---

## Les packages

| Package | Rôle | Installation |
|---------|------|-------------|
| `@ivds/design-tokens` | Couleurs, typographie, espacements, élévation, animation et alias sémantiques | `yarn add @ivds/design-tokens` |
| `@ivds/core` | Styles CSS, reset, icônes et utilitaires | `yarn add @ivds/core` |
| `@ivds/react` | Composants React typés, avec gestion du thème | `yarn add @ivds/react` |

## Démarrage rapide

### 1. Installer les packages

```bash
yarn add @ivds/design-tokens @ivds/core @ivds/react
```

### 2. Importer les styles

```tsx
// Dans votre point d’entrée (App.tsx, layout.tsx, etc.)
import '@ivds/design-tokens/css';
import '@ivds/core';
```

### 3. Utiliser les composants

```tsx
import { Button, Card, TextInput } from '@ivds/react';

function App() {
  return (
    <main>
      <Card variant="elevated">
        <TextInput
          label="Numéro de pièce d’identité"
          placeholder="CI-XXXX-XXXX"
        />
        <Button variant="primary" size="lg">
          Soumettre
        </Button>
      </Card>
    </main>
  );
}
```

---

## Points clés

- **Fondations partagées** : les tokens, les styles et les composants s’appuient sur un même socle.
- **CSS et React** : les composants sont disponibles en version CSS seule et en version React.
- **Thématisation** : le système propose des presets officiels et un contrat de thème personnalisable.
- **Accessibilité** : les composants sont conçus pour faciliter la conformité WCAG 2.2 AA.

## Composants disponibles

### React (`@ivds/react`)

**Formulaires** : Button, TextInput, TextArea, NumberInput, PasswordInput, PhoneInput, DateInput, TimeInput, Fieldset, SelectionGroup, ErrorSummary, FileInput, Checkbox, RadioButton, Select, Switch, Tag

**Mise en page** : Card, Modal, Tabs, Alert, Badge, Notification, Breadcrumb, Pagination, LoadingSpinner, StatusLabel, Tooltip, ToggleButton, Accordion, Hero, Highlight, Linkbox, Table, Stepper, StepByStep, CookieConsent, Logo, ImageWithCard, Login, Koros

**Structure** : Header, Footer, Navigation, SideNavigation

**Utilitaires** : Container, Columns, Section, Link, Box, Flex, Grid

Chaque composant React prend en charge `forwardRef`, un typage TypeScript complet et les attributs ARIA nécessaires selon son usage.

### Core CSS (`@ivds/core`)

Les mêmes composants sont proposés en CSS seul, avec une convention BEM (`ivds-button`, `ivds-card`, etc.), pour une utilisation sans React ni framework JavaScript.

---

## Identité visuelle

IVDS repose sur une palette de marque et sur une échelle neutre destinée à structurer l’interface :

- **Primary** : Orange signature `#ff9f1c`
- **Secondary** : Teal institutionnel `#2ec4b6`
- **Accent** : Lagoon teal `#14b8a6`
- **Cocoa** : Brun cacao `#6b4423`
- **Gold** : Or savane `#d4af37`

La typographie combine **Inter** pour le texte courant et **IBM Plex Sans** pour les titres.

---

## Accessibilité

IVDS vise une base compatible avec WCAG 2.2 AA :

- Navigation complète au clavier
- Attributs ARIA sur les composants interactifs
- Cibles tactiles de 48 px minimum
- Focus visible
- Support des variantes de thème via `data-ivds-theme`

La conformité finale dépend toutefois du contenu, du contexte d’intégration et des parcours implémentés dans chaque produit.

---

## Commandes utiles

```bash
# Installation
yarn install

# Build complet
yarn build

# Développement (Storybook)
yarn dev:core          # Storybook Core sur le port 6007
yarn dev:react         # Storybook React sur le port 6008

# Tests
yarn test

# Certification technique institutionnelle locale
yarn certify:institutional:strict
```

---

## Architecture

```text
ivoire-design-system/
  packages/
    ivds-design-tokens/    Tokens JSON -> CSS / SCSS / JS / TypeScript
    ivds-core/             Composants SCSS + utilitaires
    ivds-react/            Composants React + ThemeProvider
  documentation/           Guides et conventions
  scripts/                 Outils d’audit et d’automatisation
```

## Documentation complémentaire

- [Guide de contribution](CONTRIBUTING.md)
- [Guide de personnalisation](documentation/CUSTOMIZATION.md)
- [Guide de développement](documentation/DEVELOPMENT.md)
- [Phases de release](documentation/RELEASE-PHASES.md)
- [Contrat d’accessibilité](documentation/ACCESSIBILITY-CONTRACT.md)

## Contribution

Les contributions sont les bienvenues, qu’il s’agisse de signaler un bug, de proposer une amélioration ou d’enrichir la documentation.

Consultez [CONTRIBUTING.md](CONTRIBUTING.md) pour connaître le processus de contribution.

## Licence

MIT — [LICENSE](LICENSE)
