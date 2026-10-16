# PQC Practice

A local practice-exam app for people learning post-quantum cryptography (PQC).
Use it to enrich your knowledge and/or check readiness with a shuffled exam and domain drills.

Built by [Ophir Oren](https://www.linkedin.com/in/ophiro/).

No Node.js. No npm. Uses built-in Windows PowerShell for a tiny local server.

## Files

- `pqc-questions.md` — 526 practice questions (Q001–Q526)
- `domain-assign.js` — learning-domain assignment for every question
- `pqc-answers.md` — answer keys + explanations + glossaries
- `bank-data.js` — embedded copy of those banks (for `file://` / offline)
- `build-bank.ps1` — regenerates `bank-data.js` from the Markdown files
- `index.html` / `app.js` / `styles.css` — the dashboard
- `server.ps1` — local static file server (PowerShell)

## Open

**On this PC:** double-click `open.bat`. It starts the local server on port **8765** if needed, then opens [http://localhost:8765](http://localhost:8765) in your default browser. Close the minimized "PQC-8765" PowerShell window to stop the server.

**As a normal web page:** open `index.html` directly, or publish this folder on GitHub Pages. The page is static HTML, CSS, and JavaScript. When the Markdown files cannot be fetched (`file://`, or if fetch fails), the app uses the embedded bank in `bank-data.js`. A `.nojekyll` file is included so GitHub Pages serves the Markdown banks as plain files.

## Refresh the bank after editing Markdown

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File .\build-bank.ps1
```

Then reopen the page. On http(s) (local server or GitHub Pages), the app prefers live `pqc-*.md` via fetch and falls back to `bank-data.js` only if fetch fails.

## Use

1. Enter your name (letters/spaces only)
2. Choose a question count: 10, 25, 50, 100, or Other
3. Choose Exam or Practice
4. Check the domains to include (all eight start checked)
5. Start

The eight learning domains are Quantum Computing Foundations, Quantum Threats & Risk, Quantum Key Distribution, PQC Algorithms & Mechanisms, Standards Compliance & Roadmaps, PQC Migration & Program Management, Protocols Implementation & Testing, and Cybersecurity Fundamentals.

Every exam is a shuffle. It gives every checked domain an equal share, then picks those questions at random from all 526 (Q001–Q526). Each question's domain is assigned in `domain-assign.js`. If no domain is checked, Start stays disabled.

Question banks are loaded only from app files in this folder (`pqc-*.md` and/or `bank-data.js`). There is no in-app file upload.
