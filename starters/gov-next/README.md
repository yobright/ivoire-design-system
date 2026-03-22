# Starter Gov Next.js

Starter Next.js 14 pour creer un portail gouvernemental avec les composants React IVDS.

Ce starter est ideal pour les equipes qui veulent un site dynamique avec routing, SSR, et l'ecosysteme React.

---

## Demarrage

```bash
cd starters/gov-next
yarn install
yarn dev
```

Ouvrez http://localhost:3000 dans votre navigateur.

---

## Structure

```
gov-next/
  app/
    layout.tsx              Layout racine (fonts, meta, locale)
    page.tsx                Redirection vers la locale par defaut
    globals.css             Styles globaux
    [locale]/
      page.tsx              Page d'accueil (landing)
      passport/
        page.tsx            Formulaire de demande
      opisms/
        page.tsx            Page d'authentification
      _content.ts           Utilitaires de contenu partages
  package.json              Dependances (Next.js, React, IVDS)
  tsconfig.json             Configuration TypeScript
  next.config.js            Configuration Next.js
  adapters/
    jsonAdapter.ts          Chargement des donnees JSON
    cmsAdapter.example.ts   Exemple d'integration CMS
  data/
    landing.fr.json         Contenu en francais
    landing.en.json         Contenu en anglais
```

---

## Pages disponibles

| Route | Description |
|-------|-------------|
| `/fr` | Page d'accueil en francais |
| `/en` | Page d'accueil en anglais |
| `/fr/passport` | Formulaire de demande |
| `/en/passport` | Formulaire de demande (anglais) |
| `/fr/opisms` | Authentification OTP |
| `/en/opisms` | Authentification OTP (anglais) |

Le routing par locale est gere via le segment dynamique `[locale]` de Next.js App Router.

---

## Composants utilises

Ce starter utilise les composants gov de `@ivds/react/gov` :

```tsx
import {
  GovShell,
  GovHeader,
  GovPrimaryNav,
  GovServiceDirectory,
  GovNewsPanel,
  GovMegaFooter,
} from '@ivds/react/gov';
```

---

## Personnaliser

### Le contenu

Modifiez `data/landing.fr.json` et `data/landing.en.json`.

### Les couleurs

Dans `app/globals.css` :

```css
:root {
  --color-brand-primary-500: #1a6bdb;
}
```

Ou via le ThemeProvider dans `app/layout.tsx` :

```tsx
<ThemeProvider mode="light" tokens={{
  '--color-brand-primary-500': '#1a6bdb',
}}>
```

### Integrer un CMS

Copiez `adapters/cmsAdapter.example.ts` vers `adapters/cmsAdapter.ts` et adaptez-le. Changez l'import dans les pages.

---

## Build et deploiement

```bash
# Build de production
yarn build

# Lancer en production
yarn start
```

Deploiement possible sur : Vercel, Netlify, tout serveur Node.js, ou en mode statique avec `output: 'export'` dans `next.config.js`.
