# 04 Validation And Errors

## Goal
Make bad input and operational failures predictable across the API and UI.

## What changed and why
The API gains request validation, a shared AppError model, async route handling, and global error middleware. The UI now renders API errors and empty states intentionally.

## Key decisions
- Centralize errors in middleware; ad hoc try/catch responses were rejected because they drift by controller.
- Validate at the HTTP boundary so services can assume shaped input.
- Surface field-level frontend errors lightly without adopting a full form library yet.

## Deferred on purpose
Auth-specific error behavior is still absent. Snapshot 06 introduces current-user context.

## Where to look
- code/backend/src/shared/AppError.ts
- code/backend/src/middleware/errorMiddleware.ts
- code/backend/src/validation/ticketSchemas.ts
- code/frontend/src/components/ApiState.tsx

## Predict before you read
Predict what a validation error response should look like before finding the error middleware.

## Skills introduced
- input validation
- global error middleware
- API error model
- empty state
