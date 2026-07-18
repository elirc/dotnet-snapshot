import type { TicketCategory, TicketPriority, TicketStatus } from '../../domain/ticket';

export type CreateTicketRequest = {
  title: string;
  description: string;
  priority: TicketPriority;
  category: TicketCategory;
};

export type UpdateTicketStatusRequest = {
  status: TicketStatus;
};

export type AssignTicketRequest = {
  assigneeEmail: string;
};

export type AddTicketCommentRequest = {
  body: string;
};

export type TicketSummaryDto = {
  id: string;
  title: string;
  status: TicketStatus;
  priority: TicketPriority;
  category: TicketCategory;
  assignedTo?: string;
  createdAt: string;
};

export type TicketDetailDto = TicketSummaryDto & {
  description: string;
  comments: Array<{ id: string; body: string; authorEmail: string; createdAt: string }>;
};
