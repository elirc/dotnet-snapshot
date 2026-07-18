import type { Router } from 'express';
import { AuthService } from '../application/services/AuthService';
import { asyncHandler } from '../shared/asyncHandler';

export class AuthController {
  constructor(private readonly authService: AuthService) {}

  register(router: Router) {
    router.post('/login', asyncHandler(async (req, res) => {
      res.json({ data: await this.authService.login(req.body) });
    }));
  }
}
