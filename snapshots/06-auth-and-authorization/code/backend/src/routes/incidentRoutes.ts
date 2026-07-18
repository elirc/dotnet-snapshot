import { Router } from 'express';
import { IncidentService } from '../application/services/IncidentService';
import { IncidentsController } from '../controllers/IncidentsController';
import { memoryStore } from '../data/memoryStore';
import { InMemoryIncidentRepository } from '../infrastructure/repositories/InMemoryIncidentRepository';
import { requireAuth, requireRole } from '../middleware/authMiddleware';
import { tokenFactory } from './authRoutes';

export const incidentRouter = Router();

incidentRouter.use(requireAuth(tokenFactory));
incidentRouter.post('/', requireRole('Admin', 'Engineer'));
incidentRouter.post('/:id/timeline', requireRole('Admin', 'Engineer', 'SupportAnalyst'));

const repository = new InMemoryIncidentRepository(memoryStore.incidents);
const service = new IncidentService(repository);
new IncidentsController(service).register(incidentRouter);
