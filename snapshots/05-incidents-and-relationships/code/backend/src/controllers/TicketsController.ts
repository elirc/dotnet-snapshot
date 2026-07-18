import type { Router } from 'express';
import { TicketService } from '../application/services/TicketService';
import { validateBody } from '../middleware/validateRequest';
import { asyncHandler } from '../shared/asyncHandler';
import { addTicketCommentSchema, assignTicketSchema, createTicketSchema, updateTicketStatusSchema } from '../validation/ticketSchemas';

export class TicketsController {
  constructor(private readonly ticketService: TicketService) {}

  register(router: Router) {
    router.get('/', asyncHandler(async (_req, res) => {
      res.json({ data: await this.ticketService.listTickets() });
    }));

    router.get('/:id', asyncHandler(async (req, res) => {
      res.json({ data: await this.ticketService.getTicket(req.params.id) });
    }));

    router.post('/', validateBody(createTicketSchema), asyncHandler(async (req, res) => {
      res.status(201).json({ data: await this.ticketService.createTicket(req.body) });
    }));

    router.patch('/:id/status', validateBody(updateTicketStatusSchema), asyncHandler(async (req, res) => {
      res.json({ data: await this.ticketService.updateStatus(req.params.id, req.body) });
    }));

    router.patch('/:id/assignment', validateBody(assignTicketSchema), asyncHandler(async (req, res) => {
      res.json({ data: await this.ticketService.assignTicket(req.params.id, req.body) });
    }));

    router.post('/:id/comments', validateBody(addTicketCommentSchema), asyncHandler(async (req, res) => {
      res.status(201).json({ data: await this.ticketService.addComment(req.params.id, req.body) });
    }));
  }
}
