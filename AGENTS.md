# AGENTS.md

## Tech Stack

- React 19 + Vite 8 + MUI v9 (Material UI) + React Router v7
- Linter: **oxlint** (NOT ESLint) - config in `.oxlintrc.json`
- React Compiler enabled via `@rolldown/plugin-babel` (impacts build/dev perf)
- No TypeScript - all `.jsx`/`.js` files
- No test runner installed (test files exist in `__tests__/` dirs but no vitest/jest configured)
- No formatter or typecheck tool configured

## Commands

- `npm run dev` - Start Vite dev server
- `npm run lint` - Run oxlint
- `npm run build` - Vite production build
- `npm run preview` - Preview production build

There is no test, typecheck, or format command. Do not assume one exists.

## Path Alias

`@` maps to `src/` (configured in `vite.config.js`). Use `import X from '@/path'`.

## Architecture

**Feature-sliced**: each feature in `src/features/<name>/` is self-contained with its own `routes.jsx`, `pages/`, `components/`, `hooks/`, and `services/`.

**Route composition**: feature modules export route arrays from `routes.jsx`. All feature routes are registered in `src/routes/config.js` (central route registry). The router at `src/routes/index.jsx` and `Sidebar.jsx` both import from `config.js`. All routes are children of `AdminLayout`.

**Adding a new feature**:
1. Create `src/features/<name>/` with `index.js` (export route array), `routes.jsx`, `pages/`, `components/`, `hooks/`, `services/`, `constants/` (for shared enums/data contracts) as needed
2. Add `nav: { label: "..." }` to the route's `handle` object in `routes.jsx`
3. Import and spread the route array in `src/routes/config.js`

**Implemented features**: `dashboard`, `users`
**Planned (detail.md stubs only)**: `calibration`, `gaze-estimate`, `my-analytics`, `reports`, `test-session`

## Data Fetching

Shared `useFetch(fetchFn)` hook at `src/hooks/useFetch.js` — calls `fetchFn` once on mount, returns `{ data, loading, error, refetch }`. Feature hooks wrap their service calls in `useCallback` and pass to `useFetch`.

## API

Shared Axios instance at `src/services/api.js` - base URL `http://localhost:8080/api`. The backend must be running separately.

## Theming

Dark violet/indigo palette defined in `src/themes/theme/default.js`. MUI component overrides in `src/themes/overrides/`. Theme is applied via `ThemeCustomization` provider wrapping the app in `App.jsx`.

## State

- App config (font, border radius, color preset) persisted to localStorage via `ConfigContext` (`src/contexts/ConfigContext.jsx`)
- Feature-level data fetching via `useFetch` hook (e.g. `useDashboard`, `useUsers`)

## Gotchas

- MUI v9 `Grid` uses `size` prop instead of `xs`/`md` on `item` - see existing pages for the pattern
- MUI v9 `slotProps` - use it instead of legacy props like `inputProps`/`primaryTypographyProps`. Passing legacy Typography props to `ListItemText` (e.g. `primaryTypographyProps`) leaks the prop name onto the DOM element and fires a React warning; use `slotProps={{ primary: { ... } }}`
- Route page titles are set via `handle: { title: "..." }` on route objects, consumed by `AdminLayout` via `useMatches()`
- Route nav items are set via `handle: { nav: { label: "..." } }` on route objects, consumed by `Sidebar` via `getNavItems()`
