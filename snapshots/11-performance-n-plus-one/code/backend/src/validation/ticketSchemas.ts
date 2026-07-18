import { z } from 'zod';

export const createTicketSchema = z.object({
  title: z.string().min(3).max(120),
  description: z.string().min(10).max(4000),
  priority: z.enum(['Low', 'Medium', 'High', 'Critical']),
  category: z.enum(['Access', 'Incident', 'Request', 'Change'])
});

export const updateTicketStatusSchema = z.object({
  status: z.enum(['Open', 'InProgress', 'WaitingOnUser', 'Resolved', 'Closed'])
});

export const assignTicketSchema = z.object({
  assigneeEmail: z.string().email()
});

export const addTicketCommentSchema = z.object({
  body: z.string().min(2).max(2000)
});
