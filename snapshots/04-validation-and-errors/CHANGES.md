# Changes in 04-validation-and-errors

- code/backend/package.json - Added Zod for request validation.
- code/backend/src/shared/AppError.ts - Introduced a consistent API error type.
- code/backend/src/shared/asyncHandler.ts - Added an async route wrapper.
- code/backend/src/middleware/errorMiddleware.ts - Centralized error responses.
- code/backend/src/middleware/validateRequest.ts - Added request-body validation middleware.
- code/backend/src/validation/ticketSchemas.ts - Defined ticket request schemas.
- code/backend/src/application/services/TicketService.ts - Replaced generic errors with AppError and transition validation.
- code/backend/src/controllers/TicketsController.ts - Applied validation and async error handling to ticket routes.
- code/backend/src/app.ts - Registered global error middleware after routes.
- code/frontend/src/components/ApiState.tsx - Added reusable UI states.
- code/frontend/src/app/api.ts - Mapped backend error envelopes into frontend ApiError.
- code/frontend/src/pages/TicketsPage.tsx - Added frontend error and empty states to the ticket list.
