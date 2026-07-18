# 12 Search Filter Pagination

## Goal
Add a feature that crosses the whole stack and makes large operational data usable.

## What changed and why
Bounded pagination, search terms, filters, synthetic logs, and frontend filter controls are added across tickets, incidents, and logs.

## Key decisions
- Use bounded pagination on the server because the UI cannot be trusted to protect the database.
- Keep filter DTOs explicit instead of passing arbitrary query strings through layers.
- Add Logs as a read-only operational resource because search is clearest with high-volume data.

## Deferred on purpose
Hardening around abuse, auth edge cases, and accessibility remains. Snapshot 13 focuses on those edges.

## Where to look
- code/backend/src/application/dtos/queryDtos.ts
- code/backend/src/domain/log.ts
- code/backend/src/controllers/LogsController.ts
- code/frontend/src/pages/LogsPage.tsx

## Predict before you read
Predict why page size should be capped server-side even if the frontend dropdown only offers safe values.

## Skills introduced
- pagination
- search/filter
- bounded list endpoint
- operational logs
