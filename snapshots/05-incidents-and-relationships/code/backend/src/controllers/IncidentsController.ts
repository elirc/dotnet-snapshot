import type { Router } from 'express';
import { IncidentService } from '../application/services/IncidentService';
import { asyncHandler } from '../shared/asyncHandler';

export class IncidentsController {
  constructor(private readonly incidentService: IncidentService) {}

  register(router: Router) {
    router.get('/', asyncHandler(async (_req, res) => {
      res.json({ data: await this.incidentService.listIncidents() });
    }));

    router.get('/:id', asyncHandler(async (req, res) => {
      res.json({ data: await this.incidentService.getIncident(req.params.id) });
    }));

    router.post('/', asyncHandler(async (req, res) => {
      res.status(201).json({ data: await this.incidentService.createIncident(req.body) });
    }));

    router.post('/:id/timeline', asyncHandler(async (req, res) => {
      res.status(201).json({ data: await this.incidentService.addTimelineEvent(req.params.id, req.body) });
    }));
  }
}
