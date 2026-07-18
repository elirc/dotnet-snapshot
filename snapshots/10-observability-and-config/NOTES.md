# 10 Observability And Config

## Goal
Make runtime behavior diagnosable with configuration, structured logs, and correlation IDs.

## What changed and why
Environment config, structured logging, request IDs, readiness/health endpoints, and request logging middleware are introduced.

## Key decisions
- Load config once at startup; scattered process.env reads were rejected because they are hard to audit.
- Use correlation IDs in every request log so API failures can be traced across services later.
- Keep log payloads structured JSON because operations teams search logs by field.

## Deferred on purpose
The incident list now hides a query efficiency problem. Snapshot 11 measures and fixes it.

## Where to look
- code/backend/src/config/env.ts
- code/backend/src/shared/logger.ts
- code/backend/src/middleware/correlationMiddleware.ts
- code/backend/src/routes/healthRoutes.ts

## Predict before you read
Predict which middleware must run early so every log line can include a correlation ID.

## Skills introduced
- structured logging
- correlation ID
- env config
- health check
