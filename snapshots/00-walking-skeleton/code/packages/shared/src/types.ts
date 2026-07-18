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

export type ApiEnvelope<T> = {
  data: T;
  correlationId?: string;
};
