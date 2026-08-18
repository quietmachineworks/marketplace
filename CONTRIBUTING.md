# Contributing

## What belongs here

This project ships a mechanism, not a set of rules. Detectors encoding one
team's conventions belong in that team's repository.

Welcome:

- a bug in the runner, ideally with a failing case added to `test/run.mjs`
- a gap in the format, described by the rule you could not express
- clearer wording in the skill or the references, especially where a step reads
  as optional when it is not

Please open an issue before a large change, so the design discussion happens
before the work.

## Running the tests

```bash
node test/run.mjs
```

Tests build throwaway repositories in a temp directory. They need `git` and
nothing else, no network and no install step.

Every invariant in `references/anatomy.md` has a case. A change to runner
behaviour needs a case that fails before it and passes after.

## Conventions

Comments explain a constraint a reader would otherwise violate, and nothing
else. If a comment states what the code is, rename instead.

Commit subjects follow `type(scope): description`.
