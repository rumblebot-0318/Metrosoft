# Metrosoft Website (Modernized SPA)

This repository contains the modernized, high-performance, single-page application (SPA) website for **Metrosoft Co., Ltd. (주식회사 메트로소프트)**. 

The project has been migrated from a legacy Webpack + React codebase to a fast, modernized Vanilla JS SPA powered by **Vite** and **Vanilla CSS**.

---

## Technical Stack & Architecture

- **Build Tool:** [Vite](https://vite.dev/) (fast hot-module replacement and instant builds)
- **Core Logic:** Vanilla JavaScript (`app.js`)
- **Routing:** Custom client-side Hash Router matching subpages dynamically
- **Styling:** Premium modern CSS (`style.css`) with CSS custom variables, responsive grid systems, and glassmorphism designs
- **Internationalization (i18n):** Multilingual support (Korean/English) driven by lightweight JSON locale files (`/public/locales/*.json`) and dynamic fallback logic
- **Font & Icon Systems:** Google Fonts (Outfit, Inter) & FontAwesome icons

---

## Folder Structure

```
Metrosoft/
├── index.html            # Main HTML entry point
├── app.js                # Core JS routing and view generation logic
├── style.css             # Main stylesheet (Premium design system)
├── data.js               # Legacy database references and client lists
├── package.json          # Node dependencies & npm scripts
├── vite.config.js        # Vite configuration (defines build output directories)
├── public/               # Static assets
│   ├── Images/           # Visual resources, screenshots, and diagrams
│   └── locales/          # Multilingual JSON translation database
│       ├── ko.json       # Korean translation catalog
│       └── en.json       # English translation catalog
└── src/
    └── database/         # Local structured data files (EMR, OCS, CRM, etc.)
```

---

## Key Scripts & Commands

In the project directory, you can run the following npm commands:

### `npm run dev`
Launches the local Vite development server.
- Default local URL: http://localhost:5173
- Changes made to files will immediately refresh the browser via hot module reloading.

### `npm run deploy`
Compiles and bundles the application for production.
- Outputs clean, minified static files into the **`build/`** folder.
- Ready for deployment to any static hosting provider (e.g., AWS S3, Netlify, Vercel, GitHub Pages).

### `npm run preview`
Previews the compiled production bundle locally to verify correctness before actual hosting.

---

## Internationalization & Database Overrides

The application supports real-time language switching without page reloads.
- Translation mappings are located in `/public/locales/ko.json` and `/public/locales/en.json`.
- Inside `en.json`, the `db` namespace contains structural translations that override original database JSONs (`src/database/`) when the locale is set to English.
- Use `getDbData(key, fallbackData)` inside `app.js` to ensure data properties map correctly across languages.
