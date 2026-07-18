# Changes in 10-observability-and-config

- code/backend/src/config/env.ts - Centralized runtime configuration.
- code/backend/src/shared/logger.ts - Added structured JSON logging.
- code/backend/src/middleware/correlationMiddleware.ts - Added correlation IDs for requests.
- code/backend/src/middleware/requestLoggingMiddleware.ts - Added request logging.
- code/backend/src/routes/healthRoutes.ts - Expanded health checks with readiness.
- code/backend/src/app.ts - Placed correlation and request logging early in middleware order.
- code/backend/src/server.ts - Switched startup logging to structured logger.

- code/frontend/src/app/api.ts - Wired login and bearer token handling so protected routes can actually call the API.
- code/frontend/src/app/App.tsx - Routed login outside the protected app shell and placed operational pages behind ProtectedRoute.
