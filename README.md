# quietmachineworks

[English](#english) | [Français](#français)

## English

Small, opinionated tools for solo developers shipping real projects. Each one lives in its own repository, versioned and released on its own; this repo is only the index.

```
/plugin marketplace add quietmachineworks/marketplace
```

gets every tool below in one shot. Each is also self-hosted in its own repo if you only want one of them.

### Tools

- **[ratchet](https://github.com/quietmachineworks/ratchet)** - report which of a project's stated code rules are enforced, and build the checks that enforce the rest.
- **[shakedown](https://github.com/quietmachineworks/shakedown)** - play a real user through a product's UI, screen by screen, on a genuinely empty environment, until every screen in scope survives contact with reality.

### Adding a tool here

A new tool gets its own repository first (own `LICENSE`, `README`, `.claude-plugin/plugin.json`, its own self-hosted `marketplace.json` for a standalone install). Once it stands on its own, one entry gets added to `.claude-plugin/marketplace.json` here, pointing at it by `github`/`repo` - no code moves, no vendoring, this file only indexes.

### License

MIT, see [LICENSE](LICENSE). Each tool carries its own license in its own repository; this one covers the index itself.

---

## Français

Des outils courts et assumés, pour les développeurs seuls qui livrent de vrais projets. Chacun vit dans son propre dépôt, versionné et publié séparément ; ce dépôt n'est que l'index.

```
/plugin marketplace add quietmachineworks/marketplace
```

installe tous les outils ci-dessous d'un coup. Chacun s'installe aussi seul depuis son propre dépôt si un seul vous intéresse.

### Les outils

- **[ratchet](https://github.com/quietmachineworks/ratchet)** - dit lesquelles des règles de code qu'un projet s'est données sont réellement appliquées, et construit les contrôles qui appliquent les autres.
- **[shakedown](https://github.com/quietmachineworks/shakedown)** - joue un vrai utilisateur dans l'interface d'un produit, écran par écran, sur un environnement réellement vide, jusqu'à ce que chaque écran du périmètre survive au contact du réel.

### Ajouter un outil ici

Un nouvel outil commence par avoir son propre dépôt (son `LICENSE`, son `README`, son `.claude-plugin/plugin.json`, et son propre `marketplace.json` pour une installation autonome). Une fois qu'il tient debout seul, une entrée est ajoutée dans le `.claude-plugin/marketplace.json` de ce dépôt, qui pointe vers lui par `github`/`repo` - aucun code ne déménage, rien n'est vendoré, ce fichier ne fait qu'indexer.

### Licence

MIT, voir [LICENSE](LICENSE). Chaque outil porte sa propre licence dans son propre dépôt ; celle-ci ne couvre que l'index.
