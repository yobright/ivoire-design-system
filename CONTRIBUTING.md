# Contribuer a IVDS

Merci de votre interet pour Ivoire Design System. Ce projet est en phase de fondation technique — toute contribution est la bienvenue, qu'il s'agisse de signaler un bug, proposer une amelioration, ou ecrire du code.

---

## Comment contribuer

### Signaler un bug

1. Verifiez dans les [issues existantes](https://github.com/babiverse/ivoire-design-system/issues) que le bug n'a pas deja ete signale
2. Creez une nouvelle issue avec :
   - Une description claire du probleme
   - Les etapes pour reproduire
   - Le comportement attendu vs le comportement observe
   - Votre environnement (navigateur, OS, version Node.js)

### Proposer une fonctionnalite

Ouvrez une issue avec le label `feature` et decrivez :
- Le besoin auquel la fonctionnalite repond
- Un exemple d'utilisation concret
- Si possible, une esquisse de l'API souhaitee

### Soumettre du code

1. Forkez le repo et creez une branche depuis `main` :
   ```bash
   git checkout -b feat/mon-amelioration
   ```

2. Installez les dependances et construisez :
   ```bash
   yarn install
   yarn build
   ```

3. Faites vos modifications en suivant les conventions ci-dessous

4. Verifiez que tout passe :
   ```bash
   yarn test
   yarn build
   ```

5. Poussez et creez une Pull Request vers `main`

---

## Conventions de code

### CSS / SCSS

- Prefixe `ivds-` pour toutes les classes
- Convention BEM : `.ivds-composant__element--modificateur`
- Consommer les tokens via `var(--token-name, fallback)`
- Toujours fournir un fallback CSS
- Support du mode sombre via `[data-ivds-theme='dark']`

### TypeScript / React

- Typer toutes les props avec une interface exportée
- Utiliser `forwardRef` pour la propagation de ref
- Inclure les attributs ARIA necessaires
- Pas de `any` sauf cas exceptionnel justifie

### Tests

- Chaque composant doit avoir des tests unitaires
- Utiliser `@testing-library/react` et tester par role/texte, pas par classe CSS
- Chaque composant doit avoir au moins une story Storybook

### Commits

Format :
```
type(scope): description courte

type = feat | fix | docs | style | refactor | test | chore
scope = tokens | core | react | ci | docs
```

Exemples :
```
feat(react): ajouter le composant Tooltip
fix(core): corriger le padding du bouton en mode compact
docs(tokens): documenter les tokens d'opacite
```

---

## Structure d'un composant

### Core (SCSS)

```
packages/ivds-core/src/components/mon-composant/
  mon-composant.scss
  _mon-composant-mixin.scss
  mon-composant.stories.js
```

### React

```
packages/ivds-react/src/components/MonComposant/
  MonComposant.tsx
  MonComposant.test.tsx
  MonComposant.stories.tsx
  index.ts
```

N'oubliez pas d'ajouter l'export dans `packages/ivds-react/src/index.ts`.

---

## Questions ?

- Ouvrez une [Discussion GitHub](https://github.com/babiverse/ivoire-design-system/discussions)
- Consultez le [Guide de developpement](documentation/DEVELOPMENT.md)
