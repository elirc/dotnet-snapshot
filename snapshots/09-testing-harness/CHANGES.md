# Changes in 09-testing-harness

- code/backend/package.json - Added backend test script and Vitest.
- code/backend/tests/TicketService.test.ts - Added a focused service unit test.
- code/backend/tests/DashboardService.test.ts - Documented dashboard metric behavior with a small unit test.
- code/backend/tests/AuthRoutes.test.ts - Added integration-style auth behavior documentation.
- code/frontend/package.json - Added frontend test script and testing libraries.
- code/frontend/src/pages/TicketsPage.test.tsx - Added a lightweight component-state test example.

- code/frontend/src/app/api.ts - Wired login and bearer token handling so protected routes can actually call the API.
- code/frontend/src/app/App.tsx - Routed login outside the protected app shell and placed operational pages behind ProtectedRoute.
