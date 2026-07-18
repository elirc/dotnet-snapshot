import { Router } from 'express';

export const healthRouter = Router();

healthRouter.get('/', (_req, res) => {
  res.json({ status: 'ok', service: 'netaiops-api' });
});

healthRouter.get('/ready', (_req, res) => {
  res.json({ status: 'ready', dependencies: { memoryStore: 'ok' } });
});
