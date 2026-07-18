# Changes in 05-incidents-and-relationships

- code/packages/shared/src/types.ts - Added shared incident contracts.
- code/backend/src/domain/incident.ts - Introduced Incident and timeline domain entities.
- code/backend/src/application/dtos/incidentDtos.ts - Added incident DTOs.
- code/backend/src/application/repositories/IncidentRepository.ts - Added incident persistence contract.
- code/backend/src/infrastructure/repositories/InMemoryIncidentRepository.ts - Implemented in-memory incident persistence.
- code/backend/src/application/services/IncidentService.ts - Added incident behavior service.
- code/backend/src/controllers/IncidentsController.ts - Added incident controller routes.
- code/backend/src/routes/incidentRoutes.ts - Composed incident dependencies.
- code/backend/src/data/memoryStore.ts - Added realistic incident seed data linked to tickets.
- code/backend/src/app.ts - Mounted incident routes.
- code/frontend/src/app/api.ts - Added incident API client methods.
- code/frontend/src/components/AppLayout.tsx - Added incident navigation.
- code/frontend/src/app/App.tsx - Registered incident pages.
- code/frontend/src/pages/IncidentsPage.tsx - Added incident list view.
- code/frontend/src/pages/IncidentDetailPage.tsx - Added incident detail and timeline view.
