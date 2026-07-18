import type { RequestHandler } from 'express';

declare global {
  namespace Express {
    interface Request {
      correlationId?: string;
    }
  }
}

export const correlationMiddleware: RequestHandler = (req, res, next) => {
  req.correlationId = req.header('x-correlation-id') ?? crypto.randomUUID();
  res.setHeader('x-correlation-id', req.correlationId);
  next();
};
