# Copilot Instructions for `floppyppua`

## Big Picture

- This is a Vue 3 + Vite SPA for a Ukrainian software catalog with public pages and a lightweight admin page.
- App entry is `src/main.js` -> root layout is `src/Floppy.vue` (header, `router-view`, footer).
- Routing is centralized in `src/router/index.js`; category pages are one reusable component (`src/components/Category.vue`) with different `cat` props.
- Data source is Firebase Firestore collection `programs` (read in public pages, CRUD in admin page).
- Deployment target is static hosting from `docs/` (GitHub Pages style SPA fallback + sitemap generation in `vite.config.js`).

## Core Data Flow

- Category list page: `Category.vue` queries Firestore by `category` + `orderBy('name')`, or `orderBy('createdAt', 'desc')` for `newest`.
- Card rendering: `ProgramCard.vue` expects Firestore fields like `name`, `description`, `version`, `createdAt`, `link32/link64/linkcommon`, `linkupdate/textupdate`, `ispaid`.
- Program detail page: `src/pages/ProgramPage.vue` fetches one document by route param `:id`.
- Admin UI: `src/pages/Manage.vue` performs add/update/delete against the same `programs` collection.

## Build & Dev Workflows

- Install deps: `npm install`
- Local dev server: `npm run dev`
- Production build: `npm run build`
  - Runs `src/SharpIconsConvert.js` first (converts `public/icons/source/*.png` -> AVIF variants in `public/icons/`).
  - Then builds Vite output to `docs/` and generates sitemap + `docs/404.html` SPA redirect.
- Preview build: `npm run preview`
- Formatting used in repo: `npm run format` (Prettier on `src/`).

## Project-Specific Conventions

- Keep category mapping consistent across files:
  - Router path uses `/development` but category value is `dev` (`src/router/index.js`, `Category.vue`, `Manage.vue`).
- `createdAt` is a Firestore `Timestamp` and is used for sorting/newest logic.
- SEO title behavior:
  - Global meta title is set in router `beforeEach`.
  - Program page additionally overwrites `document.title` after data load.
- Analytics is initialized in `src/main.js` using both `vue-gtag` and GTM plugin.

## Integrations & Sensitive Points

- Firebase config is duplicated in `src/firebaseConfig.js` and `src/router/programroutes.js`; if project credentials/init change, update both.
- Admin login in `Manage.vue` checks SHA-256 hash from `import.meta.env.VITE_MANAGE_PWD` and stores session flag in `sessionStorage` key `manage_auth`.
- Build-time dynamic sitemap routes come from Firestore (`fetchProgramRoutes()` in `src/router/programroutes.js`).
- Icon path usage differs by component (`icons/...` vs `/icons/...` and fallback folders). Preserve existing behavior unless intentionally refactoring both list/detail pages.

## When Editing

- Prefer extending existing reusable flow (`Category.vue` + `ProgramCard.vue`) instead of creating per-category pages.
- For new Firestore fields, update both public renderers (`ProgramCard.vue`, `ProgramPage.vue`) and admin form (`Manage.vue`) together.
- If changing routes, also verify sitemap static route list in `vite.config.js` and 404 SPA fallback behavior.
- There are no discovered automated tests in this repo; validate changes by running `npm run dev` and `npm run build`.
