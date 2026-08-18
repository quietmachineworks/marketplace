# quietmachineworks

Small, opinionated tools for solo developers shipping real projects. Each one lives in its own repository, versioned and released on its own; this repo is only the index.

```
/plugin marketplace add quietmachineworks/marketplace
```

gets every tool below in one shot. Each is also self-hosted in its own repo if you only want one of them.

## Tools

- **[ratchet](https://github.com/quietmachineworks/ratchet)** — report which of a project's stated code rules are enforced, and build the checks that enforce the rest.
- **[shakedown](https://github.com/quietmachineworks/shakedown)** — play a real user through a product's UI, screen by screen, on a genuinely empty environment, until every screen in scope survives contact with reality.

## Adding a tool here

A new tool gets its own repository first (own `LICENSE`, `README`, `.claude-plugin/plugin.json`, its own self-hosted `marketplace.json` for a standalone install). Once it stands on its own, one entry gets added to `.claude-plugin/marketplace.json` here, pointing at it by `github`/`repo` — no code moves, no vendoring, this file only indexes.

## License

MIT, see [LICENSE](LICENSE). Each tool carries its own license in its own repository; this one covers the index itself.
