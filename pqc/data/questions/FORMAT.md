# Question bank format

Primary bank for this app:

- `pqc-questions.md`
- `pqc-answers.md`
- `bank-data.js` — generated embed for `file://` (run `build-bank.ps1` after Markdown edits)

## Questions (`pqc-questions.md`)

Each `## ` section ends at the next `## ` heading. Two section types are recognized:

```md
## Mock Exam A

1. **Q001 · Applied**: Stem text here?

   - **A.** Option A
   - **B.** Option B
   - **C.** Option C
   - **D.** Option D

## Module E: Enterprise Scenarios and Migration Priorities

1. **Q301 · Applied**: Stem text here?
   ...
```

Mocks: A–F. Modules: E (Enterprise), T (Protocols), C (Cyber), G (Regulations) — see `MODULES` in `app.js`.
Question IDs are three digits (`Q001`–`Q999`).

## Answers (`pqc-answers.md`)

Compact key tables (one or more ID/answer pairs per row) plus explanations:

```md
| Q001 | D |
| Q301 | B | Q318 | A | Q335 | C |

1. **Q001: D** · M, Quantum-Safe Migration Strategy · Applied

   Correct answer: Explanation text...

1. **Q301: B** · Program launch and governance · Applied

   Correct answer: Explanation text...
```

Mock explanations carry a domain code: F, Q, R, S, M, P.
Module explanations carry a topic label instead; their domain comes from `MODULE_DOMAIN_MAP` in `app.js`
(module default domain + per-question overrides). When adding module questions, add any non-default IDs there.

## Glossaries (`pqc-answers.md`)

Acronyms shown under each question come from two tables — `## Working Glossary` and
`## Additional Acronyms and Technical Terms` — plus a built-in fallback list in `app.js`.
Combined rows such as `PKI / CA | Public Key Infrastructure / Certificate Authority (...)` are split into one entry per term.
