# Guide de developpement

Ce guide vous accompagne pour travailler avec IVDS, que ce soit pour personnaliser un site institutionnel ou contribuer au design system lui-meme.

---

## Prerequis

- **Node.js** >= 22.13.1
- **Yarn** >= 1.22.0
- Un editeur avec support SCSS et TypeScript (VS Code recommande)

## Mise en route

```bash
# Cloner le repo
git clone https://github.com/babiverse/ivoire-design-system.git
cd ivoire-design-system

# Installer les dependances
yarn install

# Construire les trois packages dans l'ordre
yarn build:tokens
yarn build:core
yarn build:react
```

Les packages se construisent dans cet ordre parce que chacun depend du precedent :

```
@ivds/design-tokens  -->  @ivds/core  -->  @ivds/react
```

---

## Structure du projet

```
ivoire-design-system/
  packages/
    ivds-design-tokens/
      tokens/              Fichiers JSON source (couleurs, typo, etc.)
      build.js             Script Style Dictionary
      lib/                 Sortie generee (CSS, SCSS, JS, JSON, TypeScript)

    ivds-core/
      src/
        base/              Reset CSS, contrat de theme
        components/        Composants SCSS (button, card, header, etc.)
        gov/               Patterns gouvernementaux (header, footer, nav...)
        variables/         Variables SCSS mappees sur les tokens
        utils/             Utilitaires CSS (flexbox, grid, spacing...)
      lib/                 CSS compile et minifie

    ivds-react/
      src/
        components/        Composants React (Button, Card, Header, etc.)
        theme/             ThemeProvider, presets
        gov/               Composants gov React (GovHeader, GovShell, etc.)
        hooks/             Hooks utilitaires
        utils/             Types partages
      .storybook/          Configuration Storybook

  starters/
    gov-html/              Starter HTML/CSS sans build
    gov-next/              Starter Next.js 14

  documentation/           Ce dossier
  scripts/                 Scripts de certification et d'audit
  schemas/                 Schemas JSON pour les contrats de donnees
```

---

## Developper en local

### Storybook

La facon la plus rapide de voir les composants en action :

```bash
# Storybook Core (CSS-only) - port 6007
yarn dev:core

# Storybook React - port 6008
yarn dev:react
```

Le Storybook React inclut des pages de documentation sur les tokens (couleurs, typographie, espacement) dans la section "Fondations".

### Starters

Pour tester un site complet localement :

```bash
# Starter HTML (aucun build requis)
cd starters/gov-html
yarn install
python3 -m http.server 3000

# Starter Next.js
cd starters/gov-next
yarn install
yarn dev
```

---

## Utiliser les tokens de design

Les tokens sont la fondation de tout. Ils definissent les couleurs, la typographie, les espacements, et plus encore.

### En CSS (custom properties)

```css
.ma-carte {
  background: var(--color-brand-primary-50);
  color: var(--color-brand-primary-900);
  padding: var(--spacing-m);
  border-radius: var(--borderRadius-md);
  box-shadow: var(--shadow-sm);
  font-family: var(--typography-fontFamilies-primary);
}

.ma-carte:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
  transition: var(--animation-transition-all);
}
```

### En SCSS

```scss
@use '@ivds/design-tokens/scss/all' as tokens;

.ma-carte {
  background: tokens.$color-brand-primary-50;
  padding: tokens.$spacing-m;
}
```

### En JavaScript / TypeScript

```tsx
import tokens from '@ivds/design-tokens';

const primaryColor = tokens.color.brand.primary['500']; // '#CC5500'
const bodyFont = tokens.typography.fontFamilies.primary;
```

---

## Utiliser les composants CSS (Core)

Les composants Core sont du CSS pur avec la convention BEM et le prefixe `ivds-`.

```html
<!-- Bouton primaire -->
<button class="ivds-button ivds-button--primary ivds-button--lg">
  Soumettre
</button>

<!-- Carte elevee -->
<div class="ivds-card ivds-card--elevated">
  <div class="ivds-card__header"><h3>Titre</h3></div>
  <div class="ivds-card__body">Contenu...</div>
</div>

<!-- Alerte de succes -->
<div class="ivds-alert ivds-alert--success" role="alert">
  Votre demande a ete enregistree.
</div>
```

---

## Utiliser les composants React

### Setup minimal

```tsx
import '@ivds/core';
import { ThemeProvider } from '@ivds/react/theme';

function App({ children }) {
  return <ThemeProvider mode="light">{children}</ThemeProvider>;
}
```

### Composants disponibles

| Categorie | Composants |
|-----------|-----------|
| **Formulaires** | Button, TextInput, Checkbox, RadioButton, Select, Switch, Tag |
| **Mise en page** | Card, Modal, Tabs, Breadcrumb, Alert, Badge, Notification |
| **Structure** | Header, Footer, Navigation (horizontale et laterale) |
| **Utilitaires** | Box, Flex, Grid |
| **Gov** | GovShell, GovHeader, GovPrimaryNav, GovServiceDirectory, GovNewsPanel, GovAgendaPanel, GovMegaFooter, GovLanguageSwitcher, GovFlashTicker, GovTopPromo |

### Exemple : formulaire de demande

```tsx
import { Button, TextInput, Card, Select } from '@ivds/react';

function FormulaireDemande() {
  return (
    <Card variant="elevated">
      <Card.Header><h2>Nouvelle demande</h2></Card.Header>
      <Card.Body>
        <TextInput label="Nom complet" placeholder="Ex: Kouame Yao" required />
        <TextInput label="Email" type="email" placeholder="kouame.yao@example.ci" />
        <Select
          label="Type de demande"
          options={[
            { value: 'passeport', label: 'Passeport' },
            { value: 'cni', label: "Carte nationale d'identite" },
            { value: 'extrait', label: 'Extrait de naissance' },
          ]}
        />
        <Button variant="primary" size="lg" fullWidth>
          Envoyer la demande
        </Button>
      </Card.Body>
    </Card>
  );
}
```

### Exemple : portail gouvernemental

```tsx
import { GovShell, GovHeader, GovPrimaryNav, GovServiceDirectory, GovMegaFooter } from '@ivds/react/gov';

function PortailMinistere() {
  return (
    <GovShell locale="fr">
      <GovHeader siteName="Ministere de l'Education Nationale" />
      <GovPrimaryNav items={[
        { label: 'Accueil', href: '/', active: true },
        { label: 'Services', href: '/services' },
        { label: 'Actualites', href: '/actualites' },
      ]} />
      <main>
        <GovServiceDirectory title="Nos services en ligne" services={services} />
      </main>
      <GovMegaFooter columns={footerColumns} />
    </GovShell>
  );
}
```

---

## Personnaliser le theme

### Via CSS (le plus simple)

```css
:root {
  --color-brand-primary-500: #1a6bdb;
  --color-brand-primary-600: #1058b8;
}
```

### Via le ThemeProvider

```tsx
<ThemeProvider mode="light" tokens={{
  '--color-brand-primary-500': '#1a6bdb',
  '--color-brand-primary-600': '#1058b8',
}}>
  {children}
</ThemeProvider>
```

---

## Ajouter un nouveau composant

### 1. SCSS dans Core

```
packages/ivds-core/src/components/mon-composant/
  mon-composant.scss
  _mon-composant-mixin.scss
  mon-composant.stories.js
```

Regles : prefixe `ivds-`, tokens via `var(--token, fallback)`, support dark mode.

### 2. React

```
packages/ivds-react/src/components/MonComposant/
  MonComposant.tsx
  MonComposant.test.tsx
  MonComposant.stories.tsx
  index.ts
```

Regles : TypeScript, `forwardRef`, attributs ARIA, tests > 75%, story Storybook.

### 3. Exporter dans `packages/ivds-react/src/index.ts`

---

## Tests

```bash
yarn test:tokens          # Validation des tokens
yarn test:core            # Tests SCSS (sass-true)
yarn test:react           # Tests React (Jest + Testing Library)
yarn test:gov-starters    # Tests des starters
yarn certify:gov          # Certification gouvernementale
```

---

## Ressources

- [Standard gouvernemental](GOV_STANDARD.md)
- [Certification](CERTIFICATION.md)
- [Contribution](../CONTRIBUTING.md)
