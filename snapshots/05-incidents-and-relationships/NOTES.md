# 05 Incidents And Relationships

## Goal
Add Incident as a second entity and show how it relates to Tickets and timeline events.

## What changed and why
Incidents have severity, status, linked ticket IDs, and timeline events. Backend routes and frontend pages expose incident lists, details, creation, and timeline additions.

## Key decisions
- Model linked tickets by IDs in memory; richer join tables are deferred until a real database appears.
- Keep incident investigation as a TODO because it will eventually span agents, approvals, audit, and outbox.
- Treat timeline events as append-only because operational history should be preserved.

## Deferred on purpose
Only trusted local users can do anything because auth does not exist yet. Snapshot 06 adds roles and route protection.

## Where to look
- code/backend/src/domain/incident.ts
- code/backend/src/application/services/IncidentService.ts
- code/backend/src/controllers/IncidentsController.ts
- code/frontend/src/pages/IncidentsPage.tsx

## Predict before you read
Predict which Ticket data the Incident list should display and what lookup cost that creates later.

## Skills introduced
- entity relationship
- timeline event
- append-only history
- cross-resource UI
