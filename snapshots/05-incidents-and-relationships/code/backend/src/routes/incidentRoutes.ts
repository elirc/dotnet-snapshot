import { Router } from 'express';
import { IncidentService } from '../application/services/IncidentService';
import { IncidentsController } from '../controllers/IncidentsController';
import { memoryStore } from '../data/memoryStore';
import { InMemoryIncidentRepository } from '../infrastructure/repositories/InMemoryIncidentRepository';

export const incidentRouter = Router();

const repository = new InMemoryIncidentRepository(memoryStore.incidents);
const service = new IncidentService(repository);
new IncidentsController(service).register(incidentRouter);
