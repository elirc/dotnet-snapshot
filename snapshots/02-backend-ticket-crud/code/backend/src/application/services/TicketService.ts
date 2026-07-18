import type { AddTicketCommentRequest, AssignTicketRequest, CreateTicketRequest, TicketDetailDto, TicketSummaryDto, UpdateTicketStatusRequest } from '../dtos/ticketDtos';
import type { TicketRepository } from '../repositories/TicketRepository';
import type { Ticket } from '../../domain/ticket';

function toSummary(ticket: Ticket): TicketSummaryDto {
  return {
    id: ticket.id,
    title: ticket.title,
    status: ticket.status,
    priority: ticket.priority,
    category: ticket.category,
    assignedTo: ticket.assignedTo,
    createdAt: ticket.createdAt.toISOString()
  };
}

function toDetail(ticket: Ticket): TicketDetailDto {
  return {
    ...toSummary(ticket),
    description: ticket.description,
    comments: ticket.comments.map((comment) => ({
      id: comment.id,
      body: comment.body,
      authorEmail: comment.authorEmail,
      createdAt: comment.createdAt.toISOString()
    }))
  };
}

export class TicketService {
  constructor(private readonly tickets: TicketRepository) {}

  async listTickets() {
    return (await this.tickets.list()).map(toSummary);
  }

  async getTicket(id: string) {
    const ticket = await this.tickets.getById(id);
    if (!ticket) {
      throw new Error('Ticket not found');
    }
    return toDetail(ticket);
  }

  async createTicket(request: CreateTicketRequest) {
    const now = new Date();
    const ticket: Ticket = {
      id: 'ticket-' + crypto.randomUUID().slice(0, 8),
      title: request.title,
      description: request.description,
      priority: request.priority,
      category: request.category,
      status: 'Open',
      createdAt: now,
      updatedAt: now,
      comments: [],
      auditEvents: []
    };
    return toDetail(await this.tickets.create(ticket));
  }

  async updateStatus(id: string, request: UpdateTicketStatusRequest) {
    const ticket = await this.requireTicket(id);
    ticket.status = request.status;
    ticket.updatedAt = new Date();
    ticket.auditEvents.push({
      id: crypto.randomUUID(),
      ticketId: id,
      actorEmail: 'system@netaiops.local',
      message: 'Status changed to ' + request.status,
      createdAt: ticket.updatedAt
    });
    return toDetail(await this.tickets.save(ticket));
  }

  async assignTicket(id: string, request: AssignTicketRequest) {
    const ticket = await this.requireTicket(id);
    ticket.assignedTo = request.assigneeEmail;
    ticket.updatedAt = new Date();
    return toDetail(await this.tickets.save(ticket));
  }

  async addComment(id: string, request: AddTicketCommentRequest) {
    const ticket = await this.requireTicket(id);
    ticket.comments.push({
      id: crypto.randomUUID(),
      ticketId: id,
      body: request.body,
      authorEmail: 'engineer@example.com',
      createdAt: new Date()
    });
    ticket.updatedAt = new Date();
    return toDetail(await this.tickets.save(ticket));
  }

  private async requireTicket(id: string) {
    const ticket = await this.tickets.getById(id);
    if (!ticket) {
      throw new Error('Ticket not found');
    }
    return ticket;
  }
}
