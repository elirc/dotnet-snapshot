# Changes in 06-auth-and-authorization

- code/packages/shared/src/types.ts - Added shared auth contracts.
- code/backend/src/domain/user.ts - Added user and role domain model.
- code/backend/src/application/dtos/authDtos.ts - Added auth DTOs.
- code/backend/src/application/services/AuthService.ts - Added login behavior and auth interfaces.
- code/backend/src/infrastructure/auth/DemoPasswordHasher.ts - Added a password hasher stub that names the production seam.
- code/backend/src/infrastructure/auth/DemoJwtTokenFactory.ts - Added a JWT-shaped token factory for the teaching artifact.
- code/backend/src/shared/requestContext.ts - Added current-user helper behavior.
- code/backend/src/middleware/authMiddleware.ts - Added authentication and RBAC middleware.
- code/backend/src/controllers/AuthController.ts - Added login controller.
- code/backend/src/routes/authRoutes.ts - Composed auth dependencies.
- code/backend/src/routes/ticketRoutes.ts - Protected ticket routes with auth and roles.
- code/backend/src/routes/incidentRoutes.ts - Protected incident routes with auth and roles.
- code/backend/src/data/memoryStore.ts - Added seed users and roles.
- code/backend/src/app.ts - Mounted auth routes.
- code/frontend/src/app/authStore.ts - Added a small session store.
- code/frontend/src/components/ProtectedRoute.tsx - Added frontend route protection.
- code/frontend/src/pages/LoginPage.tsx - Added login page.

- code/frontend/src/app/api.ts - Wired login and bearer token handling so protected routes can actually call the API.
- code/frontend/src/app/App.tsx - Routed login outside the protected app shell and placed operational pages behind ProtectedRoute.
