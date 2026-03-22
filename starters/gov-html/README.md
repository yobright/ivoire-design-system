# Starter Gov HTML

Starter HTML/CSS pour creer un portail gouvernemental avec IVDS, sans etape de build.

Ce starter est ideal si vous voulez un site statique rapide a deployer, ou si votre equipe prefere travailler en HTML/CSS pur.

---

## Demarrage

```bash
cd starters/gov-html
yarn install
python3 -m http.server 3000
```

Ouvrez http://localhost:3000 dans votre navigateur.

---

## Structure

```
gov-html/
  index.html              Page d'accueil (landing)
  passport.html           Formulaire de demande (transactionnel)
  opisms.html             Page d'authentification OTP
  package.json            Dependances (@ivds/core, @ivds/design-tokens)
  assets/
    app.js                Logique de rendu cote client
    styles.css            Styles custom / overrides
  adapters/
    json-adapter.js       Chargement des donnees depuis les fichiers JSON
    cms-adapter.example.js  Exemple d'integration CMS
  data/
    landing.fr.json       Contenu de la landing en francais
    landing.en.json       Contenu de la landing en anglais
```

---

## Pages disponibles

### index.html — Page d'accueil

La landing inclut tous les blocs obligatoires du standard gov :
- En-tete avec logo et switcheur de langue
- Navigation principale
- Bandeau promotionnel
- Repertoire des services
- Actualites
- Pied de page mega-footer

### passport.html — Formulaire transactionnel

Formulaire multi-etapes pour les demarches administratives (demande de passeport, inscription, etc.).

### opisms.html — Authentification

Page d'authentification par code OTP envoye par SMS.

---

## Personnaliser le contenu

Modifiez les fichiers `data/landing.fr.json` et `data/landing.en.json` pour changer le contenu. Ces fichiers suivent le schema `schemas/gov/landing.schema.json`.

## Personnaliser les styles

Ajoutez vos overrides dans `assets/styles.css`. Utilisez les CSS custom properties IVDS :

```css
:root {
  --color-brand-primary-500: #1a6bdb;
}
```

## Integrer un CMS

Copiez `adapters/cms-adapter.example.js` vers `adapters/cms-adapter.js` et adaptez-le a votre CMS. Changez l'import dans `assets/app.js`.

---

## Deploiement

Ce starter est un ensemble de fichiers statiques. Deployez-le sur n'importe quel serveur web :
- Serveur Apache ou Nginx
- CDN (Cloudflare Pages, Netlify, etc.)
- Hebergement statique
