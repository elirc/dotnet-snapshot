# Changes in 02-backend-ticket-crud

- code/backend/src/application/services/TicketService.ts - Added TicketService as the business behavior layer.
- code/backend/src/controllers/TicketsController.ts - Added a thin controller for ticket routes.
- code/backend/src/routes/ticketRoutes.ts - Composed repository, service, and controller for ticket endpoints.
- code/backend/src/app.ts - Mounted the ticket API under /api/tickets.
