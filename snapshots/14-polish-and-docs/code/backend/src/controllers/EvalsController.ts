import type { Router } from 'express';
import { evalRuns } from '../data/aiOpsCatalog';
import { asyncHandler } from '../shared/asyncHandler';

export class EvalsController {
  register(router: Router) {
    router.get('/', asyncHandler(async (_req, res) => {
      res.json({ data: evalRuns });
    }));
  }
}
