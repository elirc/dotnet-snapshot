# Changes in 11-performance-n-plus-one

- code/backend/docs/performance-incident-list.md - Documented the N+1 query and fix.
- code/backend/src/application/repositories/TicketRepository.ts - Added a batched ticket lookup method.
- code/backend/src/infrastructure/repositories/InMemoryTicketRepository.ts - Implemented batched in-memory lookup.
- code/backend/src/application/dtos/incidentDtos.ts - Added linked ticket summary DTOs.
- code/backend/src/application/services/OperationsService.ts - Fixed incident enrichment with batched ticket loading.
- code/backend/src/infrastructure/composition/operationsComposition.ts - Passed TicketRepository into OperationsService for batched enrichment.

- code/frontend/src/app/api.ts - Wired login and bearer token handling so protected routes can actually call the API.
- code/frontend/src/app/App.tsx - Routed login outside the protected app shell and placed operational pages behind ProtectedRoute.
