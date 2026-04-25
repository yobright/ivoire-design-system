# @ivds/react

Composants React du Ivoire Design System. Ce package fournit des composants types avec TypeScript, accessibles par defaut, et prets pour les interfaces institutionnelles.

## Installation

```bash
yarn add @ivds/react @ivds/core @ivds/design-tokens
```

**Prerequis** : React >= 18.2.0

---

## Demarrage rapide

```tsx
// 1. Importer les styles Core
import '@ivds/core';

// 2. Envelopper votre app avec le ThemeProvider
import { ThemeProvider } from '@ivds/react/theme';
import { Button, Card, TextInput } from '@ivds/react';

function App() {
  return (
    <ThemeProvider mode="light">
      <Card variant="elevated">
        <Card.Header><h2>Mon formulaire</h2></Card.Header>
        <Card.Body>
          <TextInput label="Nom" placeholder="Votre nom" />
          <Button variant="primary">Envoyer</Button>
        </Card.Body>
      </Card>
    </ThemeProvider>
  );
}
```

---

## Composants disponibles

### Formulaires

| Composant | Props principales |
|-----------|-------------------|
| `Button` | variant, size, loading, disabled, fullWidth, iconLeft, iconRight |
| `TextInput` | label, type, error, success, helperText, iconLeft, multiline |
| `TextArea` | label, rows, error, helperText |
| `NumberInput` | label, min, max, step, onValueChange |
| `PasswordInput` | label, includeShowPasswordButton, initiallyRevealed |
| `PhoneInput` | label, helperText, autoComplete |
| `DateInput` | label, min, max, helperText |
| `TimeInput` | label, step, helperText |
| `Fieldset` | legend, description, helperText, error |
| `SelectionGroup` | legend, direction, error |
| `ErrorSummary` | title, description, errors |
| `FileInput` | label, buttonLabel, multiple, error |
| `Checkbox` | label, checked, disabled |
| `RadioButton` | label, value, checked, disabled |
| `Select` | label, options, value, onChange |
| `Switch` | label, checked, onChange |
| `Tag` | variant, size, closeable |

### Mise en page

| Composant | Props principales |
|-----------|-------------------|
| `Card` | variant (elevated, flat, bordered), interactive, compact |
| `LoadingSpinner` | small, multicolor, loadingText |
| `StatusLabel` | type, iconStart |
| `Tooltip` | placement, small, boxShadow, buttonLabel |
| `ToggleButton` | label, checked, onChange, variant, tooltip |
| `Accordion` | heading, headingLevel, initiallyOpen, card, size |
| `Hero` | title, text, imageSrc, variant, centeredContent, actions |
| `Highlight` | text, type (highlight/quote), size, reference |
| `Linkbox` | href, heading, text, imgSrc, external, border |
| `Table` | cols, rows, heading, dense, striped |
| `Stepper` | steps, selectedStep, small, onStepClick |
| `StepByStep` | title, steps, numberedList, helpText |
| `CookieConsent` | title, description, actions |
| `Logo` | src, alt, size |
| `ImageWithCard` | src, cardLayout, cardAlignment, fullWidth |
| `Login` | title, description, actions, footer |
| `Koros` | type, dense, flipVertical |
| `Modal` | open, onClose, title, size |
| `Tabs` | activeTab, onChange, items |
| `Alert` | variant (success, warning, error, info), closeable |
| `Badge` | variant, size |
| `Notification` | variant, title, closeable |
| `Breadcrumb` | items |

### Structure

| Composant | Props principales |
|-----------|-------------------|
| `Header` | sticky, glass, scrolled, dark, maxWidth |
| `HeaderBrand` | Bloc de marque du header |
| `HeaderNav` | Navigation principale du header |
| `HeaderActions` | Zone d'actions du header |
| `Footer` | light, columns, maxWidth |
| `Navigation` | Navigation horizontale composee de `NavigationLink` |
| `SideNav` | Navigation laterale composee de `SideNavItem` |
| `SideNavigation` | Alias explicite de la navigation laterale |

### Utilitaires

| Composant | Description |
|-----------|-------------|
| `Container` | Contrainte de largeur et gutters coherents |
| `Columns` | Mise en colonnes responsive ou fixe |
| `Section` | Bloc de section themable avec contenu contraint |
| `Link` | Lien inline ou habille en bouton |
| `Pagination` | Pagination accessible pour listes et resultats |
| `Box` | Conteneur generique avec props de spacing |
| `Flex` | Conteneur flexbox |
| `Grid` | Conteneur grille CSS |

---

## Exemple de structure

```tsx
import {
  Header,
  HeaderBrand,
  HeaderNav,
  HeaderActions,
  Navigation,
  NavigationLink,
  Footer,
  FooterBrand,
  FooterSection,
  FooterBottom,
  Button,
} from '@ivds/react';

function PortailProduit() {
  return (
    <>
      <Header sticky glass>
        <HeaderBrand>
          <strong>Ivoire DS</strong>
        </HeaderBrand>

        <HeaderNav aria-label="Navigation principale">
          <a href="#" aria-current="page">Fondations</a>
          <a href="#">Composants</a>
          <a href="#">Guidelines</a>
        </HeaderNav>

        <HeaderActions>
          <Button size="small">Commencer</Button>
        </HeaderActions>
      </Header>

      <Navigation aria-label="Navigation secondaire">
        <NavigationLink href="#" active>Vue d’ensemble</NavigationLink>
        <NavigationLink href="#">Documentation</NavigationLink>
        <NavigationLink href="#">Ressources</NavigationLink>
      </Navigation>

      <Footer>
        <FooterBrand>Ivoire Design System</FooterBrand>
        <FooterSection title="Ressources">
          <li><a href="#">Storybook</a></li>
          <li><a href="#">Guidelines</a></li>
        </FooterSection>
        <FooterBottom>© 2026 Ivoire Design System</FooterBottom>
      </Footer>
    </>
  );
}
```

---

## Theming

### Modes clair et sombre

```tsx
import { ThemeProvider, useTheme } from '@ivds/react/theme';

function App() {
  return (
    <ThemeProvider mode="light">
      <MonContenu />
    </ThemeProvider>
  );
}

function BoutonTheme() {
  const { mode, setMode } = useTheme();
  return (
    <Button onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}>
      Mode {mode === 'light' ? 'sombre' : 'clair'}
    </Button>
  );
}
```

### Tokens personnalises

Pour adapter les couleurs a votre ministere :

```tsx
<ThemeProvider
  mode="light"
  tokens={{
    '--color-brand-primary-500': '#1a6bdb',
    '--color-brand-primary-600': '#1058b8',
    '--color-brand-primary-700': '#0b4593',
  }}
>
  {children}
</ThemeProvider>
```

---

## Accessibilite

Tous les composants suivent les bonnes pratiques WCAG 2.2 AA :

- `aria-disabled`, `aria-busy`, `aria-invalid` sur les champs
- `aria-label` et `aria-labelledby` sur les elements interactifs
- `aria-current="page"` sur la navigation active
- `role="dialog"` avec focus trapping sur Modal
- Navigation clavier complete (Tab, Fleches, Entree, Echap)
- Focus visible sur tous les elements interactifs

---

## Storybook

Lancez le Storybook pour explorer les composants en action :

```bash
yarn dev:react   # Port 6008
```

Le Storybook inclut des pages de documentation sur les tokens (couleurs, typographie, espacement) dans la section "Fondations".

## Licence

MIT
