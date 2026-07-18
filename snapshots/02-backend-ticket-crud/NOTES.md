# 02 Backend Ticket CRUD

## Goal
Make Ticket a real backend feature with controller, service, repository, and route responsibilities separated.

## What changed and why
The backend now lists, reads, creates, updates status, assigns tickets, and accepts comments. Controllers stay thin and delegate behavior to TicketService.

## Key decisions
- Put status transition behavior in a service; controller-level business logic was rejected because it becomes hard to test.
- Return DTOs from services because controllers should not know how entities are shaped internally.
- Keep the repository in memory for now because the lesson is feature flow, not database setup.

## Deferred on purpose
Frontend ticket UX is still missing. Snapshot 03 wires the API into React.

## Where to look
- code/backend/src/application/services/TicketService.ts
- code/backend/src/controllers/TicketsController.ts
- code/backend/src/routes/ticketRoutes.ts

## Predict before you read
Guess where assignment should be handled: controller, service, or repository, then compare against the implementation.

## Skills introduced
- CRUD endpoint
- service layer
- thin controllers
- status transition
