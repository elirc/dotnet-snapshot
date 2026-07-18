import type { TicketRepository } from '../../application/repositories/TicketRepository';
import type { Ticket } from '../../domain/ticket';

export class InMemoryTicketRepository implements TicketRepository {
  constructor(private readonly tickets: Ticket[]) {}

  async list() {
    return [...this.tickets].sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  async getById(id: string) {
    return this.tickets.find((ticket) => ticket.id === id);
  }

  async getByIds(ids: string[]) {
    const idSet = new Set(ids);
    return this.tickets.filter((ticket) => idSet.has(ticket.id));
  }

  async create(ticket: Ticket) {
    this.tickets.push(ticket);
    return ticket;
  }

  async save(ticket: Ticket) {
    const index = this.tickets.findIndex((candidate) => candidate.id === ticket.id);
    if (index >= 0) {
      this.tickets[index] = ticket;
    }
    return ticket;
  }
}
