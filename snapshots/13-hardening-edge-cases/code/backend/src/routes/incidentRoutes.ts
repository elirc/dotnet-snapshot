import { Router } from 'express';
import { IncidentsController } from '../controllers/IncidentsController';
import { operationsService } from '../infrastructure/composition/operationsComposition';
import { requireAuth, requireRole } from '../middleware/authMiddleware';
import { tokenFactory } from './authRoutes';

export const incidentRouter = Router();

incidentRouter.use(requireAuth(tokenFactory));
incidentRouter.post('/', requireRole('Admin', 'Engineer'));
incidentRouter.post('/:id/timeline', requireRole('Admin', 'Engineer', 'SupportAnalyst'));

new IncidentsController(operationsService).register(incidentRouter);
