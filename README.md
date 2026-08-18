# quietmachineworks

[English](#english) | [Français](#français)

## English

Small, opinionated tools for solo developers shipping real projects. One plugin,
one install, three skills.

```
/plugin marketplace add quietmachineworks/qmw
/plugin install qmw@quietmachineworks
```

Or with the skills CLI, for any agent that reads `SKILL.md`:

```bash
npx skills add quietmachineworks/qmw
```

### ratchet - make a rule enforce itself

A rule written in `CLAUDE.md`, `AGENTS.md` or a style guide is an intention.
Nothing applies it. Banning the pattern outright does not work either: on a
repository that already breaks the rule, every existing case would have to be
fixed before the check can go on, so it never goes on. A ratchet freezes what the
repository already carries, fails when that number rises, and lets it fall.

```
/qmw:ratchet-audit
```

Reads what your project already states, and sorts every rule into three piles:
already covered by a linter, mechanizable but unenforced with the count it
currently reaches, and judgment calls no check should approximate. Writes
nothing. The middle pile is usually much larger than expected.

```
/qmw:ratchet-add no TODO comments in application code
```

Builds the check for one rule, freezes today's count as the baseline, and wires
it into CI.

### shakedown - play a real user before real users do

Test suites only ever exercise clean, fabricated worlds. The bugs that reach real
users are disproportionately the ones a clean-world suite structurally cannot
see: the second time a unique gesture is repeated, the account with a hundred
rows instead of ten, the guard that reads the wrong element of a list.

```
/qmw:shakedown
```

A genuinely empty environment, personas born from real signup, real clicks, until
every intention in scope actually lands. Sub-agents execute; a separate
controller judges each result as an expert practitioner of the tested persona's
real job, not as a generic first-time user. Every finding lands in a living
registry, kept up to date screen by screen.

Front-end products only, driven through a browser by accessibility tree and
locators. The first run interviews you and writes the answers into `.shakedown/`
at the project root, versioned like any other project decision.

### Adding a skill here

One repository, one plugin, one release. A new skill is a folder under `skills/`
whose name is what people will type after `/qmw:`, a `SKILL.md` whose frontmatter
`name` matches that folder, and a mention in this README. CI enforces all three:
a skill nobody can invoke, or a README that invokes one that does not exist,
fails the build rather than a stranger's install.

### License

MIT, see [LICENSE](LICENSE).

---

## Français

Des outils courts et assumés, pour les développeurs seuls qui livrent de vrais
projets. Un plugin, une installation, trois skills.

```
/plugin marketplace add quietmachineworks/qmw
/plugin install qmw@quietmachineworks
```

### ratchet - qu'une règle s'applique d'elle-même

Une règle écrite dans `CLAUDE.md`, `AGENTS.md` ou un guide de style est une
intention. Rien ne l'applique. Interdire le motif d'un coup ne marche pas non
plus : sur un dépôt qui enfreint déjà la règle, il faudrait corriger tous les cas
existants avant de pouvoir activer le contrôle, donc il n'est jamais activé. Un
cliquet gèle ce que le dépôt porte déjà, échoue quand ce nombre monte, et le
laisse descendre.

`/qmw:ratchet-audit` lit ce que ton projet énonce déjà et trie chaque règle en
trois tas : déjà couverte par un linter, mécanisable mais non appliquée avec le
compte qu'elle atteint aujourd'hui, et jugement qu'aucun contrôle ne doit
approximer. N'écrit rien. Le tas du milieu est presque toujours plus gros que
prévu.

`/qmw:ratchet-add <la règle>` construit le contrôle, gèle le compte du jour comme
référence, et le branche dans la CI.

### shakedown - jouer un vrai utilisateur avant les vrais utilisateurs

Une suite de tests n'exerce jamais qu'un monde propre et fabriqué. Les bugs qui
atteignent les utilisateurs sont surtout ceux qu'une suite en monde propre ne
peut structurellement pas voir : la deuxième fois qu'un geste unique est répété,
le compte à cent lignes au lieu de dix, la garde qui lit le mauvais élément d'une
liste.

`/qmw:shakedown` part d'un environnement réellement vide, avec des personas nés
d'une vraie inscription et de vrais clics, jusqu'à ce que chaque intention du
périmètre aboutisse. Des sous-agents exécutent ; un contrôleur séparé juge chaque
résultat **en praticien expert du métier du persona testé**, pas en visiteur
naïf. Chaque constat atterrit dans un registre vivant, tenu à jour écran par
écran.

Produits front uniquement, pilotés dans un navigateur par arbre d'accessibilité
et locators. La première exécution t'interroge et écrit les réponses dans
`.shakedown/` à la racine du projet, versionné comme n'importe quelle décision de
projet.

### Ajouter une skill ici

Un dépôt, un plugin, une release. Une nouvelle skill est un dossier sous
`skills/` dont le nom est ce que les gens taperont après `/qmw:`, un `SKILL.md`
dont le `name` du frontmatter correspond à ce dossier, et une mention dans ce
README. La CI vérifie les trois : une skill que personne ne peut invoquer, ou un
README qui invoque une skill inexistante, casse le build plutôt que
l'installation d'un inconnu.

### Licence

MIT, voir [LICENSE](LICENSE).
