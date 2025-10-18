# Browza Frontend (Next.js)


AAAAAABBBBBBBBB


## Quick Start
- Node 20+, pnpm recommended.
- Install: `pnpm install`
- Dev: `pnpm dev` → http://localhost:3000

## Branching & PRs
- Branch names: `feat/<short>`, `fix/<short>`, `chore/<short>`
- Open PR → follow template → request review from @Sarthak (codeowner) + @aditya
- Squash-merge only.

## Folder seed (to follow)
- `/app` (routes)
- `/components` (UI)
- `/lib` (utils)
- `/styles` (globals.css)

## Browza Frontend (Next.js)

Install dependencies:
npm install
Start development server:
npm dev
→ App runs at http://localhost:3000

Build for production:
npm build
Start production server:
npm start


## Architecture & State Management Decision

### Scope
Capture the decision and conventions used for managing state in the app.

- **Server data** → Managed using **TanStack Query** for caching, retries, and error/loading handling.
- **Local UI state** → Managed using **React State** (or Context only if necessary).
- **Redux Toolkit** → Deferred until a clear cross-page global state emerges.

### Pros & Cons
**Pros**
- Clear separation of server and UI state.
- Simplifies data fetching and error handling.
- Reduces unnecessary global state.

**Cons**
- Slight learning curve for TanStack Query.
- Requires proper query key management.

### Usage Conventions
- Always wrap the app in a `QueryClientProvider`.
- Use consistent query keys (`['user', id]`, `['posts', page]`).
- Show toast notifications for API errors.

### Definition of Done (DoD)
✅ Documented in [`docs/adr/0001-data-fetching-and-state.md`](docs/adr/0001-data-fetching-and-state.md)  
✅ Merged to `main` after review.
