# Changes in 12-search-filter-pagination

- code/backend/src/application/dtos/queryDtos.ts - Added bounded pagination helpers.
- code/backend/src/domain/log.ts - Added synthetic operational log entity.
- code/backend/src/controllers/LogsController.ts - Added read-only log search endpoint.
- code/backend/src/routes/logRoutes.ts - Composed protected log routes.
- code/backend/src/data/memoryStore.ts - Seeded 80+ synthetic logs.
- code/backend/src/app.ts - Mounted log routes.
- code/frontend/src/pages/LogsPage.tsx - Added log search UI.
- code/frontend/src/app/api.ts - Added log search client method.
- code/frontend/src/components/AppLayout.tsx - Added Logs navigation.
- code/frontend/src/app/App.tsx - Registered Logs page route.

- code/frontend/src/app/api.ts - Wired login and bearer token handling so protected routes can actually call the API.
- code/frontend/src/app/App.tsx - Routed login outside the protected app shell and placed operational pages behind ProtectedRoute.
