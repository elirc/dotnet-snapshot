export type IncidentStatus = 'Investigating' | 'Mitigating' | 'Monitoring' | 'Resolved';
export type IncidentSeverity = 'SEV1' | 'SEV2' | 'SEV3';

export type IncidentTimelineEvent = {
  id: string;
  incidentId: string;
  message: string;
  actorEmail: string;
  createdAt: Date;
};

export type Incident = {
  id: string;
  title: string;
  summary: string;
  serviceName: string;
  status: IncidentStatus;
  severity: IncidentSeverity;
  linkedTicketIds: string[];
  openedAt: Date;
  resolvedAt?: Date;
  timeline: IncidentTimelineEvent[];
};
