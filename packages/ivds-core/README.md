# @ivds/core

Styles Core d’Ivoire Design System. Ce package fournit les styles CSS des composants, les couches de base et les utilitaires qui consomment les tokens de `@ivds/design-tokens`.

## Contrat de thème

`@ivds/core` expose un contrat de thème sémantique destiné à offrir une base de personnalisation stable :

- **Actions principales** : `--ivds-interactive-primary-*`
- **Actions secondaires** : `--ivds-interactive-secondary-*`
- **Surfaces** : `--ivds-surface-*`
- **Texte** : `--ivds-text-*`
- **Bordures** : `--ivds-border-*`
- **Motion** : `--ivds-motion-*` et `--ivds-transition-*`

Cette couche constitue l’API CSS consommée par les composants. Lorsque c’est possible, il est préférable de personnaliser ce contrat plutôt que de surcharger directement les règles de composants.

## Installation

```bash
npm install @ivds/core @ivds/design-tokens
# ou
yarn add @ivds/core @ivds/design-tokens
```

## Utilisation

### Bundle complet

Importez tous les styles IVDS Core :

```css
@import '@ivds/core';
```

Ou utilisez directement le fichier CSS :

```html
<link rel="stylesheet" href="node_modules/@ivds/core/lib/all.css">
```

### Imports ciblés

Importez uniquement ce dont vous avez besoin :

```css
/* Base styles */
@import '@ivds/core/base';

/* Utilities only */
@import '@ivds/core/utils';

/* Specific components */
@import '@ivds/core/components/button';
@import '@ivds/core/components/card';

/* Icons */
@import '@ivds/core/icons';
```

### Utilisation HTML

Utilisez les composants IVDS via les classes CSS :

```html
<!-- Button component -->
<button class="ivds-button ivds-button--primary">
  Bouton principal
</button>

<!-- Card component -->
<div class="ivds-card">
  <div class="ivds-card__header">
    <h3 class="ivds-card__title">Titre de carte</h3>
  </div>
  <div class="ivds-card__body">
    <p class="ivds-card__content">Contenu de la carte.</p>
  </div>
</div>

<!-- Utility classes -->
<div class="ivds-flex ivds-flex--justify-between ivds-p-4">
  <span>Contenu à gauche</span>
  <span>Contenu à droite</span>
</div>
```

## Adoption CSS-only

`@ivds/core` est le contrat HTML/CSS du design system. Il peut etre utilise sans React, a condition de conserver la semantique HTML et les attributs d'accessibilite requis par chaque pattern.

### Regles d'integration

- Importer les tokens avant les composants si votre bundler ne le fait pas deja.
- Utiliser les elements natifs quand ils existent : `button`, `a`, `input`, `fieldset`, `table`, `nav`, `header`, `footer`.
- Garder les classes BEM publiques `ivds-*` comme surface d'integration stable.
- Appliquer les modificateurs d'etat explicitement : `--disabled`, `--error`, `--active`, `--loading`, `--selected`.
- Ajouter les attributs ARIA uniquement quand le HTML natif ne suffit pas.
- Verifier les contenus longs, les traductions et le responsive dans le produit final.

### Exemple formulaire CSS-only

```html
<form class="ivds-card ivds-card--elevated" novalidate>
  <div class="ivds-card__header">
    <h2>Demande de service</h2>
  </div>

  <div class="ivds-card__body">
    <section class="ivds-error-summary" role="alert" aria-live="polite">
      <h3 class="ivds-error-summary__title">Corrigez le formulaire</h3>
      <ol class="ivds-error-summary__list">
        <li><a class="ivds-error-summary__link" href="#nom">Le nom complet est obligatoire.</a></li>
      </ol>
    </section>

    <label class="ivds-text-input__label" for="nom">Nom complet</label>
    <input
      id="nom"
      class="ivds-text-input ivds-text-input--error"
      aria-invalid="true"
      aria-describedby="nom-error"
      required
    >
    <div class="ivds-text-input__error" id="nom-error">Renseignez le nom complet.</div>

    <button class="ivds-button ivds-button--primary" type="submit">
      Soumettre la demande
    </button>
  </div>
</form>
```

### Verification minimale

| Zone | A verifier |
|------|------------|
| Formulaires | Label visible, `aria-invalid`, message relie via `aria-describedby`, resume d'erreurs si necessaire |
| Navigation | `nav` nomme, lien actif visible, `aria-current="page"` quand pertinent |
| Feedback | `role="alert"` ou `role="status"` selon la priorite, message actionnable |
| Dialogues | Role, nom accessible, focus initial, fermeture clavier, retour du focus |
| Tableaux | En-tetes explicites, caption ou heading, ordre responsive verifie |

## Composants disponibles

- **Formulaires** : Button, Text Input, Fieldset, Selection Group, Error Summary, File Input, Checkbox, Radio Button
- **Mise en page** : Container, Columns, Section, Link, Card, Notification, Tag, Tooltip, Toggle Button, Accordion, Hero, Highlight, Linkbox, Table, Stepper, Step By Step, Cookie Consent, Logo, Image With Card, Login, Koros
- **Navigation** : Breadcrumb, Navigation, Pagination
- **Structure** : Header, Footer
- **Utilitaires** : Spacing, Typography, Layout, Grid, Flexbox
- **Icônes** : jeu d’icônes de base et styles associés

## Personnalisation

IVDS Core s’appuie sur les custom properties fournies par `@ivds/design-tokens`. Commencez par les presets officiels documentés dans [`../../documentation/CUSTOMIZATION.md`](../../documentation/CUSTOMIZATION.md) : `default`, `dark` et `high-contrast`.

Vous pouvez personnaliser le système en surchargeant ces propriétés :

```css
:root {
  --ivds-interactive-primary-bg: var(--color-brand-primary-500);
  --ivds-interactive-secondary-border: var(--color-brand-secondary-600);
  --ivds-surface-base: #ffffff;
  --ivds-text-primary: var(--color-semantic-neutral-900);
}
```

### Stratégie recommandée

1. Sélectionnez d’abord un preset officiel.
2. Surchargez les design tokens si vous devez étendre la palette ou les fondations.
3. Surchargez les alias `--ivds-*` lorsque vous souhaitez adapter le système sans modifier les composants un par un.
4. Ne surchargez les sélecteurs de composants qu’en dernier recours.

## Maturité de release

IVDS documente un même modèle de maturité pour les composants, les patterns et les fondations :

- `Draft`
- `Beta`
- `Stable`
- `Deprecated`

### Statut actuel par famille

| Famille | Statut | Notes |
|--------|--------|-------|
| Contrat de thème et utilitaires | `Stable` | Styles de base, couches utilitaires, alias sémantiques, helpers de layout |
| Structure et navigation | `Stable` | Header, Footer, Navigation, Breadcrumb, Pagination |
| Primitives de formulaire | `Stable` | Button, styles de text input, fieldset, groupes de sélection, base de validation |
| Champs avancés | `Beta` | File input, styles liés à la date, à l’heure, au téléphone et à certains états plus sensibles |
| Composants composites | `Beta` | Tooltip, Accordion, Hero, Table, Stepper, Cookie Consent, Login et composants comparables |

Avant d’adopter une famille de composants en production, référez-vous aux règles de validation documentées ici :

- [`../../documentation/RELEASE-PHASES.md`](../../documentation/RELEASE-PHASES.md)
- [`../../documentation/ACCESSIBILITY-CONTRACT.md`](../../documentation/ACCESSIBILITY-CONTRACT.md)

Pour les consommateurs CSS-only, la disponibilité d’un composant ne signifie pas automatiquement qu’il est prêt pour tous les contextes de production. Les phases de release servent à évaluer ce niveau de maturité.

## Intégration framework

### CSS Modules

```javascript
import styles from '@ivds/core/components/button.css';

function Button({ children, variant = 'primary' }) {
  return (
    <button className={`ivds-button ivds-button--${variant}`}>
      {children}
    </button>
  );
}
```

### Styled Components

```javascript
import styled from 'styled-components';
import '@ivds/core/components/button';

const StyledButton = styled.button.attrs({
  className: 'ivds-button ivds-button--primary'
})`
  /* Styles complémentaires */
`;
```

### Vue.js

```vue
<template>
  <button :class="buttonClasses">
    <slot />
  </button>
</template>

<script>
import '@ivds/core/components/button';

export default {
  props: {
    variant: {
      type: String,
      default: 'primary'
    }
  },
  computed: {
    buttonClasses() {
      return `ivds-button ivds-button--${this.variant}`;
    }
  }
};
</script>
```

## Compatibilité navigateurs

- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+

Une compatibilité de base avec des navigateurs plus anciens reste possible grâce aux fallbacks de custom properties.

## Documentation

- [Storybook Documentation](https://ivds.github.io/design-system/core)
- [Design System Guidelines](https://ivds.github.io/design-system)
- [Component Examples](https://ivds.github.io/design-system/core/examples)

## Système de build

Le package s’appuie sur :

- **PostCSS** avec support SCSS pour la compilation
- **Stylelint** pour la qualité de code et l’application de la convention BEM
- **Jest** pour les tests unitaires SCSS
- **Storybook** pour la documentation des composants
- **Bundle size monitoring** pour suivre le poids des livrables

### Commandes de build

```bash
# Build de développement
yarn build

# Build de production
yarn build:prod

# Mode watch
yarn test:watch

# Vérifier la taille des bundles
yarn size
```

### Tailles de bundle

- Bundle principal : `all.css` (objectif : <50 kB)
- Bundle minifié : `all.min.css` (objectif : <25 kB)
- Composants individuels disponibles pour des imports ciblés

## Performance

IVDS Core vise une utilisation efficace en production :

- Sortie CSS limitée au nécessaire
- Compression favorable à Gzip
- Imports ciblables pour réduire le poids embarqué
- Fonctionnalités CSS modernes avec fallbacks lorsque c’est utile
