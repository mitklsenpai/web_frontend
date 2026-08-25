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

**Route composition**: feature modules export route arrays from `routes.jsx`, which are spread into the central router at `src/routes/index.jsx`. All routes are children of `AdminLayout`.

**Adding a new feature**:
1. Create `src/features/<name>/` with `index.js` (export route array), `routes.jsx`, `pages/`, `components/`, `hooks/`, `services/` as needed
2. Import and spread the route array in `src/routes/index.jsx`
3. Add nav entry in `src/layouts/Sidebar.jsx` `menuItems` array

**Implemented features**: `dashboard`, `users`
**Planned (detail.md stubs only)**: `calibration`, `gaze-estimate`, `my-analytics`, `reports`, `test-session`

## API

Shared Axios instance at `src/services/api.js` - base URL `http://localhost:8080/api`. The backend must be running separately.

## Theming

Dark violet/indigo palette defined in `src/themes/theme/default.js`. MUI component overrides in `src/themes/overrides/`. Theme is applied via `ThemeCustomization` provider wrapping the app in `App.jsx`.

## State

- App config (font, border radius, color preset) persisted to localStorage via `ConfigContext` (`src/contexts/ConfigContext.jsx`)
- Feature-level data fetching via custom hooks (e.g. `useDashboard`, `useUsers`)

## Gotchas

- `src/pages/` contains empty placeholder files (Home, Login, Signup, etc.) - not yet implemented
- `src/lib/fetch.js`, `src/hooks/useFetch.js`, `src/contexts/AnalyticsContext.js` are empty placeholders
- MUI v9 `Grid` uses `size` prop instead of `xs`/`md` on `item` - see existing pages for the pattern
- Route page titles are set via `handle: { title: "..." }` on route objects, consumed by `AdminLayout` via `useMatches()`
