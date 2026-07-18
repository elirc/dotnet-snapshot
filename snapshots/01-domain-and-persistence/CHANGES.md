# Changes in 01-domain-and-persistence

- code/packages/shared/src/types.ts - Expanded shared API contracts with Ticket DTOs.
- code/backend/src/domain/ticket.ts - Introduced the Ticket domain entity.
- code/backend/src/application/dtos/ticketDtos.ts - Separated HTTP DTOs from domain entities.
- code/backend/src/application/repositories/TicketRepository.ts - Added the Ticket persistence contract.
- code/backend/src/infrastructure/repositories/InMemoryTicketRepository.ts - Implemented an in-memory repository for teaching persistence boundaries.
- code/backend/src/data/memoryStore.ts - Carried forward dashboard data and added seeded tickets.
