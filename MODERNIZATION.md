# Metrosoft Modernization Report

## 1. Project Composition
- **Frontend**: React SPA located under `src/`. We now run React 18 via `createRoot`, React Router v6 for routing, Redux for minimal state (a single reducer loads JSON assets), and SCSS for styles. Build tooling still relies on the legacy `react-scripts`/custom scripts folder derived from `create-react-app` (Webpack 3) so CSS and asset loading still follow that pipeline.
- **Backend**: A lightweight Express server in `server/` exposes static assets (`build/` directory) and a single `/get` endpoint that proxies JSON files from `server/database`. This is primarily used to serve the static site plus manual read for e.g., content data.
- **Assets**: JSON documents in `src/database` feed the introduction/timeline sections. Images and SVGs sit under `src/Image`. Styles are scattered across SCSS files per component.
- **UX flow**: `App` renders `Header`, the router `Routes`, and fixed `Footer`/`Sitemap`. Each section (`Introduce`, `Business`, `Product`, `Customer`) pulls content from local JSON and presents it via reusable subcomponents.

## 2. Service Layer & Data Flow
1. **Static build** (`npm run build`) compiles React + SCSS → `build/`.
2. **Express server** (`server/app.js`) serves `build/index.html` for any route and exposes `/get?load=foo&dir=bar` to read from the JSON files under `server/database`. This is not a full API server, but it isolates file reading logic via `fsManager.readFile`.
3. **Client data loading** currently relies on imported JSON modules (no dynamic fetch), so the `/get` endpoint is unused in the front-end but remains available for future dynamic loading or admin tooling.
4. **Redux**: `src/reducer/LOADJSON` exposes a single action (`TIMELINE`) that selects which JSON data to show. More slices can be added as the UI evolves.

## 3. Component Design Review
- **Header**: Now a functional layout with flexbox, responsive breakpoint at 768px, centralized nav list, and semantic `<Link>` usage. The `branding` section keeps the logo centered while nav flexes.
- **Home & Pages**: Each content page (Introduce, Business, Product, Customer) should be audited for responsive spacing; they currently rely on floated layouts (e.g., `Business` splits columns with absolute widths). Consider rewriting those sections as flex/grid containers with relative units.
- **Styling**: Legacy SCSS files import from `app.scss`. Refactoring benefit: common colors live in `app.scss`, but components still declare inline styles. The modernization path is to extract shared tokens into CSS variables or SCSS maps and apply them via class names rather than inline object styles.
- **Shared UI**: Buttons (`ui teal basic button`) currently depend on Semantic UI (two classes). Evaluate replacing with internal button components to reduce dependency weight, or wrap them with consistent design tokens.

## 4. Responsive Enhancements Implemented
- Header now uses flex layout with `.headerInner` to maintain spacing on wide screens while wrapping elegantly on <=768px.
- `app.scss` container width capping ensures the layout stays readable on large monitors, while padding keeps mobile margins consistent.
- Media query reduces base font size on small screens for better text flow.

## 5. Recommended Next Steps
1. **Functional conversion**: Continue migrating every class-based component into function components that rely on hooks (`useEffect`, `useState`) before introducing additional logic. Assets like `Home` use class components; convert them iteratively while ensuring they still import data from `database/` JSON files.
2. **Responsive grid system**: Audit each ContentPage (Introduce, Business, Product, Customer) and rebuild their top-level sections using CSS Grid or flex columns, using relative widths (`minmax`, `%`) instead of fixed pixel/float combos. Add breakpoint modifiers for 1024px and 600px.
3. **Design system**: Create a SCSS partial (e.g., `_tokens.scss`) with colors, spacing, and typography. Replace repeated inline styles/semantic utility classes with reusable mixins or CSS custom properties.
4. **Testing**: Once Python 2.x compatibility is available or `node-sass` replaced with `sass`, run `npm run build` locally and `npm run test` to verify the modernized bundle.
5. **Documentation**: Keep this `MODERNIZATION.md` updated as more components switch over, and add short per-page design notes for onboarding future contributors.

## 6. Recent Work
- Converted Home, Business, Product, Introduce, Customer, and TitleList to modern functional components with React hooks where needed.
- Added reusable content page layout SCSS plus responsive title list, directions, and customer page styles so sections wrap gracefully on tablets and phones.
- Documented responsive grid populations (page-grid, content-page) and updated Heading layout to flex earlier.

## 7. Sass migration and build status
- Removed the old `node-sass` dependency in favor of Dart Sass (`sass`) and upgraded `sass-loader` so this repo no longer needs Python 2 for SCSS compilation.
- Build still fails inside `UglifyJsPlugin` because React Router v6 ships modern syntax that the legacy optimizer cannot parse; switching to a Terser-based minifier or disabling Uglify is the next step.

## 8. Build modernization and status
- Swapped the old `UglifyJsPlugin` for `babel-minify-webpack-plugin` so the production build can handle React Router v6 without hitting the `Failed to minify` error.
- `npm run build` now succeeds in this sandbox, although ESLint still flags `dir` inside `Customer` as unused and Dart Sass logs lots of deprecation warnings from legacy `@import` rules (which we plan to migrate to `@use`).
- The build artifacts are ready under `build/`, and the script now finishes with the usual `serve -s build` reminder.

## 9. Docs & CI
- Added a custom README intro with the Stage 4 summary plus quick-start commands (lint/test/build) so contributors know how to validate the modern stack.
- Introduced a `lint` npm script that targets `eslint src` and added a GitHub Actions workflow (`.github/workflows/ci.yml`) that runs `lint`, `test`, and `build` under Node 18.
- Local testing for Stage 4: `npm run lint`, `CI=true npm run test -- --runInBand --watchAll=false` (Jest reports "No tests found"), `npm run build` (passes with Dart Sass deprecation warnings).

## 10. Vulnerability summary
- `npm audit --json` reports 231 issues (11 low, 84 moderate, 71 high, 65 critical). The worst offenders come from CRA 3's dependency tree (e.g., `yargs-parser` via `webpack-dev-server` and `jest`), so fixing them requires a full bundler modernization.
- Documented the findings in `VULNERABILITY.md` and note that they remain until a Webpack/react-scripts rewrite happens.
- Future work: replace the legacy tooling (webpack 3 + `babel-minify`) with Webpack 5/CRAv5 or Vite so modern packages can be installed without conflicts.

## 11. Design system & components plan
- Current UI relies on Semantic UI classes, multiple carousel libraries, and shared SCSS helpers like `include-media` and `open-color`.
- Next steps: create SCSS partials (`_tokens`, `_layout`, `_components`) centralizing colors, spacing, and typography, and convert repeated sections (TitleList, PointDiv, Carousel, FeatureCard) into prop-driven React components.
- Add documentation (README + `DESIGN_SYSTEM.md` once created) explaining which libraries remain and why, so future contributors can swap in design tokens without touching multiple files.
