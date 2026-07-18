import { Router } from 'express';
import { AgentRunsController } from '../controllers/AgentRunsController';
import { requireAuth, requireRole } from '../middleware/authMiddleware';
import { tokenFactory } from './authRoutes';

export const agentRouter = Router();
agentRouter.use(requireAuth(tokenFactory));
agentRouter.use(requireRole('Admin', 'Engineer', 'SupportAnalyst'));
new AgentRunsController().register(agentRouter);
