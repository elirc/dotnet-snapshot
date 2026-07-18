import type { RequestHandler } from 'express';
import { logger } from '../shared/logger';

export const requestLoggingMiddleware: RequestHandler = (req, res, next) => {
  const startedAt = Date.now();
  res.on('finish', () => {
    logger.info('http_request', {
      method: req.method,
      path: req.path,
      statusCode: res.statusCode,
      durationMs: Date.now() - startedAt,
      correlationId: req.correlationId
    });
  });
  next();
};
