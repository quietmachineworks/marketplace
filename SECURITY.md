# Security

## What this tool executes

A ratchet definition is a JavaScript module that this runner imports and calls.
Running one executes its `detect` functions with the privileges of whoever
started the process, in CI as much as locally.

Treat a definition from outside your project the way you would treat any
dependency that runs at build time: read it before adding it. The examples in
this repository are meant to be read and adapted, not fetched at run time.

The runner reads files and, for commit-surface rules, invokes `git log`. It
writes exactly one path, the baseline file declared by the definition.

## Reporting a vulnerability

Open a private security advisory through the repository's Security tab. Please
do not open a public issue for a vulnerability.

Expect an acknowledgement within a week. This is a small project maintained by
one person, so a fix may take longer than an acknowledgement.
