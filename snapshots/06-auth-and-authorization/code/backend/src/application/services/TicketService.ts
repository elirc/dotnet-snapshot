import type { AddTicketCommentRequest, AssignTicketRequest, CreateTicketRequest, TicketDetailDto, TicketSummaryDto, UpdateTicketStatusRequest } from '../dtos/ticketDtos';
import type { TicketRepository } from '../repositories/TicketRepository';
import type { Ticket } from '../../domain/ticket';
import { AppError, notFound } from '../../shared/AppError';

const allowedTransitions: Record<string, string[]> = {
  Open: ['InProgress', 'Closed'],
  InProgress: ['WaitingOnUser', 'Resolved'],
  WaitingOnUser: ['InProgress', 'Resolved'],
  Resolved: ['Closed', 'InProgress'],
  Closed: []
};

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
    return toDetail(await this.requireTicket(id));
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
    if (!allowedTransitions[ticket.status].includes(request.status)) {
      throw new AppError(409, 'Ticket cannot transition from ' + ticket.status + ' to ' + request.status, 'invalid_status_transition');
    }
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
      throw notFound('Ticket');
    }
    return ticket;
  }
}
