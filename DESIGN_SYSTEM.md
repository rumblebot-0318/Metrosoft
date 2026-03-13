# Design System Notes

## Tokens & Layout
- Define color/typography/spacing tokens in `src/styles/_tokens.scss` and reuse via `@use` across header/content/customer styles. This helps keep palettes consistent with the brand (teal/gray). Use `clamp()`/`min()` for responsive type sizing.
- Centralize layout mixins (`Section`, `CardGrid`, `TitleList`) in `src/styles/_layout.scss` and drop `include-media` dependency over time.

## Component Catalog (proposed)
1. `TitleList` – a responsive set of anchor pills used at the top of each page.
2. `PointDiv` / `FeatureCard` – consistent heading + copy cards for intros.
3. `CustomerTable`, `Remote`, `Carousel` – wrap Semantic UI/carousel libraries with simple props so the underlying implementation can change later.
4. `HeroSection` – combination of slider + CTA for the homepage, aligning with new tokens.

## Migration steps
1. Create `src/styles/_tokens.scss`, `_layout.scss`, `_components.scss`, then switch `app.scss` to `@use`. Replace `@import` statements in component SCSS files.  
2. Replace inline Semantic UI class usage with small wrapper components (e.g., `<Button variant="primary">`).  
3. Document all remaining third-party UI libs in this file and highlight which ones can be removed once Layout refactor is complete.
