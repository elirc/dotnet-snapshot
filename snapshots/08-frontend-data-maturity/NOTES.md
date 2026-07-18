# 08 Frontend Data Maturity

## Goal
Make the React app behave like an operations tool under latency, empty states, and small mutations.

## What changed and why
A tiny query cache abstraction, reusable resource states, invalidation, and optimistic ticket status updates are added. Pages stop manually juggling the same loading/error flags.

## Key decisions
- Use a local teaching cache instead of installing TanStack Query because the code need not run and the concept is easier to inspect.
- Add optimistic updates only where the rollback story is simple.
- Keep cache keys explicit so juniors see why invalidation matters.

## Deferred on purpose
Confidence is still manual. Snapshot 09 adds automated test examples.

## Where to look
- code/frontend/src/app/queryClient.ts
- code/frontend/src/app/useApiResource.ts
- code/frontend/src/pages/TicketsPage.tsx

## Predict before you read
Predict what happens if an optimistic status update fails and where rollback should live.

## Skills introduced
- client-side caching
- optimistic updates
- loading state
- cache invalidation
