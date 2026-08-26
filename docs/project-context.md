# Project Context

## What Is This App?

An **Eye Tracker** admin dashboard — a web frontend for managing eye tracking devices, users, calibration, and gaze estimation data. The backend runs separately at `localhost:8080/api`.

## Current State

Two features are implemented (Dashboard, Users) with mock data. Five more features are planned but only have `detail.md` stubs.

### Implemented and Working

- App shell with sidebar navigation and header
- Dashboard with metric cards (Sessions, Attention, Calibration, Device)
- User profile page with edit capability, avatar, and tracking configuration display
- Full MUI theme system with dark violet/indigo palette
- Config persistence to localStorage
- Shared `useFetch` hook for data fetching
- Sidebar nav derived from route config (not hardcoded)

### Mock / Not Yet Connected to Backend

- `dashboardService.js` — Returns hardcoded `{ totalUsers: 120, totalSessions: 58 }`
- `userService.js` — Returns hardcoded user data and device configuration

### Planned (Empty Stubs)

- `calibration` — Calibration type selection and accuracy display
- `gaze-estimate`
- `my-analytics`
- `reports`
- `test-session`

## Key Conventions

### Code Style

- **No TypeScript** — All `.jsx`/`.js` files
- **Functional components only** — No class components
- **Named exports** for hooks and utilities, default exports for components
- **Feature barrel exports** — Each feature's `index.js` re-exports its route array
- **Import alias** — Use `@/` for `src/` imports (e.g., `import X from '@/services/api'`)
- **No comments** — Code is expected to be self-documenting
- **MUI v9 Grid** — Use `size={{ xs: 12, md: 4 }}` not `xs={12} md={4}`
- **MUI v9 `slotProps`** — Used instead of `inputProps` for component customization
- **sx prop** — Primary styling method, inline with components

### Data Fetching Pattern

Shared `useFetch(fetchFn)` hook at `src/hooks/useFetch.js`. Feature hooks wrap service calls in `useCallback` and pass to `useFetch`:

```js
const fetchDashboard = useCallback(async () => {
    const res = await getDashboard();
    return res.data;
}, []);

const { data: dashboard, loading } = useFetch(fetchDashboard);
return { dashboard, loading };
```

For mutations (create/update), keep the async function in the feature hook and call the service directly.

### Component Structure

- Page components live in `features/<name>/pages/`
- Feature components live in `features/<name>/components/`
- Shared components live in `src/components/` (common/)
- Layouts live in `src/layouts/`

### Adding a New Feature

1. Create `src/features/<name>/` directory
2. Create `index.js` exporting route array
3. Create `routes.jsx` with route definitions including `handle: { title: "...", nav: { label: "..." } }`
4. Create `pages/`, `components/`, `hooks/`, `services/` as needed
5. Import and spread route array in `src/routes/config.js`

Sidebar nav is automatically derived from route `handle.nav` — no manual sidebar edits needed.

### Theme Customization

To change colors: edit `src/themes/theme/default.js` (color tokens) and `src/themes/palette.jsx` (palette mapping).

To override MUI components: add/modify files in `src/themes/overrides/` and register in `src/themes/overrides/index.js`.

To change font or border radius: edit `src/config.js`.

## Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start Vite dev server |
| `npm run build` | Production build |
| `npm run lint` | Run oxlint |
| `npm run preview` | Preview production build |

No test command is configured. Test files exist in `__tests__/` directories but no test runner (vitest/jest) is installed.

## Known Issues

- `TrackingConfiguration` has a typo: field name `caibration_type` (missing 'l')
- `AvatarCard` has a hardcoded user name
- `MetricCard` has a fixed `width: 405` which may not be responsive
- Services return mock data — real API integration is pending
