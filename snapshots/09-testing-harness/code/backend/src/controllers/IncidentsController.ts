import type { Router } from 'express';
import { OperationsService } from '../application/services/OperationsService';
import { asyncHandler } from '../shared/asyncHandler';

export class IncidentsController {
  constructor(private readonly operations: OperationsService) {}

  register(router: Router) {
    router.get('/', asyncHandler(async (_req, res) => {
      res.json({ data: await this.operations.listIncidents() });
    }));

    router.get('/:id', asyncHandler(async (req, res) => {
      res.json({ data: await this.operations.getIncident(req.params.id) });
    }));

    router.post('/', asyncHandler(async (req, res) => {
      res.status(201).json({ data: await this.operations.createIncident(req.body) });
    }));

    router.post('/:id/timeline', asyncHandler(async (req, res) => {
      res.status(201).json({ data: await this.operations.addIncidentTimelineEvent(req.params.id, req.body) });
    }));
  }
}
