import type { Router } from 'express';
import { agentRuns, humanApprovals } from '../data/aiOpsCatalog';
import { asyncHandler } from '../shared/asyncHandler';

export class AgentRunsController {
  register(router: Router) {
    router.get('/', asyncHandler(async (_req, res) => {
      res.json({ data: agentRuns });
    }));

    router.get('/approvals', asyncHandler(async (_req, res) => {
      res.json({ data: humanApprovals });
    }));
  }
}
