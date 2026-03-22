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
| `Checkbox` | label, checked, disabled |
| `RadioButton` | label, value, checked, disabled |
| `Select` | label, options, value, onChange |
| `Switch` | label, checked, onChange |
| `Tag` | variant, size, closeable |

### Mise en page

| Composant | Props principales |
|-----------|-------------------|
| `Card` | variant (elevated, flat, bordered), interactive, compact |
| `Modal` | open, onClose, title, size |
| `Tabs` | activeTab, onChange, items |
| `Alert` | variant (success, warning, error, info), closeable |
| `Badge` | variant, size |
| `Notification` | variant, title, closeable |
| `Breadcrumb` | items |

### Structure

| Composant | Props principales |
|-----------|-------------------|
| `Header` | sticky, glass, dark |
| `Header.Brand` | Logo et nom du site |
| `Header.Nav` | Liens de navigation |
| `Footer` | Pied de page multi-sections |
| `Navigation` | items, activeItem |

### Utilitaires

| Composant | Description |
|-----------|-------------|
| `Box` | Conteneur generique avec props de spacing |
| `Flex` | Conteneur flexbox |
| `Grid` | Conteneur grille CSS |

---

## Composants gouvernementaux

Les composants gov sont conçus pour les portails publics ivoiriens, avec support bilingue natif :

```tsx
import {
  GovShell,
  GovHeader,
  GovLanguageSwitcher,
  GovPrimaryNav,
  GovTopPromo,
  GovFlashTicker,
  GovServiceDirectory,
  GovNewsPanel,
  GovAgendaPanel,
  GovMegaFooter,
} from '@ivds/react/gov';
```

### Exemple complet

```tsx
function PortailGouv() {
  return (
    <GovShell locale="fr">
      <GovHeader siteName="Portail des Services Publics">
        <GovLanguageSwitcher currentLang="fr" />
      </GovHeader>
      <GovPrimaryNav items={navigation} />
      <GovTopPromo
        title="Bienvenue sur le portail des services publics"
        cta={{ label: 'Decouvrir nos services', href: '/services' }}
      />
      <main>
        <GovServiceDirectory services={services} />
        <GovNewsPanel articles={actualites} />
      </main>
      <GovMegaFooter columns={footer} />
    </GovShell>
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
