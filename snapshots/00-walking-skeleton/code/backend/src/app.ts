import cors from 'cors';
import express from 'express';
import { dashboardRouter } from './routes/dashboardRoutes';
import { healthRouter } from './routes/healthRoutes';

export function createApp() {
  const app = express();
  app.use(cors());
  app.use(express.json());

  app.use('/health', healthRouter);
  app.use('/api/dashboard', dashboardRouter);

  return app;
}
