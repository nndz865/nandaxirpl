<!-- Copilot / AI agent instructions for the repository -->
# Repository Guide for AI Coding Agents

This repository is a collection of small web and PHP learning examples (HTML/CSS/JS/PHP). Use this guide to become productive quickly and to make safe, low-risk changes.

1) Project overview
- Purpose: learning exercises and small demos (no single app). Files live in many topic folders (e.g. `javascript/`, `modul*`, `hello_word/`, `biodata/`).
- Languages: plain HTML, CSS, client-side JavaScript (non-module, global scripts), and simple PHP pages.

2) Big-picture architecture
- Not a modular app — it's a collection of independent examples. Expect one-off scripts per folder that are intended to be opened directly in a browser or served from a simple PHP/static server.
- Data flow is usually DOM → global JS functions → DOM. Example: `javascript/ujian/script.js` uses global arrays (`barang`, `keranjang`) and `window.onload` to wire UI.
- PHP files are standalone templates (example: `biodata/biodata.php`). They assume being executed by a PHP runtime (no framework).

3) How to run & test locally
- Static HTML: open the `.html` file in a browser, or run a tiny static server from the repository root. Example using Python (works on Windows PowerShell):
  - `python -m http.server 8000`
- PHP pages: run a local PHP server from the folder containing the `.php` files, e.g. in PowerShell:
  - `cd d:\GitHub\nandaxirpl\biodata; php -S localhost:8000`
- Recommended for development: use the VS Code Live Server extension or a simple static/PHP server to preview changes.

4) Patterns and conventions (project-specific)
- Global scripts: JS files often attach behavior directly to `window.onload` and use globals. When editing a JS file (e.g. `javascript/ujian/script.js`), update the corresponding HTML file in the same folder — these files are tightly coupled.
- Minimal toolchain: there is no build system, transpiler, or package.json. Avoid introducing complex tooling without coordinating first.
- Language: many comments and strings are in Indonesian — preserve or mirror language when adding UI text.
- PHP style: inline variables echoed directly in templates (example: `biodata/biodata.php`). Treat these PHP pages as templates, not MVC components.

5) Integration points and external dependencies
- There are no declared external package dependencies. Any additions that require packages (npm, composer) must include the package manifest and a short README describing how to install and run.

6) Safe change guidelines for AI agents
- Make minimal, focused edits. These are learning examples — prefer small fixes (typo, bug, small refactor) over large restructures.
- When changing function or global names, update all coupled files in the same directory (HTML + JS) in the same change.
- Run local preview after changes. For PHP edits, run `php -S` as above and verify output in browser.
- If a file appears to contain an obvious bug (for example, `hello_word/forloop.php` indexes an array out of bounds), propose a fix but include a note in the PR describing the assumption and rationale.

7) Examples to reference in PRs
- `javascript/ujian/script.js` — demonstrates global arrays, DOM injection, currency formatting with `toLocaleString`, and `window.onload` initialization.
- `biodata/biodata.php` — simple PHP template with inline variables and `echo` statements.
- `hello_word/forloop.php` — example of a logic bug (indexing mismatch); useful for showing how to write a small unit or manual test case when applicable.

8) PR/commit guidance
- Keep commits small and topical. Link changes to the specific example folder in the commit message (e.g., `javascript/ujian: fix stok check and dropdown reload`).
- Avoid adding global tooling without explicit owner approval. If adding a linter or formatter, include setup steps and keep changes isolated.

9) Things NOT to do
- Do not perform sweeping renames or large architectural refactors across many example folders — these are independent teaching artifacts.
- Do not add production-only frameworks or complex CI without an explicit requirement.

10) When in doubt
- Ask for clarification in a PR description. If a change could alter multiple example behaviors, request reviewer confirmation before merging.

If anything in this guide is unclear or you want more examples (tests, local run scripts, or a lightweight README per folder), tell me where to focus and I will update this file.
