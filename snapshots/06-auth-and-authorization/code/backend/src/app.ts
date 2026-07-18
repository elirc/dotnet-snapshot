import cors from 'cors';
import express from 'express';
import { errorMiddleware } from './middleware/errorMiddleware';
import { authRouter } from './routes/authRoutes';
import { dashboardRouter } from './routes/dashboardRoutes';
import { healthRouter } from './routes/healthRoutes';
import { incidentRouter } from './routes/incidentRoutes';
import { ticketRouter } from './routes/ticketRoutes';

export function createApp() {
  const app = express();
  app.use(cors());
  app.use(express.json());

  app.use('/health', healthRouter);
  app.use('/api/auth', authRouter);
  app.use('/api/dashboard', dashboardRouter);
  app.use('/api/tickets', ticketRouter);
  app.use('/api/incidents', incidentRouter);
  app.use(errorMiddleware);

  return app;
}
