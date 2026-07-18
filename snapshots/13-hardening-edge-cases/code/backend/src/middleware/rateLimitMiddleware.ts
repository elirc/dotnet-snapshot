import type { RequestHandler } from 'express';
import { AppError } from '../shared/AppError';

const attempts = new Map<string, { count: number; resetAt: number }>();

export function createRateLimit(limit: number, windowMs: number): RequestHandler {
  return (req, _res, next) => {
    const key = req.ip + ':' + req.path;
    const now = Date.now();
    const bucket = attempts.get(key) ?? { count: 0, resetAt: now + windowMs };
    if (bucket.resetAt < now) {
      bucket.count = 0;
      bucket.resetAt = now + windowMs;
    }
    bucket.count += 1;
    attempts.set(key, bucket);
    if (bucket.count > limit) {
      next(new AppError(429, 'Too many attempts. Try again later.', 'rate_limited'));
      return;
    }
    next();
  };
}
