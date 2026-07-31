# AGENTS.md

## Cursor Cloud specific instructions

This repo is a single static frontend: a React + Vite + TypeScript + Tailwind CSS
personal portfolio SPA (no backend, database, queue, or external services).

- Dependencies are installed automatically by the startup update script (`npm install`).
- Standard commands live in `package.json` (`dev`, `build`, `preview`); the README also documents them. Use those rather than duplicating here.
- Run the app in dev mode with `npm run dev` (Vite, serves on `http://localhost:5173/`).
- There is no test runner and no linter configured. The closest static check is the
  type-check that runs as part of `npm run build` (`tsc --noEmit && vite build`).
- Node 22 works fine even though CI (`.github/workflows/deploy.yml`) pins Node 20.
- Gotcha: `npm run build` sets the GitHub Pages base path only when the `GITHUB_PAGES`
  env var is set (see `vite.config.ts`); leave it unset for local dev/preview so assets
  resolve from `./`.
- The repo also contains legacy static `*.html` files at the root from a previous version
  of the site; they are not part of the React app but some assets (`img/`, `portfolio/`,
  resume PDF) are copied into `dist/` at build time by a Vite plugin.
