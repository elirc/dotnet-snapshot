import type { RequestHandler } from 'express';
import type { JwtTokenFactory } from '../application/services/AuthService';
import type { UserRole } from '../domain/user';
import { AppError } from '../shared/AppError';

declare global {
  namespace Express {
    interface Request {
      currentUser?: import('../domain/user').AppUser;
    }
  }
}

export function requireAuth(tokenFactory: JwtTokenFactory): RequestHandler {
  return (req, _res, next) => {
    const token = req.header('authorization')?.replace('Bearer ', '');
    const user = token ? tokenFactory.verifyToken(token) : undefined;
    if (!user) {
      next(new AppError(401, 'Authentication required', 'authentication_required'));
      return;
    }
    req.currentUser = user;
    next();
  };
}

export function requireRole(...roles: UserRole[]): RequestHandler {
  return (req, _res, next) => {
    if (!req.currentUser || !roles.includes(req.currentUser.role)) {
      next(new AppError(403, 'You do not have permission for this action', 'forbidden'));
      return;
    }
    next();
  };
}
