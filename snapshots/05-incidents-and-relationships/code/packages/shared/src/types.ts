export type DashboardSummary = {
  openTickets: number;
  activeIncidents: number;
  criticalAlerts: number;
  averageResolutionHours: number;
  agentRunsToday: number;
  failedBackgroundJobs: number;
  evalPassRate: number;
  recommendations: string[];
};

export type TicketStatus = 'Open' | 'InProgress' | 'WaitingOnUser' | 'Resolved' | 'Closed';
export type TicketPriority = 'Low' | 'Medium' | 'High' | 'Critical';
export type TicketCategory = 'Access' | 'Incident' | 'Request' | 'Change';

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

export type IncidentStatus = 'Investigating' | 'Mitigating' | 'Monitoring' | 'Resolved';
export type IncidentSeverity = 'SEV1' | 'SEV2' | 'SEV3';

export type IncidentSummaryDto = {
  id: string;
  title: string;
  serviceName: string;
  status: IncidentStatus;
  severity: IncidentSeverity;
  linkedTicketIds: string[];
  openedAt: string;
};

export type IncidentDetailDto = IncidentSummaryDto & {
  summary: string;
  timeline: Array<{ id: string; message: string; actorEmail: string; createdAt: string }>;
};

export type ApiEnvelope<T> = {
  data: T;
  correlationId?: string;
};
