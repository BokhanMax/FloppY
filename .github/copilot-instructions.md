# Copilot Instructions for `floppyppua`

## Big Picture

- Vue 3 + Vite SPA for a Ukrainian software catalog with public pages and lightweight admin interface
- Stack: Vue 3, Vue Router, VueFire (Firebase/Firestore), TailwindCSS, v-lazy-image
- App entry: `src/main.js` → root layout `src/Floppy.vue` (HeaderComponent, router-view, FooterComponent)
- Routing: centralized in `src/router/index.js`; category pages use one reusable `Category.vue` component with different `cat` props
- Data source: Firebase Firestore collection `programs` (read in public pages, full CRUD in admin page)

## Project Structure

### Key Directories
- `src/pages/` — full-page views (ProgramPage, Manage, ContactPage, FAQPage, HomePage)
- `src/components/` — reusable components (Category, ProgramCard, HeaderComponent, FooterComponent, Logo, NavItem, Button, TextBlock)
- `src/router/` — routing config (index.js, programroutes.js for dynamic sitemap generation)
- `src/helpers/` — utilities (firebaseConfig.js, SharpIconsConvert.js)
- `public/icons/source/` — source PNG icons for conversion
- `public/icons/` — converted AVIF icons (generated at build time)
- `import/` — data import scripts and Firebase service account key

### Core Components
- `Category.vue` — reusable category list page (queries Firestore, renders ProgramCard grid)
- `ProgramCard.vue` — program display card with icon, name, description, version, download links
- `HeaderComponent.vue` + `FooterComponent.vue` — site layout shell
- `ProgramPage.vue` — dynamic program detail page (fetches by route param `:id`)
- `Manage.vue` — admin interface for program CRUD operations

## Data Flow & Firebase

### Firestore Schema (collection: `programs`)
- Required fields: `name`, `description`, `category`, `version`, `createdAt` (Timestamp)
- Download links: `link32`, `link64`, `linkcommon` (optional, string URLs)
- Update info: `linkupdate`, `textupdate` (optional)
- Metadata: `ispaid` (boolean), custom icon paths
- Category values: `internet`, `media`, `drivers`, `dev`, `files`, `system`

### Query Patterns
- Category list: `where('category', '==', cat).orderBy('name')` (alphabetical)
- Newest page: `orderBy('createdAt', 'desc')` (newest first)
- Program detail: `getDoc(doc(db, 'programs', id))`
- Admin: `getDocs()`, `addDoc()`, `updateDoc()`, `deleteDoc()`

### Firebase Config
- Primary config: `src/helpers/firebaseConfig.js` (exports `app`, `db`)
- Used by: `src/router/programroutes.js` for build-time sitemap generation
- **Important:** If Firebase credentials change, update `firebaseConfig.js` only (single source of truth)

## Routing & Pages

### Static Routes
- `/` — newest programs (Category component with `cat: 'newest'`)
- `/internet`, `/system`, `/drivers`, `/media`, `/files` — category pages
- `/development` — maps to category value `dev` (convention: route path ≠ category field)
- `/contact` — ContactPage.vue
- `/faq` — FAQPage.vue
- `/manage` — admin interface (password protected)
- `/program/:id` — dynamic program detail page

### Route Metadata
- All routes have `meta.title` for SEO (set in router `beforeEach` hook)
- ProgramPage additionally overwrites `document.title` after data loads with program name

### Homepage Note
- `HomePage.vue` exists but is currently disabled (commented out in router)
- Root path `/` currently shows newest programs category instead

## Build & Development

### Scripts (package.json)
- `npm run dev` — local development server (Vite HMR)
- `npm run build` — production build (runs icon conversion + Vite build)
  - Step 1: `node src/helpers/SharpIconsConvert.js` (PNG → AVIF conversion)
  - Step 2: Vite build + sitemap generation
- `npm run buildhtml` — Vite build only (skip icon conversion)
- `npm run buildimages` — icon conversion only (Sharp PNG → AVIF)
- `npm run preview` — preview production build locally
- `npm run format` — format `src/` with Prettier
- `npm run import` — import data from CSV/lines (uses scripts in `import/`)

### Build Process Details
1. **Icon conversion** (`SharpIconsConvert.js`):
   - Reads `public/icons/source/*.png`
   - Generates 3 AVIF variants per icon: original size, 96w, 72w
   - Outputs to `public/icons/` (e.g., `Icon.avif`, `Icon-96w.avif`, `Icon-72w.avif`)
   - Uses Sharp library for high-quality AVIF encoding

2. **Vite build**:
   - Generates sitemap from static routes + dynamic program routes (fetched from Firestore at build time)
   - Assets hashed for cache busting

3. **Sitemap generation**:
   - Static routes: hardcoded list in `vite.config.js` (internet, media, drivers, dev, files, system, faq, contact)
   - Dynamic routes: fetched from Firestore `programs` collection via `fetchProgramRoutes()` in `programroutes.js`
   - Combined and written to `sitemap.xml` by vite-plugin-sitemap

## Styling & UI

- **Framework:** TailwindCSS (via @tailwindcss/vite plugin)
- **Responsive:** mobile-first approach with xs/sm/md/lg breakpoints
- **Colors:** primary bg `#FCFCFD`, accent colors defined in Tailwind config
- **Images:** v-lazy-image for lazy loading program icons and images
- **Typography:** semantic HTML with Tailwind utility classes

## Analytics & Tracking

- **Google Analytics:** initialized via `vue-gtag` plugin in `src/main.js` (tag ID: G-LVRGKFB5Y6)
- **Google Tag Manager:** initialized via `@gtm-support/vue-gtm` (container ID: GTM-TFSLLQWC)
- Both integrated with Vue Router for automatic page view tracking

## Admin Interface

### Authentication Flow
- Admin page: `/manage`
- Password prompt on load (SHA-256 hash comparison)
- Hash source: `import.meta.env.VITE_MANAGE_PWD` (from `.env` file)
- Session storage key: `manage_auth` (persists until browser tab closed)
- No backend auth system — purely client-side verification

### Admin Capabilities
- Add new programs (all fields)
- Edit existing programs (inline or modal)
- Delete programs (with confirmation)
- Direct Firestore write operations (no API layer)

## Project Conventions & Patterns

### Category Mapping
- **Critical convention:** URL path ≠ Firestore field for development category
  - Router path: `/development`
  - Category field value: `dev`
  - Affects: `src/router/index.js`, `Category.vue`, `Manage.vue`
- All other categories match exactly: `/internet` → `internet`, `/media` → `media`, etc.

### Icon Path Handling
- **Inconsistent by design:** different components use different path formats
  - Some use relative: `icons/IconName.avif`
  - Some use absolute: `/icons/IconName.avif`
- **Fallback behavior:** multiple fallback directories checked
- **Do not "fix" globally** — preserve existing behavior unless intentionally refactoring all usages together

### Timestamp Handling
- `createdAt` is Firestore `Timestamp` object (not Date or string)
- Used for sorting in "newest" category (`orderBy('createdAt', 'desc')`)
- Convert to Date for display: `createdAt.toDate()`

### SEO Strategy
- Meta titles set globally in router `beforeEach` hook from route `meta.title`
- Program detail pages override `document.title` after fetching program data
- Sitemap includes all static + dynamic routes, updated at build time
- robots.txt and site.webmanifest in `public/`

## Sensitive Points & Gotchas

1. **Firebase config location:** `src/helpers/firebaseConfig.js` (moved from root `src/` in prior versions)
2. **Icon script location:** `src/helpers/SharpIconsConvert.js` (moved from root `src/`)
3. **Static route list:** maintained manually in `vite.config.js` (must update when adding categories)
4. **Sitemap freshness:** requires `npm run build` to fetch latest programs from Firestore
5. **404 fallback / SPA routing:** Netlify uses `public/_redirects` with rule `/* /index.html 200` — do not remove or modify this file, all client-side routes depend on it
6. **Admin password:** stored as plain hash in `.env` file — not cryptographically secure, suitable only for light protection

## Development Workflow

### Adding a New Category
1. Add route in `src/router/index.js` with `cat` prop + meta title
2. Add category value to static routes list in `vite.config.js` (if path differs from field value)
3. Update `Manage.vue` category dropdown options
4. Add programs with matching `category` field value in Firestore

### Adding New Firestore Fields
1. Update `ProgramCard.vue` to display field (if applicable)
2. Update `ProgramPage.vue` to display field (if applicable)
3. Update `Manage.vue` form to edit field
4. Ensure backward compatibility with existing documents (handle missing fields gracefully)

### Changing Routes
1. Update `src/router/index.js` route definitions
2. Update static routes list in `vite.config.js` for sitemap
3. `public/_redirects` does not need changes (wildcard rule covers all routes)
4. Test navigation from all pages
5. Run full build + preview to test production behavior

## Testing & Validation

- **No automated tests** — all validation is manual
- **Dev testing:** `npm run dev` + browser testing
- **Production testing:** `npm run build && npm run preview`
- **Critical paths to test:**
  - Category filtering and sorting
  - Program detail page load
  - Admin CRUD operations
  - 404 handling and SPA routing
  - Icon loading and lazy loading
  - Mobile responsive layout

## Deployment

- **Platform:** Netlify
- **SPA routing:** `public/_redirects` contains `/* /index.html 200` — required for all routes to work on direct URL access or page refresh
- **Environment variables:** set in Netlify dashboard (e.g. `VITE_MANAGE_PWD`); also stored locally in `.env` for development
- **Build command:** `npm run build`
- **Publish directory:** `dist`

## External Dependencies & Limits

- Firebase Firestore free tier limits (read/write quotas)
- Netlify free tier bandwidth/build limits
- AVIF browser support (fallback icons may be needed for older browsers)
- Sharp library requires Node.js for build-time image processing

## Future Considerations

- Homepage implementation (currently disabled)
- Backend API layer for admin (replace client-side Firebase calls)
- Automated testing setup
- Icon fallback strategy for non-AVIF browsers
- Search functionality across programs
- User authentication beyond simple password hash
