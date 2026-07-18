# 07 Service Refactor

## Goal
Revisit earlier choices once duplication is visible and extract a cohesive operations facade.

## What changed and why
TicketService and IncidentService orchestration moves behind OperationsService. Shared API hooks and middleware conventions remove repeated controller and UI boilerplate.

## Key decisions
- Add OperationsService because workflows now span tickets, incidents, agents, audit, and approvals; a god controller was rejected.
- Keep entity-specific repositories because storage concerns remain separate from workflow orchestration.
- Use a reusable frontend API hook because page-level fetch code became repetitive in Snapshot 03.

## Deferred on purpose
The custom hook still lacks cache invalidation and optimistic updates. Snapshot 08 handles data maturity.

## Where to look
- code/backend/src/application/services/OperationsService.ts
- code/backend/src/controllers/TicketsController.ts
- code/backend/src/controllers/IncidentsController.ts
- code/frontend/src/app/useApiResource.ts

## Predict before you read
Find the “before” duplication in older snapshots, then predict which service owns cross-resource operations.

## Skills introduced
- refactoring
- facade service
- shared middleware
- reusable API hook
