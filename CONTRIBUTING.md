# Contribuer à IVDS

Merci de votre intérêt pour Ivoire Design System. Toute contribution est la bienvenue, qu’il s’agisse de signaler un bug, de proposer une amélioration ou d’écrire du code.

---

## Comment contribuer

### Signaler un bug

1. Vérifiez dans les [issues existantes](https://github.com/yobright/ivoire-design-system/issues) que le bug n’a pas déjà été signalé.
2. Créez une nouvelle issue avec :
   - Une description claire du problème
   - Les étapes pour reproduire
   - Le comportement attendu et le comportement observé
   - Votre environnement (navigateur, OS, version Node.js)

### Proposer une fonctionnalité

Ouvrez une issue avec le label `feature` et décrivez :
- Le besoin auquel la fonctionnalité répond
- Un exemple d’utilisation concret
- Si possible, une esquisse de l’API souhaitée

### Soumettre du code

1. Forkez le dépôt et créez une branche depuis `main` :
   ```bash
   git checkout -b feat/mon-amelioration
   ```

2. Installez les dépendances et lancez un build :
   ```bash
   yarn install
   yarn build
   ```

3. Faites vos modifications en suivant les conventions ci-dessous.

4. Vérifiez que tout passe :
   ```bash
   yarn test
   yarn build
   ```

5. Poussez vos changements et ouvrez une Pull Request vers `main`.

## Exigences de maturité

Toute contribution qui ajoute ou modifie un composant, un pattern ou une fondation doit aussi prendre en compte :

- son statut de release (`Draft`, `Beta`, `Stable`, `Deprecated`)
- ses exigences d’accessibilité documentées
- sa documentation d’usage
- ses tests et sa story quand le changement touche un composant publié

Consultez avant de contribuer :

- [Phases de release](documentation/RELEASE-PHASES.md)
- [Contrat d’accessibilité](documentation/ACCESSIBILITY-CONTRACT.md)
- [Guide de développement](documentation/DEVELOPMENT.md)

---

## Conventions de code

### CSS / SCSS

- Préfixe `ivds-` pour toutes les classes
- Convention BEM : `.ivds-composant__element--modificateur`
- Consommer les tokens via `var(--token-name, fallback)`
- Toujours fournir un fallback CSS
- Support du mode sombre via `[data-ivds-theme='dark']`

### TypeScript / React

- Typer toutes les props avec une interface exportée
- Utiliser `forwardRef` pour la propagation de ref
- Inclure les attributs ARIA nécessaires
- Éviter `any`, sauf cas exceptionnel justifié

### Tests

- Chaque composant doit avoir des tests unitaires
- Utiliser `@testing-library/react` et tester par rôle ou par texte, pas par classe CSS
- Chaque composant doit avoir au moins une story Storybook

### Commits

Format :
```text
type(scope): description courte

type = feat | fix | docs | style | refactor | test | chore
scope = tokens | core | react | ci | docs
```

Exemples :
```text
feat(react): ajouter le composant Tooltip
fix(core): corriger le padding du bouton en mode compact
docs(tokens): documenter les tokens d’opacité
```

---

## Structure d’un composant

### Core (SCSS)

```text
packages/ivds-core/src/components/mon-composant/
  mon-composant.scss
  _mon-composant-mixin.scss
  mon-composant.stories.js
```

### React

```text
packages/ivds-react/src/components/MonComposant/
  MonComposant.tsx
  MonComposant.test.tsx
  MonComposant.stories.tsx
  index.ts
```

N’oubliez pas d’ajouter l’export dans `packages/ivds-react/src/index.ts`.

---

## Questions ?

- Ouvrez une [Discussion GitHub](https://github.com/yobright/ivoire-design-system/discussions)
- Consultez le [Guide de développement](documentation/DEVELOPMENT.md)
- Consultez les [Phases de release](documentation/RELEASE-PHASES.md)
- Consultez le [Contrat d’accessibilité](documentation/ACCESSIBILITY-CONTRACT.md)
