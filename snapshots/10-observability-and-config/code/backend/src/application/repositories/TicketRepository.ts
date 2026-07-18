import type { Ticket } from '../../domain/ticket';

export interface TicketRepository {
  list(): Promise<Ticket[]>;
  getById(id: string): Promise<Ticket | undefined>;
  create(ticket: Ticket): Promise<Ticket>;
  save(ticket: Ticket): Promise<Ticket>;
}
