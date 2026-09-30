---
kind: frontend_style
name: 'Learning Repo Frontend Style: Inline & BEM-ish CSS for Static Page Replicas'
category: frontend_style
scope:
    - '**'
source_files:
    - Week-1/VS-Code/style.css
    - Week-1/VS-Code/Index.html
    - Warmup-Video/Zerodha.html
---

## What system/approach is used

This repository is a learning portfolio, not a production frontend. There is no CSS framework, preprocessor, design-token system, component library, or build tooling. Styling is done with plain CSS and inline `style="..."` attributes on HTML elements.

Two distinct approaches coexist:
- **Week-1/VS-Code/** — a small external stylesheet (`style.css`) linked from `Index.html`, using class names that loosely follow BEM-style naming (e.g. `.Navbar`, `.left`, `.logo`, `.links`, `.input-button`).
- **Warmup-Video/Zerodha.html** — purely inline styles directly on elements, with no separate stylesheet.

Typography comes from Google Fonts via `<link>` in the head; the only font used is **Montserrat** (loaded with `font-optical-sizing: auto`, weight 300).

## Key files and packages

- `Week-1/VS-Code/style.css` — the only standalone stylesheet in the repo (83 lines).
- `Week-1/VS-Code/Index.html` — references `style.css` and the Montserrat Google Font.
- `Warmup-Video/Zerodha.html` — inline-styled replica page (no stylesheet).
- `Warmup-Video/image.jpg`, `Warmup-Video/page.jpg` — static assets referenced by Zerodha.html.

No package.json, no node_modules, no Tailwind/Sass/Less config, no CSS-in-JS.

## Architecture and conventions

Observed patterns across the two styled pages:

- **Layout via Flexbox**: Both pages use `display: flex` with `justify-content: space-between` and `align-items: center` to build horizontal nav bars.
- **Class-based selectors** (external stylesheet): `.Navbar`, `.left`, `.logo`, `.links`, `.links a`, `.input-button`, `.Download`, `.Download:hover`.
- **Inline styles** (Zerodha.html): all visual properties are written directly on elements (`padding-left/right`, `box-shadow`, `color`, `background-color`, `cursor`).
- **Color palette**: dark theme in VS-Code page (`rgba(0, 15, 64, 0.867)` navbar background, black body), light grey text (`rgb(167, 167, 167)`, `grey`), white accents. Zerodha page uses `grey` text, blue CTA button, white-on-blue button.
- **Typography**: Montserrat loaded from Google Fonts; weights 100–900 available but only 300 is applied.
- **Hover effects**: `.Download:hover` adds `border-color: grey` and a white box-shadow; Zerodha links use `cursor: pointer`.
- **Spacing**: ad-hoc pixel values (`padding: 10px 20px`, `gap: 8px`, `gap: 5px`, `padding-right: 20px`). No spacing scale or tokens.

## Conventions and constraints

- **Descriptive convention**: External CSS uses descriptive class names rather than utility classes; there is no shared design token file, CSS variables, or theme configuration.
- **Descriptive convention**: Inline styles are used for quick replicas (Zerodha.html); the more structured example lives in `Week-1/VS-Code/` where styles are separated into `style.css`.
- **Constraint (enforced by absence)**: There is no linting, minification, or preprocessing step configured — no `.stylelintrc`, `postcss.config.js`, `tailwind.config.*`, or similar files exist in the repo.
- **Constraint (enforced by import)**: The only external dependency is the Montserrat font via Google Fonts CDN; no other third-party CSS libraries are referenced.