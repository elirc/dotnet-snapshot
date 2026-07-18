import type { DashboardSummary } from '@netaiops/shared/src/types';

export const memoryStore: { dashboard: DashboardSummary } = {
  dashboard: {
    openTickets: 17,
    activeIncidents: 2,
    criticalAlerts: 4,
    averageResolutionHours: 6.8,
    agentRunsToday: 9,
    failedBackgroundJobs: 1,
    evalPassRate: 0.92,
    recommendations: [
      'Investigate BillingService timeout spike before the renewal batch.',
      'Refresh AuthService token validation runbook after last week\'s incident.',
      'Review failed notification retries in the outbox worker.'
    ]
  }
};
