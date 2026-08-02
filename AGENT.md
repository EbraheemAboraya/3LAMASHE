# AGENT.md

Guidance for AI coding agents working in this repository.

## Project overview

"على الماشي" (`ala-elmashi-menu`) — a single-page digital café menu website built with React + Vite. Arabic-language (RTL), no backend, no database, no ordering/checkout flow (WhatsApp ordering was removed — see git history). Pure static content site: browse the menu, that's it.

## Stack

- React 18 (`react-dom` client render, `React.StrictMode`)
- Vite 5 (`@vitejs/plugin-react`) — no extra Vite config beyond the React plugin
- Plain CSS per component (no Tailwind, no CSS-in-JS, no UI framework)
- No router, no state management library, no test framework configured

## Commands

```
npm run dev       # start Vite dev server
npm run build     # production build to dist/
npm run preview   # preview the production build
```

There is no lint or test script configured in package.json.

## Architecture

Everything renders from a single data source: **`src/data/products.js`**. This is the only file meant to be edited to change site content (menu items, prices, store info). It exports:

- `STORE_INFO` — name, tagline, address, phone, opening hours (used in `Header` and `Footer`)
- `categories` — array of menu categories, each with `id`, `label`, `icon`, `subtitle`, and a `products` array. Each product has `id` (must be unique across the whole file), `name`, `description`, `price`, optional `featured: true`, `image`, `alt`.

Component tree (`src/App.jsx`):

```
App
├─ Header        (logo + nav, from STORE_INFO)
├─ Hero          (banner, id="top")
├─ Categories    (quick-jump pills, one per category)
├─ ProductsSection  (renders every category as a full section + product grid)
├─ Promotions    (auto-collects all products with featured: true into "الأكثر طلباً")
└─ Footer        (contact info + quick links, from STORE_INFO)
```

Each component has a co-located CSS file (e.g. `Header.jsx` + `Header.css`). Category anchors (`#milkshakes`, `#special`, `#bakery`, `#footer`) drive in-page navigation — if a category `id` changes, update the hardcoded links in `Header.jsx` and `Footer.jsx` too.

`ProductCard.jsx` handles broken images: `onError` swaps the `src` for a `placehold.co` placeholder generated from the product name.

## Images

- Milkshake product images are local files under `public/images/MILKSAHKE/` (note: intentional/legacy misspelling of "MILKSHAKE" in the folder name — keep it consistent with `image` paths in `products.js` unless doing a deliberate rename across both).
- "Special flavors" (`special` category) mostly use hotlinked Pexels URLs; a couple use `placehold.co` placeholders marked with a `TODO` comment in `products.js` pending a real photo.
- Bakery images are currently all `placehold.co` placeholders.
- Reference images live under `/images/...` (served from `public/`), matching Vite's static asset convention.

## Conventions / notes for edits

- Comments and section separators in `products.js` and JSX are written in Arabic and describe *why*/*how to edit*, not *what* — keep that style if adding similar guidance comments.
- The site is RTL Arabic content; keep new UI text in Arabic unless told otherwise.
- Product `id` values must stay unique across the entire `categories` array (not just within a category).
- `dist/` is a build output directory — don't hand-edit it; regenerate via `npm run build`.
