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
