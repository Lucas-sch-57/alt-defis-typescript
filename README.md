# Utility Functions - TypeScript

Collection de fonctions utilitaires permettant de manipuler :

- strings
- arrays
- objects

# Installation

```bash
pnpm i
```

# Lancer les scripts

### String

```bash
pnpm string
```

### Object

```bash
pnpm object
```

### Array-Object

```bash
pnpm array-object
```

# Structure du projet

src/
├── array-object/
│ ├── array-object.ts
│ └── functions.ts
│
├── object2/
│ ├── types/
│ │ └── object.d.ts
│ │
│ ├── functions.ts
│ └── object.ts
│
├── string/
│ └── string.ts
│
└── index.ts

## Organisation

- `string/`
  Contient les exercices de manipulation de chaînes de caractères.

- `array-object/`
  Contient les exercices de manipulation de tableaux et d'objets complexes.

- `object2/`
  Contient les exercices avancés autour des objets ainsi que les types associés.

- `types/`
  Regroupe les définitions de types TypeScript réutilisables.

- `index.ts`
  Point d'entrée principal du projet.

## Clean code

Plusieurs améliorations ont été appliquées :

- suppression des `any`
- suppression des `Function`
- simplification des `reduce`
- suppression des spreads inutiles dans les reducers
- fonctions pures sans `console.log`

---

## Optimisations

Quelques optimisations simples ont été mises en place :

- utilisation de `Set`
- mutation contrôlée des accumulateurs
- simplification des parcours de tableaux
