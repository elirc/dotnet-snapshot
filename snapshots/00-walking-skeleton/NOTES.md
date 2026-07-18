# 00 Walking Skeleton

## Goal
Prove that the backend and frontend can communicate around one NetAiOps dashboard concept before any deep modeling work begins.

## What changed and why
The first codebase has a tiny Express API, a React dashboard, shared TypeScript types, and in-memory operational metrics. It intentionally keeps everything fake so the junior reader can see the shape of the system without database or auth noise.

## Key decisions
- Use a monorepo because NetAiOps shares DTOs between API and UI; separate repos were rejected because they hide the full-stack feedback loop.
- Use in-memory data because the lesson is request-to-render flow; persistence is deferred until the domain is named clearly.
- Expose one dashboard endpoint instead of many resources because the first milestone should be easy to inspect end to end.

## Deferred on purpose
Real tickets, persistence, validation, and auth are intentionally absent. Snapshot 01 starts the Ticket domain model.

## Where to look
- code/backend/src/app.ts
- code/backend/src/data/memoryStore.ts
- code/frontend/src/pages/DashboardPage.tsx
- code/packages/shared/src/types.ts

## Predict before you read
Before opening the code, predict which files must exist for a browser view to call one backend endpoint.

## Skills introduced
- walking skeleton
- monorepo structure
- API contract
- in-memory fixture data
