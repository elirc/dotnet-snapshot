import type { Router } from 'express';
import { adminSettings } from '../data/aiOpsCatalog';
import { memoryStore } from '../data/memoryStore';
import { asyncHandler } from '../shared/asyncHandler';

export class AdminSettingsController {
  register(router: Router) {
    router.get('/settings', asyncHandler(async (_req, res) => {
      res.json({ data: adminSettings });
    }));

    router.get('/users', asyncHandler(async (_req, res) => {
      res.json({
        data: memoryStore.users.map((user) => ({
          id: user.id,
          email: user.email,
          displayName: user.displayName,
          role: user.role,
          isActive: user.isActive
        }))
      });
    }));
  }
}
