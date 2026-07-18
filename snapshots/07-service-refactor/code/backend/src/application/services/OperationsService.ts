import type { TicketService } from './TicketService';
import type { IncidentService } from './IncidentService';
import type { AddTicketCommentRequest, AssignTicketRequest, CreateTicketRequest, UpdateTicketStatusRequest } from '../dtos/ticketDtos';
import type { AddIncidentTimelineRequest, CreateIncidentRequest } from '../dtos/incidentDtos';

export class OperationsService {
  constructor(
    private readonly tickets: TicketService,
    private readonly incidents: IncidentService
  ) {}

  listTickets() {
    return this.tickets.listTickets();
  }

  getTicket(id: string) {
    return this.tickets.getTicket(id);
  }

  createTicket(request: CreateTicketRequest) {
    return this.tickets.createTicket(request);
  }

  updateTicketStatus(id: string, request: UpdateTicketStatusRequest) {
    return this.tickets.updateStatus(id, request);
  }

  assignTicket(id: string, request: AssignTicketRequest) {
    return this.tickets.assignTicket(id, request);
  }

  addTicketComment(id: string, request: AddTicketCommentRequest) {
    return this.tickets.addComment(id, request);
  }

  listIncidents() {
    return this.incidents.listIncidents();
  }

  getIncident(id: string) {
    return this.incidents.getIncident(id);
  }

  createIncident(request: CreateIncidentRequest) {
    return this.incidents.createIncident(request);
  }

  addIncidentTimelineEvent(id: string, request: AddIncidentTimelineRequest) {
    return this.incidents.addTimelineEvent(id, request);
  }
}
