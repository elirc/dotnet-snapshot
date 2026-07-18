import cors from 'cors';
import express from 'express';
import { env } from './config/env';
import { correlationMiddleware } from './middleware/correlationMiddleware';
import { errorMiddleware } from './middleware/errorMiddleware';
import { requestLoggingMiddleware } from './middleware/requestLoggingMiddleware';
import { authRouter } from './routes/authRoutes';
import { dashboardRouter } from './routes/dashboardRoutes';
import { healthRouter } from './routes/healthRoutes';
import { incidentRouter } from './routes/incidentRoutes';
import { ticketRouter } from './routes/ticketRoutes';

export function createApp() {
  const app = express();
  app.use(correlationMiddleware);
  app.use(requestLoggingMiddleware);
  app.use(cors({ origin: env.corsOrigin }));
  app.use(express.json());

  app.use('/health', healthRouter);
  app.use('/api/auth', authRouter);
  app.use('/api/dashboard', dashboardRouter);
  app.use('/api/tickets', ticketRouter);
  app.use('/api/incidents', incidentRouter);
  app.use(errorMiddleware);

  return app;
}
