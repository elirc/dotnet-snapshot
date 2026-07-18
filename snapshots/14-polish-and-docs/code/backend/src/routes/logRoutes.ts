import { Router } from 'express';
import { LogsController } from '../controllers/LogsController';
import { requireAuth } from '../middleware/authMiddleware';
import { tokenFactory } from './authRoutes';

export const logRouter = Router();
logRouter.use(requireAuth(tokenFactory));
new LogsController().register(logRouter);
