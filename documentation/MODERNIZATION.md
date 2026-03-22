# Suivi de progression IVDS V1

Ce document suit l'avancement de l'implementation du standard gouvernemental V1.

---

## Fondation (termine)

- [x] Design tokens : couleurs (brand, semantic, UI), typographie (Inter + IBM Plex Sans), espacements (component + layout), elevation, animations, breakpoints, opacite, z-index
- [x] Build multi-format : CSS, SCSS, JS, JSON, TypeScript via Style Dictionary
- [x] Export dual : ESM + CommonJS avec types TypeScript
- [x] Composants Core CSS : 20+ composants avec patterns BEM
- [x] Composants React : 20 composants avec TypeScript, forwardRef, ARIA
- [x] ThemeProvider : modes light/dark, injection de tokens custom
- [x] Composants gov : GovShell, GovHeader, GovPrimaryNav, GovServiceDirectory, GovNewsPanel, GovAgendaPanel, GovMegaFooter, GovLanguageSwitcher, GovFlashTicker, GovTopPromo
- [x] Starters : gov-html (zero build) + gov-next (Next.js 14 App Router)
- [x] Schemas JSON : 7 contrats de donnees gov
- [x] CI/CD : lint, test, certification, release tag-based, visual regression

## Stabilisation (termine)

- [x] Couverture stories Storybook : 100% des composants
- [x] Couverture tests unitaires : 100% des composants (22 suites, 105 tests)
- [x] Seuils de couverture : 70% branches, 75% fonctions/lignes/statements
- [x] Certification : design 100%, integration 100%, 0 couleurs hardcodees

## Polissage (en cours)

- [x] Couleur primary affinee : burnt orange `#CC5500`
- [x] Typographie differenciee : Inter (body) + IBM Plex Sans (headings)
- [x] Tokens manquants ajoutes : opacite (9 valeurs), z-index (10 niveaux)
- [x] Doublons supprimes : breakpoints legacy
- [x] Conflit couleurs resolu : semantic aligne sur UI feedback
- [x] Border-radius xs corrige : 0 -> 0.0625rem (1px)
- [x] Theme Storybook IVDS : manager + preview brandes pour Core et React
- [x] Pages MDX documentation : Introduction, Couleurs, Typographie, Espacement
- [x] Documentation complete reecrite en francais
- [ ] Presets de theme : gov-default + gov-dark

## Travail restant pour V1

- [ ] Integration Lighthouse CI pour scores a11y/performance reels
- [ ] Activation du mode strict de certification
- [ ] Tests E2E pour les starters (Playwright)
- [ ] Baselines de regression visuelle (Chromatic)
- [ ] Augmentation des seuils de couverture (80/85/85/85)

---

## Metriques actuelles

| Metrique | Valeur |
|----------|--------|
| Composants React | 20 |
| Composants Gov | 10 |
| Stories Storybook | 40 (Core 17 + React 23) |
| Tests unitaires | 105 |
| Suites de test | 22 React + 4 Core |
| Tokens CSS generes | 316 custom properties |
| Score certification | 79/100 (mode souple, scores par defaut) |
| Design tokens | 100% |
| Integration | 100% |
