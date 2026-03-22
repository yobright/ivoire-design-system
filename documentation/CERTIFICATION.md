# Outil de certification IVDS

IVDS inclut un script de certification qui evalue la conformite d'un site aux bonnes pratiques du design system. Il produit un score sur 100.

> **Note** : cet outil est fourni a titre experimental. Il mesure l'adoption des tokens et la presence des fichiers requis, pas la qualite visuelle ou fonctionnelle du site.

---

## Modele de score

Le score est calcule sur 4 axes :

| Axe | Poids | Ce qu'il mesure |
|-----|-------|-----------------|
| Accessibilite | 40% | Score injecte (Lighthouse, Axe, etc.) |
| Performance | 30% | Score injecte (Lighthouse, etc.) |
| Design / Tokens | 20% | Absence de couleurs hardcodees dans les styles |
| Integration | 10% | Presence des schemas et fichiers de donnees |

---

## Utilisation

```bash
# Mode par defaut — a11y et perf valent 70 par defaut
yarn certify:gov

# Injecter des scores mesures
IVDS_A11Y_SCORE=92 IVDS_PERF_SCORE=88 yarn certify:gov

# Mode strict — echoue si score < 85
IVDS_A11Y_SCORE=92 IVDS_PERF_SCORE=88 yarn certify:gov --strict
```

---

## Verifications automatiques

1. **Schemas** — les schemas JSON de `schemas/gov/` doivent exister
2. **Starters** — les deux starters doivent contenir leurs fichiers
3. **Donnees** — les fichiers `landing.*.json` sont valides contre le schema
4. **Tokens** — scan des fichiers CSS pour des couleurs hex hardcodees

---

## Sorties

Les rapports sont generes dans `reports/` en formats JSON et Markdown.
