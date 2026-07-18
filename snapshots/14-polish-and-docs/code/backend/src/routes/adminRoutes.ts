import { Router } from 'express';
import { AdminSettingsController } from '../controllers/AdminSettingsController';
import { requireAuth, requireRole } from '../middleware/authMiddleware';
import { tokenFactory } from './authRoutes';

export const adminRouter = Router();
adminRouter.use(requireAuth(tokenFactory), requireRole('Admin'));
new AdminSettingsController().register(adminRouter);
