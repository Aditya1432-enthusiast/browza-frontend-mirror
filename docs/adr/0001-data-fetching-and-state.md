# ADR 0001: Data Fetching & State Management

## Context
We needed a clear strategy for managing server data vs local UI state.

## Decision
- Use **TanStack Query** for API data (caching, retry, error handling)
- Use **React State** for local UI
- Postpone **Redux Toolkit** until global state spans multiple pages

## Status
Accepted ✅  
Merged in PR #12

## DoD
- [x] ADR created and reviewed
- [x] Code changes implemented
- [x] Merged into main
