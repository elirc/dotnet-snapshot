import { Router } from 'express';
import { memoryStore } from '../data/memoryStore';

export const dashboardRouter = Router();

dashboardRouter.get('/summary', (_req, res) => {
  res.json({ data: memoryStore.dashboard });
});
