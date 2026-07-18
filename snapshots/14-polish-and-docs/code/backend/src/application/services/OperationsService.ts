import type { TicketService } from './TicketService';
import type { IncidentService } from './IncidentService';
import type { AddTicketCommentRequest, AssignTicketRequest, CreateTicketRequest, UpdateTicketStatusRequest } from '../dtos/ticketDtos';
import type { AddIncidentTimelineRequest, CreateIncidentRequest } from '../dtos/incidentDtos';
import type { TicketRepository } from '../repositories/TicketRepository';

export class OperationsService {
  constructor(
    private readonly tickets: TicketService,
    private readonly incidents: IncidentService,
    private readonly ticketRepository: TicketRepository
  ) {}

  listTickets() { return this.tickets.listTickets(); }
  getTicket(id: string) { return this.tickets.getTicket(id); }
  createTicket(request: CreateTicketRequest) { return this.tickets.createTicket(request); }
  updateTicketStatus(id: string, request: UpdateTicketStatusRequest) { return this.tickets.updateStatus(id, request); }
  assignTicket(id: string, request: AssignTicketRequest) { return this.tickets.assignTicket(id, request); }
  addTicketComment(id: string, request: AddTicketCommentRequest) { return this.tickets.addComment(id, request); }

  async listIncidents() {
    const incidents = await this.incidents.listIncidents();
    const ids = [...new Set(incidents.flatMap((incident) => incident.linkedTicketIds))];
    const linkedTickets = await this.ticketRepository.getByIds(ids);
    const byId = new Map(linkedTickets.map((ticket) => [ticket.id, ticket]));
    return incidents.map((incident) => ({
      ...incident,
      linkedTickets: incident.linkedTicketIds
        .map((id) => byId.get(id))
        .filter(Boolean)
        .map((ticket) => ({ id: ticket!.id, title: ticket!.title, status: ticket!.status }))
    }));
  }

  getIncident(id: string) { return this.incidents.getIncident(id); }
  createIncident(request: CreateIncidentRequest) { return this.incidents.createIncident(request); }
  addIncidentTimelineEvent(id: string, request: AddIncidentTimelineRequest) { return this.incidents.addTimelineEvent(id, request); }
}
