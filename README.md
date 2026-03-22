# Ivoire Design System (IVDS)

Ivoire Design System est un systeme de conception open source concu pour accompagner la transformation numerique en Cote d'Ivoire. Il propose des ressources en matiere de conception et de developpement, ainsi que des directives pour creer des solutions accessibles et conviviales.

Ce projet est une **initiative independante**. Il pose les fondations techniques — tokens de design, composants CSS, composants React — qui pourront servir de base a des interfaces institutionnelles coherentes et modernes.

---

## Les packages

| Package | Role | Installation |
|---------|------|-------------|
| `@ivds/design-tokens` | Couleurs, typographie, espacements, elevation, animations | `yarn add @ivds/design-tokens` |
| `@ivds/core` | Composants CSS-only, reset, utilitaires | `yarn add @ivds/core` |
| `@ivds/react` | Composants React avec TypeScript, ThemeProvider | `yarn add @ivds/react` |

## Demarrage rapide

### 1. Installer les packages

```bash
yarn add @ivds/design-tokens @ivds/core @ivds/react
```

### 2. Importer les styles

```tsx
// Dans votre point d'entree (App.tsx, layout.tsx, etc.)
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
          label="Numero de piece d'identite"
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

## Composants disponibles

### React (`@ivds/react`)

Button, TextInput, Select, Checkbox, RadioButton, Switch, Card, Alert, Badge, Tag, Notification, Tabs, Modal, Header, Footer, Navigation, Breadcrumb, Box, Flex, Grid.

Chaque composant supporte `forwardRef`, le typage TypeScript complet, et les attributs ARIA.

### Core CSS (`@ivds/core`)

Les memes composants en CSS pur, avec la convention BEM (`ivds-button`, `ivds-card`, etc.). Utilisable sans React ni framework JavaScript.

---

## Identite visuelle

IVDS utilise une palette qui s'inspire de l'identite ivoirienne :

- **Primary** : Burnt orange `#CC5500` — la chaleur de la terre ivoirienne
- **Secondary** : Vert `#007a4d` — la croissance et le developpement
- **Accent** : Bleu lagune `#1a6bdb` — le civisme et la confiance
- **Cocoa** : Brun cacao `#6b4423` — la production emblematique
- **Gold** : Or savane `#d4af37` — les paysages dores

La typographie combine **Inter** (texte courant) et **IBM Plex Sans** (titres).

---

## Accessibilite

IVDS vise la conformite WCAG 2.2 AA :

- Navigation clavier complete
- Attributs ARIA sur tous les composants interactifs
- Cibles tactiles de 48px minimum
- Focus visible par outline (pas de box-shadow)
- Support du mode sombre via `[data-ivds-theme='dark']`

---

## Commandes utiles

```bash
# Installation
yarn install

# Build complet
yarn build

# Developpement (Storybook)
yarn dev:core          # Storybook Core sur le port 6007
yarn dev:react         # Storybook React sur le port 6008

# Tests
yarn test
```

---

## Architecture

```
ivoire-design-system/
  packages/
    ivds-design-tokens/    Tokens JSON -> CSS / SCSS / JS / TypeScript
    ivds-core/             Composants SCSS + utilitaires
    ivds-react/            Composants React + ThemeProvider
  starters/
    gov-html/              Starter HTML/CSS
    gov-next/              Starter Next.js 14
  documentation/           Guides et conventions
```

## Contribution

Ce projet est en phase de fondation technique. Les contributions sont les bienvenues, qu'il s'agisse de signaler un bug, proposer une amelioration, ou ameliorer la documentation.

Consultez [CONTRIBUTING.md](CONTRIBUTING.md) pour savoir comment contribuer.

## Licence

MIT — [LICENSE](LICENSE)
