# 06 Auth And Authorization

## Goal
Introduce identity, roles, protected routes, and role-aware UI affordances.

## What changed and why
Seed users, password hashing stubs, JWT-shaped tokens, auth middleware, role guards, login UI, session storage, and protected frontend routes are added.

## Key decisions
- Use role middleware on sensitive endpoints instead of trusting the frontend because server-side authorization is the actual control.
- Store a simple demo token in localStorage because this is a teaching artifact; production cookie tradeoffs are named in comments.
- Render role-aware navigation but keep backend checks as source of truth.

## Deferred on purpose
The service layer is now getting fat and duplicated across tickets/incidents. Snapshot 07 extracts OperationsService.

## Where to look
- code/backend/src/domain/user.ts
- code/backend/src/application/services/AuthService.ts
- code/backend/src/middleware/authMiddleware.ts
- code/frontend/src/app/authStore.ts
- code/frontend/src/pages/LoginPage.tsx

## Predict before you read
Predict which endpoints should be Admin/Engineer only before reading the route files.

## Skills introduced
- JWT authentication
- RBAC
- protected route
- current-user context
