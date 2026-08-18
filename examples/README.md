# Examples

These are real definitions taken from a working codebase. They are here to show the format, not to be installed.

**They encode one team's conventions.** Banning em dashes, requiring English comments, forbidding ticket codes in comments: these are that team's choices, not defaults anyone should inherit. Copying them into your project would import someone else's taste as if it were a standard.

Your ratchets come from your own rules. The skill reads what your project has already written down in `CLAUDE.md`, `AGENTS.md`, `.claude/rules/` or a style guide, and builds checks for the ones that can be mechanized.

What is worth taking from these files is the shape:

- **`mock-call-assertions.mjs`**, a single rule, and a `why` that names what broke rather than restating the rule.
- **`comment-norms.mjs`**, several rules in one definition, mixing frozen rules with a gate, a per-rule file filter, escapes that judge the surrounding line, and a rule that runs over commit messages with a start date.

Read them, then let the skill write yours.
