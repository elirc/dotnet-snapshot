export type TicketStatus = 'Open' | 'InProgress' | 'WaitingOnUser' | 'Resolved' | 'Closed';
export type TicketPriority = 'Low' | 'Medium' | 'High' | 'Critical';
export type TicketCategory = 'Access' | 'Incident' | 'Request' | 'Change';

export type TicketComment = {
  id: string;
  ticketId: string;
  body: string;
  authorEmail: string;
  createdAt: Date;
};

export type TicketAuditEvent = {
  id: string;
  ticketId: string;
  actorEmail: string;
  message: string;
  createdAt: Date;
};

export type Ticket = {
  id: string;
  title: string;
  description: string;
  status: TicketStatus;
  priority: TicketPriority;
  category: TicketCategory;
  assignedTo?: string;
  createdAt: Date;
  updatedAt: Date;
  comments: TicketComment[];
  auditEvents: TicketAuditEvent[];
};
