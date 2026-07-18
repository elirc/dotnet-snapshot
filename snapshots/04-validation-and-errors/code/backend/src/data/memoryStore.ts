import type { DashboardSummary } from '@netaiops/shared/src/types';
import type { Ticket } from '../domain/ticket';

const now = new Date('2026-06-15T15:00:00.000Z');

export const tickets: Ticket[] = [
  {
    id: 'ticket-1001',
    title: 'BillingService timeout alerts',
    description: 'Renewal batch jobs are timing out against BillingService during invoice generation.',
    status: 'InProgress',
    priority: 'Critical',
    category: 'Incident',
    assignedTo: 'engineer@example.com',
    createdAt: new Date(now.getTime() - 1000 * 60 * 60 * 5),
    updatedAt: now,
    comments: [],
    auditEvents: []
  },
  {
    id: 'ticket-1002',
    title: 'Reset access for finance analyst',
    description: 'Finance analyst cannot access the revenue dashboard after role sync.',
    status: 'Open',
    priority: 'Medium',
    category: 'Access',
    createdAt: new Date(now.getTime() - 1000 * 60 * 60 * 2),
    updatedAt: now,
    comments: [],
    auditEvents: []
  }
];

export const memoryStore: { dashboard: DashboardSummary; tickets: Ticket[] } = {
  tickets,
  dashboard: {
    openTickets: tickets.filter((ticket) => ticket.status !== 'Closed').length,
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
