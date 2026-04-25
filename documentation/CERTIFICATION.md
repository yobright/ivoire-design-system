# Verification qualite IVDS

IVDS s'appuie sur une verification continue de la qualite via les tests des tokens, du Core SCSS, des composants React et des exports publics.

> **Note** : cette verification mesure surtout la coherence technique du design system. Elle complete, sans les remplacer, les revues visuelles et les audits d'accessibilite reels.

---

## Axes de verification

Les controles portent sur 4 axes :

| Axe | Poids | Ce qu'il mesure |
|-----|-------|-----------------|
| Accessibilite | Revue externe | Tests a11y, navigation clavier, roles/labels |
| Performance | Revue externe | Profils Storybook, poids CSS/JS, rendu |
| Design / Tokens | Verification interne | Usage des tokens et absence de regressions grossieres |
| Integration | Verification interne | Tests, typings et coherence des exports |

---

## Utilisation

```bash
# Validation des tokens
yarn test:tokens

# Validation SCSS Core
yarn test:core

# Validation React
yarn test:react

# Audit de couverture des exports React
yarn audit:react-coverage:strict
```

---

## Verifications automatiques

1. **Tokens** — les artefacts design tokens se compilent sans erreur
2. **Core** — les composants SCSS passent les tests et restent alignes avec les mixins
3. **React** — les composants et leurs tests restent valides apres refactor
4. **Exports** — la couverture et la surface publique restent coherentes

---

## Sorties

Les sorties dependent des outils lances : console, rapports de couverture et journaux des runners de test.
