# TAF TypeScript · Académie de Poudlard

Projet TypeScript réalisé à partir des 6 exercices du TAF (thème Poudlard).

## Travail demandé et réalisé

| # | Demandé | Réalisé | Fichier |
|---|---------|---------|---------|
| 1 | **Ajouter un nouveau sorcier** : méthode qui enregistre un sorcier à l'aide de `NewWizard`, puis lui attribue un identifiant | `NewWizard = Omit<Wizard, "id">` et `create()` qui attribue l'id | `types.ts`, `repository.ts` |
| 2 | **Filtrer par maison** : méthode `findByHouse(house: House)` avec le référentiel générique | `findByHouse(house: Wizard["house"])` dans `WizardRepository` | `repository.ts` |
| 3 | **Ajouter un événement de sort** : `Extract<AcademyEvent, { type: 'spell-cast' }>` | `SpellCastEvent` et `handleSpellCast()` | `types.ts`, `main.ts` |
| 4 | **Valider la puissance d'un sort** : décorateur qui rejette un sort dont la puissance est inférieure à zéro | `@ValidateSpellPower` appliqué à `SpellRepository.add()` | `decorators.ts`, `repository.ts` |
| 5 | **Ajouter une méthode mise en cache** : décorateur qui met en cache les résultats avec une `Map` | `@Cache` (`WeakMap` + `Map`, un cache par instance) sur `SpellCalculator.calculatePower()` | `decorators.ts`, `main.ts` |
| 6 | **Rendre la validation de type plus stricte** : vérifier que `house` est l'une des quatre valeurs autorisées | `isHouse()` et `isWizard()` (Durmstrang est refusé) | `main.ts` |

## Résultat attendu (`npm start`)

- Ex. 1 : le sorcier est créé avec `id: 1`
- Ex. 2 : seuls les sorciers de Gryffindor sont retournés
- Ex. 3 : `Wizard 1 cast Expelliarmus`
- Ex. 4 : `Spell power cannot be negative`
- Ex. 5 : `[CACHE MISS]` puis `[CACHE HIT]` pour les mêmes arguments
- Ex. 6 : `true` pour Gryffindor, `false` pour Durmstrang

## Structure

```
src/
├── types.ts
├── repository.ts
├── decorators.ts
└── main.ts
demo.html
package.json
tsconfig.json
```

## Lancer le projet

```bash
npm install
npm start
```

Ouvrir `demo.html` dans le navigateur pour voir la démo des 6 exercices.

## Technologies

TypeScript (avec `experimentalDecorators`), Node.js
