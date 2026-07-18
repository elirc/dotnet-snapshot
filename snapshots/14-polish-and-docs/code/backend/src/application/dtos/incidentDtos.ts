import type { IncidentSeverity, IncidentStatus } from '../../domain/incident';

export type CreateIncidentRequest = {
  title: string;
  summary: string;
  serviceName: string;
  severity: IncidentSeverity;
  linkedTicketIds: string[];
};

export type AddIncidentTimelineRequest = {
  message: string;
};

export type LinkedTicketSummaryDto = {
  id: string;
  title: string;
  status: string;
};

export type IncidentSummaryDto = {
  id: string;
  title: string;
  serviceName: string;
  status: IncidentStatus;
  severity: IncidentSeverity;
  linkedTicketIds: string[];
  linkedTickets?: LinkedTicketSummaryDto[];
  openedAt: string;
};

export type IncidentDetailDto = IncidentSummaryDto & {
  summary: string;
  timeline: Array<{ id: string; message: string; actorEmail: string; createdAt: string }>;
};
