import type { Ticket } from '../../domain/ticket';

export interface TicketRepository {
  list(): Promise<Ticket[]>;
  getById(id: string): Promise<Ticket | undefined>;
  getByIds(ids: string[]): Promise<Ticket[]>;
  create(ticket: Ticket): Promise<Ticket>;
  save(ticket: Ticket): Promise<Ticket>;
}
