import { Router } from 'express';
import { TicketsController } from '../controllers/TicketsController';
import { operationsService } from '../infrastructure/composition/operationsComposition';
import { requireAuth, requireRole } from '../middleware/authMiddleware';
import { tokenFactory } from './authRoutes';

export const ticketRouter = Router();

ticketRouter.use(requireAuth(tokenFactory));
ticketRouter.post('/', requireRole('Admin', 'Engineer', 'SupportAnalyst'));
ticketRouter.patch('/:id/status', requireRole('Admin', 'Engineer'));
ticketRouter.patch('/:id/assignment', requireRole('Admin', 'Engineer'));

new TicketsController(operationsService).register(ticketRouter);
