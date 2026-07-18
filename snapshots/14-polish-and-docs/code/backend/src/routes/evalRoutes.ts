import { Router } from 'express';
import { EvalsController } from '../controllers/EvalsController';
import { requireAuth, requireRole } from '../middleware/authMiddleware';
import { tokenFactory } from './authRoutes';

export const evalRouter = Router();
evalRouter.use(requireAuth(tokenFactory));
evalRouter.use(requireRole('Admin', 'Engineer'));
new EvalsController().register(evalRouter);
