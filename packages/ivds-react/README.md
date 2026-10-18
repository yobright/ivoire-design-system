# @ivds/react

Composants React d’Ivoire Design System. Ce package fournit des composants typés avec TypeScript, conçus pour être accessibles par défaut et simples à intégrer dans des interfaces web structurées.

## Installation

```bash
yarn add @ivds/react @ivds/core @ivds/design-tokens
```

**Prérequis** : React >= 18.2.0

---

## Démarrage rapide

```tsx
// 1. Importer les styles Core
import '@ivds/core';

// 2. Envelopper votre app avec le ThemeProvider
import { ThemeProvider } from '@ivds/react/theme';
import { Button, Card, TextInput } from '@ivds/react';

function App() {
  return (
    <ThemeProvider mode="default">
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
| `HeaderActions` | Zone d’actions du header |
| `Footer` | light, columns, maxWidth |
| `Navigation` | Navigation horizontale composée de `NavigationLink` |
| `SideNav` | Navigation latérale composée de `SideNavItem` |
| `SideNavigation` | Alias explicite de la navigation latérale |

### Quand utiliser / ne pas utiliser

| Famille | À utiliser quand | À éviter quand |
|---------|------------------|----------------|
| Structure et navigation | Vous construisez une page, un portail produit ou une documentation avec header, navigation, contenu et footer cohérents. | Vous avez besoin d’une navigation applicative très spécifique, non couverte par les patterns documentés. |
| Formulaires fondamentaux | Vous collectez des informations standards avec labels visibles, aide, validation inline et résumé d’erreurs. | Vous devez imposer des masques complexes ou des workflows métier sans validation UX dédiée. |
| Composants interactifs composites | Vous voulez accélérer la construction d’une interface avec cartes, tableaux, modales, stepper, hero et composants de feedback. | Vous imbriquez plusieurs contrôles interactifs dans une même zone cliquable ou vous ne pouvez pas vérifier le comportement clavier. |
| Feedback et états système | Vous affichez un succès, une erreur, un chargement ou une notification de manière explicite et annoncée aux technologies d’assistance. | Le message remplace une validation inline ou masque l’action concrète attendue de l’utilisateur. |

Les composants `Card interactive`, `Linkbox`, `Modal`, `Table` et `Stepper` doivent être vérifiés dans le flux final : nom accessible, ordre de focus, navigation clavier, contenu long et comportement responsive.

### Utilitaires

| Composant | Description |
|-----------|-------------|
| `Container` | Contrainte de largeur et gutters cohérents |
| `Columns` | Mise en colonnes responsive ou fixe |
| `Section` | Bloc de section themable avec contenu contraint |
| `Link` | Lien inline ou habillé en bouton |
| `Pagination` | Pagination accessible pour listes et résultats |
| `Box` | Conteneur générique avec props de spacing |
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
        <FooterBottom> 2026 Ivoire Design System</FooterBottom>
      </Footer>
    </>
  );
}
```

---

## Thématisation

### Presets officiels

```tsx
import { Button } from '@ivds/react';
import { ThemeProvider, useTheme } from '@ivds/react/theme';

function App() {
  return (
    <ThemeProvider mode="default">
      <MonContenu />
    </ThemeProvider>
  );
}

function BoutonTheme() {
  const { preset, setPreset } = useTheme();
  return (
    <>
      <Button onClick={() => setPreset('default')} aria-pressed={preset === 'default'}>
        Default
      </Button>
      <Button onClick={() => setPreset('dark')} aria-pressed={preset === 'dark'}>
        Sombre
      </Button>
      <Button onClick={() => setPreset('high-contrast')} aria-pressed={preset === 'high-contrast'}>
        Haut Contraste
      </Button>
    </>
  );
}
```

`light` reste accepté comme alias rétrocompatible, mais `default`, `dark` et `high-contrast` sont les presets recommandés.

### Tokens personnalisés

Pour adapter les couleurs à votre contexte :

```tsx
<ThemeProvider
  mode="default"
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

## Maturité et accessibilité

IVDS documente un modèle de maturité pour les composants et les patterns :

- `Draft`
- `Beta`
- `Stable`
- `Deprecated`

### Statut actuel par famille

| Famille | Statut | Notes |
|---------|--------|-------|
| Theming et utilitaires de layout | `Stable` | `ThemeProvider`, `Container`, `Columns`, `Section`, `Link`, `Box`, `Flex`, `Grid` |
| Structure et navigation | `Stable` | `Header`, `Footer`, `Navigation`, `SideNavigation`, `Breadcrumb`, `Pagination` |
| Formulaires fondamentaux | `Stable` | `Button`, `TextInput`, `Checkbox`, `RadioButton`, `Select`, `Switch`, `Fieldset`, `SelectionGroup`, `ErrorSummary` |
| Inputs avancés | `Beta` | `DateInput`, `TimeInput`, `PhoneInput`, `NumberInput`, `PasswordInput`, `FileInput` |
| Feedback, data-display et composites | `Beta` | `Alert`, `Notification`, `LoadingSpinner`, `StatusLabel`, `Tooltip`, `Accordion`, `Table`, `Stepper`, `Hero`, `Login`, etc. |

Le détail des critères de validation est documenté dans :

- [`../../documentation/RELEASE-PHASES.md`](../../documentation/RELEASE-PHASES.md)
- [`../../documentation/ACCESSIBILITY-CONTRACT.md`](../../documentation/ACCESSIBILITY-CONTRACT.md)

Les composants React fournissent une base accessible, mais l’équipe qui les intègre doit toujours valider le flux complet, les contenus, les labels et le contexte réel de l’interface.

---

## Accessibilité

Tous les composants suivent les bonnes pratiques WCAG 2.2 AA :

- `aria-disabled`, `aria-busy`, `aria-invalid` sur les champs
- `aria-label` et `aria-labelledby` sur les éléments interactifs
- `aria-current="page"` sur la navigation active
- `role="dialog"` avec focus trapping sur Modal
- Navigation clavier complète (Tab, Flèches, Entrée, Échap)
- Focus visible sur tous les éléments interactifs

---

## Storybook

Lancez le Storybook pour explorer les composants en action :

```bash
yarn dev:react   # Port 6008
```

Le Storybook inclut aussi des pages de documentation sur les tokens (couleurs, typographie, espacement) dans la section "Fondations".

## Licence

MIT
