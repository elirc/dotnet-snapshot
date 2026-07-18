import type { Router } from 'express';
import { OperationsService } from '../application/services/OperationsService';
import { validateBody } from '../middleware/validateRequest';
import { asyncHandler } from '../shared/asyncHandler';
import { addTicketCommentSchema, assignTicketSchema, createTicketSchema, updateTicketStatusSchema } from '../validation/ticketSchemas';

export class TicketsController {
  constructor(private readonly operations: OperationsService) {}

  register(router: Router) {
    router.get('/', asyncHandler(async (_req, res) => {
      res.json({ data: await this.operations.listTickets() });
    }));

    router.get('/:id', asyncHandler(async (req, res) => {
      res.json({ data: await this.operations.getTicket(req.params.id) });
    }));

    router.post('/', validateBody(createTicketSchema), asyncHandler(async (req, res) => {
      res.status(201).json({ data: await this.operations.createTicket(req.body) });
    }));

    router.patch('/:id/status', validateBody(updateTicketStatusSchema), asyncHandler(async (req, res) => {
      res.json({ data: await this.operations.updateTicketStatus(req.params.id, req.body) });
    }));

    router.patch('/:id/assignment', validateBody(assignTicketSchema), asyncHandler(async (req, res) => {
      res.json({ data: await this.operations.assignTicket(req.params.id, req.body) });
    }));

    router.post('/:id/comments', validateBody(addTicketCommentSchema), asyncHandler(async (req, res) => {
      res.status(201).json({ data: await this.operations.addTicketComment(req.params.id, req.body) });
    }));
  }
}
