# Eye Tracker Admin Dashboard

Web frontend for managing eye tracking devices, users, calibration, and gaze-estimation data. The backend API runs separately at `http://localhost:8080/api`.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| UI | React 19 |
| Build | Vite 8 |
| Components | MUI (Material UI) 9 |
| Routing | React Router 7 |
| HTTP | Axios |
| Lint | oxlint (not ESLint) |

No TypeScript, no test runner, no formatter.

## Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run oxlint |

## Project Structure

```
src/
  main.jsx                  Entry point — ConfigProvider → App
  App.jsx                   ThemeCustomization → RouterProvider
  config.js                 App-level config (font, border radius, theme mode)
  routes/                   Central router and route registry
  layouts/                  App shell (AdminLayout, Sidebar, Header, UserMenu)
  features/                 Feature modules (self-contained per feature)
  components/               Shared UI components
  hooks/                    Shared hooks (useFetch, useConfig, useLocalStorage)
  contexts/                 React contexts (ConfigContext)
  services/                 Shared Axios API client
  themes/                   MUI theme system (palette, typography, overrides)
  utils/                    Utility functions
```

Features follow feature-sliced architecture — each lives in `src/features/<name>/` with its own `routes.jsx`, `pages/`, `components/`, `hooks/`, `services/`, and `constants/`. All feature routes are registered in `src/routes/config.js`.

## Implemented Features

| Feature | Routes | Description |
|---------|--------|-------------|
| `dashboard` | `/` | Metric cards, attention-trend chart, recent-activity feed |
| `users` | `/user` | User profile, avatar, tracking configuration |
| `calibration` | `/calibration` | Calibration overview and result pages |

More features are planned: `gaze-estimate`, `my-analytics`, `reports`, `test-session`.

## API

Shared Axios instance at `src/services/api.js` with base URL `http://localhost:8080/api`. The backend must be running separately. Several services still return mock data.

## Documentation

- [Architecture](docs/architecture.md)
- [Project Context](docs/project-context.md)