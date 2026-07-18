# NetAiOps

NetAiOps is a simulated full-stack AI-powered IT operations platform built as a teaching codebase. The final snapshot shows a TypeScript Node API, React UI, shared contracts, auth/RBAC, operational tickets, incidents, logs, observability, tests, and production-style docs.

## Local orientation

- `backend/src/app.ts` wires middleware and routes.
- `backend/src/application/services/OperationsService.ts` is the workflow facade.
- `frontend/src/app/App.tsx` owns the route tree.
- `frontend/src/pages` contains workflow pages.
- `packages/shared/src/types.ts` contains cross-stack DTOs.

This repo is a teaching artifact. It is realistic in shape and naming, but snapshots are not guaranteed to compile without dependency cleanup.
