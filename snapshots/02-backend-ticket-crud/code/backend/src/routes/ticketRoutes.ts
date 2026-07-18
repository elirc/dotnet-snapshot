import { Router } from 'express';
import { TicketService } from '../application/services/TicketService';
import { TicketsController } from '../controllers/TicketsController';
import { memoryStore } from '../data/memoryStore';
import { InMemoryTicketRepository } from '../infrastructure/repositories/InMemoryTicketRepository';

export const ticketRouter = Router();

const repository = new InMemoryTicketRepository(memoryStore.tickets);
const service = new TicketService(repository);
new TicketsController(service).register(ticketRouter);
