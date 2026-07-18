import type { Router } from 'express';
import { TicketService } from '../application/services/TicketService';

export class TicketsController {
  constructor(private readonly ticketService: TicketService) {}

  register(router: Router) {
    router.get('/', async (_req, res) => {
      res.json({ data: await this.ticketService.listTickets() });
    });

    router.get('/:id', async (req, res) => {
      res.json({ data: await this.ticketService.getTicket(req.params.id) });
    });

    router.post('/', async (req, res) => {
      res.status(201).json({ data: await this.ticketService.createTicket(req.body) });
    });

    router.patch('/:id/status', async (req, res) => {
      res.json({ data: await this.ticketService.updateStatus(req.params.id, req.body) });
    });

    router.patch('/:id/assignment', async (req, res) => {
      res.json({ data: await this.ticketService.assignTicket(req.params.id, req.body) });
    });

    router.post('/:id/comments', async (req, res) => {
      res.status(201).json({ data: await this.ticketService.addComment(req.params.id, req.body) });
    });
  }
}
