# 01 Domain And Persistence

## Goal
Turn the first real business noun, Ticket, into a domain entity with a repository boundary.

## What changed and why
Tickets now have statuses, priorities, categories, comments, audit events, DTOs, and an in-memory repository. The API still exposes only dashboard behavior, but the persistence boundary is ready for CRUD.

## Key decisions
- Keep Domain free of Express and storage details; an active-record style model was rejected because it couples business terms to infrastructure.
- Add repository interfaces before the controller because the teaching path should show dependency direction early.
- Use DTOs separate from entities so external API shape can evolve without leaking internal audit fields.

## Deferred on purpose
There are no ticket routes yet. Snapshot 02 adds controller, service, and route wiring.

## Where to look
- code/backend/src/domain/ticket.ts
- code/backend/src/application/dtos/ticketDtos.ts
- code/backend/src/application/repositories/TicketRepository.ts
- code/backend/src/infrastructure/repositories/InMemoryTicketRepository.ts

## Predict before you read
Predict which Ticket fields belong in the API response and which should remain internal.

## Skills introduced
- domain model
- repository abstraction
- DTO design
- persistence boundary
