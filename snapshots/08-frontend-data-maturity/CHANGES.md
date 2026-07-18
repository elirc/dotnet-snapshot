# Changes in 08-frontend-data-maturity

- code/frontend/src/app/queryClient.ts - Added a tiny teaching query cache.
- code/frontend/src/app/useApiResource.ts - Connected resource hook to the cache.
- code/frontend/src/app/api.ts - Added status mutation to the API client.
- code/frontend/src/pages/TicketsPage.tsx - Reworked ticket list to use cached loading and optimistic updates.

- code/frontend/src/app/api.ts - Wired login and bearer token handling so protected routes can actually call the API.
- code/frontend/src/app/App.tsx - Routed login outside the protected app shell and placed operational pages behind ProtectedRoute.
