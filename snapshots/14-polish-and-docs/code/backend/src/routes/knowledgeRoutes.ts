import { Router } from 'express';
import { KnowledgeDocumentsController } from '../controllers/KnowledgeDocumentsController';
import { requireAuth } from '../middleware/authMiddleware';
import { tokenFactory } from './authRoutes';

export const knowledgeRouter = Router();
knowledgeRouter.use(requireAuth(tokenFactory));
new KnowledgeDocumentsController().register(knowledgeRouter);
