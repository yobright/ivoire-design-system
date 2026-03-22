# Recommandations pour les sites institutionnels

Ce document propose des recommandations techniques pour construire des sites institutionnels coherents avec IVDS.

> **Note** : ces recommandations sont un objectif de conception, pas une exigence. IVDS est un projet open source independant qui met a disposition des composants et des tokens. L'adoption et l'adaptation restent a la discretion de chaque projet.

---

## Structure recommandee pour une page d'accueil

| Bloc | Description |
|------|-------------|
| En-tete | Logo, nom du site, navigation principale |
| Hero / Bandeau | Image et appel a l'action |
| Services | Repertoire des services en ligne |
| Actualites | Dernieres nouvelles avec extrait et date |
| Pied de page | Liens institutionnels, contact |

Les composants IVDS disponibles pour cela : `Header`, `Footer`, `Navigation`, `Card`, `Button`.

---

## Templates transactionnels

### Formulaire multi-etapes

Page de type formulaire pour les demarches administratives. Composants utiles : `TextInput`, `Select`, `Checkbox`, `Button`.

### Authentification

Page d'authentification pour les services securises. Composants utiles : `TextInput`, `Modal`, `Button`.

---

## Contrats de donnees

Des schemas JSON sont fournis dans `schemas/gov/` pour structurer les donnees de contenu (navigation, actualites, services, etc.). Les starters `gov-html` et `gov-next` incluent des exemples de fichiers de donnees valides.

---

## Accessibilite

- **WCAG 2.2 AA** — niveau vise
- Navigation clavier complete pour tous les composants interactifs
- Attributs ARIA sur tous les elements semantiques
- Contraste de couleurs conforme (ratio 4.5:1 pour le texte normal)
- Labels explicites pour tous les champs de formulaire
- Support `prefers-reduced-motion` pour les animations

---

## Performance

- **Core Web Vitals** — cibles recommandees :
  - LCP < 2.5s
  - FID < 100ms
  - CLS < 0.1
- CSS-first : les composants Core fonctionnent sans JavaScript

---

## Bilinguisme

Les starters supportent le francais et l'anglais via des fichiers de donnees separes (`*.fr.json`, `*.en.json`) et l'attribut `lang` sur l'element HTML racine.
