# Changes in 13-hardening-edge-cases

- code/backend/src/middleware/rateLimitMiddleware.ts - Added simple login rate limiting.
- code/backend/src/middleware/securityHeadersMiddleware.ts - Added basic security headers.
- code/backend/src/infrastructure/auth/DemoJwtTokenFactory.ts - Hardened token verification with expiry checks.
- code/backend/src/routes/authRoutes.ts - Applied rate limiting to login.
- code/backend/src/app.ts - Applied security headers early.
- code/frontend/src/components/ErrorBoundary.tsx - Added frontend crash containment.
- code/frontend/src/app/App.tsx - Wrapped routed app in an error boundary.
- code/frontend/src/pages/LoginPage.tsx - Improved login form accessibility.

- code/frontend/src/app/api.ts - Wired login and bearer token handling so protected routes can actually call the API.
- code/frontend/src/app/App.tsx - Routed login outside the protected app shell and placed operational pages behind ProtectedRoute.
