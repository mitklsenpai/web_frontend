# Architecture

## Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| UI Framework | React | 19 |
| Build Tool | Vite | 8 |
| Component Library | MUI (Material UI) | 9 |
| Routing | React Router DOM | 7 |
| HTTP Client | Axios | 1.18 |
| Linting | oxlint (NOT ESLint) | 1.71 |
| React Compiler | babel-plugin-react-compiler | enabled via @rolldown/plugin-babel |

No TypeScript. No test runner configured. No formatter configured.

## Project Structure

```
src/
  main.jsx                  Entry point — ConfigProvider → App
  App.jsx                   ThemeCustomization → RouterProvider
  config.js                 App-level config (font, border radius, theme mode)
  routes/
    index.jsx               Central router — createBrowserRouter, imports from config.js
    config.js               Route registry — imports all feature routes, exports appRoutes
    nav.js                  getNavItems() — extracts nav items from route handles
  layouts/                  App shell (AdminLayout, Sidebar, Header, etc.)
  features/                 Feature modules (self-contained per feature)
  components/               Shared UI components (common/)
  hooks/                    Shared hooks (useConfig, useLocalStorage, useFetch)
  contexts/                 React contexts (ConfigContext)
  services/                 Shared API client (Axios instance)
  themes/                   MUI theme system (palette, typography, overrides)
  utils/                    Utility functions (colorUtils)
```

## Routing

Central router at `src/routes/index.jsx` uses `createBrowserRouter`. All routes are children of `AdminLayout`. Feature routes are registered in `src/routes/config.js`:

```js
// src/routes/config.js
import { dashboardRoutes } from "@/features/dashboard";
import { userRoutes } from "@/features/users";

const appRoutes = [
    ...dashboardRoutes,
    ...userRoutes
];
export default appRoutes;
```

```js
// src/routes/index.jsx
import appRoutes from "./config";

const router = createBrowserRouter([
    {
        element: <AdminLayout />,
        children: appRoutes
    }
]);
```

Route page titles are set via `handle: { title: "..." }` on route objects. `AdminLayout` reads them via `useMatches()`.

Route nav items are set via `handle: { nav: { label: "..." } }` on route objects. `Sidebar` reads them via `getNavItems()` from `src/routes/nav.js`.

**To add a new feature route:**
1. Create `src/features/<name>/routes.jsx` exporting an array with `handle: { title, nav: { label } }`
2. Export it from `src/features/<name>/index.js`
3. Import and spread in `src/routes/config.js`

## Layout System

`AdminLayout` is a flex shell: permanent sidebar on the left, header + content on the right.

- `Sidebar.jsx` — Permanent Drawer (width 180px), nav items derived from route config via `getNavItems(appRoutes)`, active state via `useLocation`
- `Header.jsx` — AppBar with PageHeader (reads title from route) and UserMenu
- `Logo.jsx` — Displays "Eye Tracker" branding
- `UserMenu.jsx` — Notifications icon + Avatar (currently hardcoded)

## Feature-Sliced Architecture

Each feature in `src/features/<name>/` follows this structure:

```
features/<name>/
  index.js          Barrel export (routes array)
  routes.jsx        Route definitions
  pages/            Page-level components
  components/       Feature-specific components
  hooks/            Feature-specific hooks
  services/         API/data layer
  constants/        Shared enums/data contracts (e.g. activityTypes)
```

Features own their own data fetching via custom hooks that use the shared `useFetch` hook. Services use the shared Axios instance from `src/services/api.js`.

### Feature Constants & Domain Enums

Domain enums live in each feature's `constants/` dir and are shared by both the service layer (so mock/API data can never drift from component expectations) and feature components.

The dashboard defines the activity model used by the recent-activity feed and the five planned features:

- **Activity types** — named `GROUP_ACTION` in `src/features/dashboard/constants/activityTypes.js`. Groups: `SESSION`, `CALIBRATION`, `TRACKING`, `DEVICE`, `ANALYSIS`, `REPORT`, `PROFILE`, `MODEL` (e.g. `CALIBRATION_COMPLETED`, `DEVICE_ERROR`).
- **Activity item schema** — `{ id, date, type, detail, status }`.
- **Status → chip colour** mapping: `Completed`→success, `Failed`→error, `Warning`→warning, `Running`/`Pending`→info.
- **Display mapping** — components derive icon/colour from the type's group prefix (first `_`-separated segment) via a `typeConfig` map; profile-subtypes `AVATAR_*`/`PASSWORD_*` alias the `PROFILE` config; unknown groups fall back to the `SESSION` config.

### Implemented Features

| Feature | Routes | Description |
|---------|--------|-------------|
| `dashboard` | `/` | Metric cards (Sessions, Attention, Calibration, Device), attention-trend line chart, recent-activity feed |
| `users` | `/user` | User profile, avatar card, tracking configuration |

### Planned Features (detail.md stubs only)

- `calibration` — Calibration type selection (5-point, 9-point, Jussa, Columns) and accuracy display
- `gaze-estimate`
- `my-analytics`
- `reports`
- `test-session`

## Data Fetching

Shared `useFetch(fetchFn)` hook at `src/hooks/useFetch.js`:

```js
const { data, loading, error, refetch } = useFetch(fetchFn);
```

- Calls `fetchFn` once on mount
- Returns `{ data, loading, error, refetch }`
- `refetch()` re-triggers the fetch

Feature hooks wrap their service calls in `useCallback` and pass to `useFetch`:

```js
// src/features/dashboard/hooks/useDashboard.js
const fetchDashboard = useCallback(async () => {
    const res = await getDashboard();
    return res.data;
}, []);

const { data: dashboard, loading } = useFetch(fetchDashboard);
return { dashboard, loading };
```

## Theming

Dark violet/indigo palette defined in `src/themes/theme/default.js`. The theme system:

1. `src/themes/palette.jsx` — `buildPalette(presetColor)` maps color tokens to MUI palette structure
2. `src/themes/typography.jsx` — Typography config
3. `src/themes/customShadows.jsx` — Custom shadow tokens
4. `src/themes/overrides/` — MUI component overrides merged via lodash `merge()`
5. `src/themes/index.jsx` — `ThemeCustomization` provider wrapping the app in `App.jsx`

CSS variables are enabled with a configurable prefix (currently empty string). Palette supports a `presetColor` switch (currently only `'default'`).

## State Management

No Redux, Zustand, or other state library. State is managed via:

- **ConfigContext** — Persists app config (font, border radius, color preset) to localStorage via `useLocalStorage` hook. Key: `berry-config-vite-js`.
- **useFetch hook** — Shared data fetching with loading/error states. Feature hooks compose on top of it.
- **Component-local state** — Form editing, UI toggles, etc.

## API Layer

Shared Axios instance at `src/services/api.js` with base URL `http://localhost:8080/api`. The backend must be running separately.

**Current state:** Most services return mock data. Real API calls are commented out.

## Vite Configuration

- Path alias: `@` maps to `/src` (via `resolve.alias`)
- Plugins: `@vitejs/plugin-react` (excludes pdf, solid, node_modules) + `@rolldown/plugin-babel` with React Compiler preset

## Linting

oxlint with React plugin. Config in `.oxlintrc.json`:

```json
{
  "plugins": ["react", "oxc"],
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

Run with: `npm run lint`

## MUI Grid Pattern

This project uses MUI v9 Grid which uses `size` prop instead of `xs`/`md` on Grid items:

```jsx
<Grid size={{ xs: 12, md: 4 }}>  // not xs={12} md={4}
```

## MUI v9 `slotProps`

Prefer `slotProps` over legacy props for component-level customization. Legacy prop names (e.g. `ListItemText`'s `primaryTypographyProps`) are no longer consumed and leak their name onto the DOM element, firing a React warning:

```jsx
<ListItemText slotProps={{ primary: { pr: 10 } }} />  // not primaryTypographyProps={{ pr: 10 }}
```
