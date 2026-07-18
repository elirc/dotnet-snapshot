import { Router } from 'express';
import { TicketService } from '../application/services/TicketService';
import { TicketsController } from '../controllers/TicketsController';
import { memoryStore } from '../data/memoryStore';
import { InMemoryTicketRepository } from '../infrastructure/repositories/InMemoryTicketRepository';
import { requireAuth, requireRole } from '../middleware/authMiddleware';
import { tokenFactory } from './authRoutes';

export const ticketRouter = Router();

ticketRouter.use(requireAuth(tokenFactory));
ticketRouter.post('/', requireRole('Admin', 'Engineer', 'SupportAnalyst'));
ticketRouter.patch('/:id/status', requireRole('Admin', 'Engineer'));
ticketRouter.patch('/:id/assignment', requireRole('Admin', 'Engineer'));

const repository = new InMemoryTicketRepository(memoryStore.tickets);
const service = new TicketService(repository);
new TicketsController(service).register(ticketRouter);
