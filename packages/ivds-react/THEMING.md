# Guide de theming IVDS React

Ce guide explique comment personnaliser l'apparence des composants IVDS pour votre site institutionnel.

---

## Approche : tokens-first

IVDS utilise une approche basee sur les CSS custom properties. Le ThemeProvider injecte des tokens dans le DOM, et les composants les consomment automatiquement. Vous n'avez pas besoin de modifier le code des composants pour changer leur apparence.

---

## Methode 1 : CSS custom properties (le plus simple)

Si vous n'utilisez pas React ou si vous voulez une solution sans JavaScript :

```css
/* Votre fichier CSS */
:root {
  /* Changer la couleur primaire */
  --color-brand-primary-500: #1a6bdb;
  --color-brand-primary-600: #1058b8;
  --color-brand-primary-700: #0b4593;

  /* Changer la police */
  --typography-fontFamilies-primary: 'Source Sans 3', sans-serif;
  --typography-fontFamilies-secondary: 'Source Serif 4', serif;
}
```

Tous les composants qui utilisent ces tokens seront automatiquement mis a jour.

---

## Methode 2 : ThemeProvider React

Le ThemeProvider offre plus de controle, avec le basculement light/dark et l'injection dynamique de tokens.

### Setup de base

```tsx
import '@ivds/core';
import { ThemeProvider } from '@ivds/react/theme';

function App({ children }) {
  return (
    <ThemeProvider mode="light">
      {children}
    </ThemeProvider>
  );
}
```

### Avec tokens personnalises

```tsx
const tokensMinistere = {
  '--color-brand-primary-500': '#1a6bdb',
  '--color-brand-primary-600': '#1058b8',
  '--ivds-interactive-primary-bg': '#1058b8',
  '--ivds-interactive-primary-bg-hover': '#0b4593',
};

function AppMinistere({ children }) {
  return (
    <ThemeProvider mode="light" tokens={tokensMinistere}>
      {children}
    </ThemeProvider>
  );
}
```

### Basculer le theme

```tsx
import { useTheme } from '@ivds/react/theme';

function SwitchTheme() {
  const { mode, setMode } = useTheme();

  return (
    <button onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}>
      Passer en mode {mode === 'light' ? 'sombre' : 'clair'}
    </button>
  );
}
```

---

## API du ThemeProvider

### Props

| Prop | Type | Defaut | Description |
|------|------|--------|-------------|
| `mode` | `'light' \| 'dark'` | `'light'` | Mode de theme |
| `tokens` | `Record<string, string>` | `{}` | Tokens CSS custom a injecter |
| `target` | `'root' \| 'scoped'` | `'root'` | Ou appliquer : document entier ou conteneur local |
| `children` | `ReactNode` | — | Contenu de l'application |

### Hook useTheme

```tsx
const { mode, setMode } = useTheme();
```

| Retour | Type | Description |
|--------|------|-------------|
| `mode` | `'light' \| 'dark'` | Mode actuel |
| `setMode` | `(mode) => void` | Changer le mode |

---

## Tokens personnalisables

Voici les tokens les plus utiles a overrider pour la personnalisation :

### Couleurs brand

```
--color-brand-primary-50 ... --color-brand-primary-950
--color-brand-secondary-50 ... --color-brand-secondary-950
--color-brand-accent-50 ... --color-brand-accent-950
```

### Surfaces et texte

```
--ivds-surface-page         Fond de page
--ivds-surface-base         Fond des cartes/modales
--ivds-surface-muted        Fond attenué
--ivds-text-primary         Texte principal
--ivds-text-secondary       Texte secondaire
--ivds-text-muted           Texte discret
```

### Interactifs (boutons, liens)

```
--ivds-interactive-primary-bg          Fond bouton primaire
--ivds-interactive-primary-bg-hover    Fond bouton primaire au survol
--ivds-interactive-primary-text        Texte bouton primaire
--ivds-interactive-secondary-bg        Fond bouton secondaire
--ivds-interactive-secondary-border    Bordure bouton secondaire
```

### Focus

```
--ivds-focus-ring-color    Couleur de l'anneau de focus
--ivds-focus-ring          Box-shadow complete du focus ring
```

---

## Bonnes pratiques

1. **Toujours overrider par echelle** : si vous changez `primary-500`, changez aussi `primary-600` et `primary-700` pour garder la coherence hover/active.

2. **Tester le mode sombre** : si vous personnalisez des couleurs, verifiez qu'elles fonctionnent aussi en mode sombre.

3. **Respecter les contrastes** : le ratio de contraste WCAG minimum est de 4.5:1. Utilisez un outil comme [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) pour verifier.

4. **Utiliser les tokens existants** : avant de creer des couleurs custom, verifiez si un token existant ne convient pas deja (cocoa, gold, lagoon...).
