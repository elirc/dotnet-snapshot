import { IncidentService } from '../../application/services/IncidentService';
import { OperationsService } from '../../application/services/OperationsService';
import { TicketService } from '../../application/services/TicketService';
import { memoryStore } from '../../data/memoryStore';
import { InMemoryIncidentRepository } from '../repositories/InMemoryIncidentRepository';
import { InMemoryTicketRepository } from '../repositories/InMemoryTicketRepository';

const ticketRepository = new InMemoryTicketRepository(memoryStore.tickets);
const incidentRepository = new InMemoryIncidentRepository(memoryStore.incidents);

export const operationsService = new OperationsService(
  new TicketService(ticketRepository),
  new IncidentService(incidentRepository),
  ticketRepository
);
