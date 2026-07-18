# Changes in 07-service-refactor

- code/backend/src/application/services/OperationsService.ts - Extracted an operations facade over ticket and incident services.
- code/backend/src/infrastructure/composition/operationsComposition.ts - Centralized composition that had been repeated in route files.
- code/backend/src/controllers/TicketsController.ts - Refactored ticket controller to depend on OperationsService.
- code/backend/src/controllers/IncidentsController.ts - Refactored incident controller to depend on OperationsService.
- code/backend/src/routes/ticketRoutes.ts - Removed repeated ticket composition from the route file.
- code/backend/src/routes/incidentRoutes.ts - Removed repeated incident composition from the route file.
- code/frontend/src/app/useApiResource.ts - Added reusable frontend API resource hook.

- code/frontend/src/app/api.ts - Wired login and bearer token handling so protected routes can actually call the API.
- code/frontend/src/app/App.tsx - Routed login outside the protected app shell and placed operational pages behind ProtectedRoute.
