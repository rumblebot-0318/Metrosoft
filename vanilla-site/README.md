# Metrosoft Vanilla Site

This folder provides a React-free single-scroll implementation.

## Run locally

```bash
cd vanilla-site
python3 -m http.server 4173
# open http://localhost:4173
```

(Any static server works, e.g. `npx http-server . -p 4173`.)

## Structure

- `index.html` — page shell and section anchors
- `style.css` — Lunit-inspired layout/hero/cards
- `main.js` — fetch + render logic in plain JavaScript
- `data/translations.json` — Korean/English content and nav labels

## Notes

- Locale selection is persisted in `localStorage` (`metrosoft-locale`).
- Content rendering is fully JSON-driven.
