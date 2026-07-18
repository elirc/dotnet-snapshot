import { describe, expect, it } from 'vitest';
import { TicketService } from '../src/application/services/TicketService';
import { InMemoryTicketRepository } from '../src/infrastructure/repositories/InMemoryTicketRepository';
import type { Ticket } from '../src/domain/ticket';

function buildTicket(overrides: Partial<Ticket> = {}): Ticket {
  const now = new Date('2026-06-15T15:00:00.000Z');
  return {
    id: 'ticket-test',
    title: 'Test ticket',
    description: 'A ticket used by the service test.',
    status: 'Open',
    priority: 'High',
    category: 'Incident',
    createdAt: now,
    updatedAt: now,
    comments: [],
    auditEvents: [],
    ...overrides
  };
}

describe('TicketService', () => {
  it('rejects invalid status transitions', async () => {
    const service = new TicketService(new InMemoryTicketRepository([buildTicket({ status: 'Closed' })]));

    await expect(service.updateStatus('ticket-test', { status: 'Open' })).rejects.toMatchObject({
      code: 'invalid_status_transition'
    });
  });
});
