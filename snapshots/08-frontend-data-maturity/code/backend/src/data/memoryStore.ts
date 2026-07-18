import type { DashboardSummary } from '@netaiops/shared/src/types';
import type { Incident } from '../domain/incident';
import type { Ticket } from '../domain/ticket';
import type { AppUser } from '../domain/user';

const now = new Date('2026-06-15T15:00:00.000Z');

export const users: AppUser[] = [
  { id: 'user-admin', email: 'admin@example.com', displayName: 'Ada Admin', role: 'Admin', passwordHash: 'demo:Password123!', isActive: true },
  { id: 'user-engineer', email: 'engineer@example.com', displayName: 'Eli Engineer', role: 'Engineer', passwordHash: 'demo:Password123!', isActive: true },
  { id: 'user-support', email: 'support@example.com', displayName: 'Sam Support', role: 'SupportAnalyst', passwordHash: 'demo:Password123!', isActive: true },
  { id: 'user-viewer', email: 'viewer@example.com', displayName: 'Viv Viewer', role: 'Viewer', passwordHash: 'demo:Password123!', isActive: true }
];

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

export const incidents: Incident[] = [
  {
    id: 'inc-2001',
    title: 'BillingService checkout timeouts',
    summary: 'Checkout requests intermittently time out during invoice finalization.',
    serviceName: 'BillingService',
    status: 'Investigating',
    severity: 'SEV1',
    linkedTicketIds: ['ticket-1001'],
    openedAt: new Date(now.getTime() - 1000 * 60 * 80),
    timeline: [
      { id: 'evt-1', incidentId: 'inc-2001', actorEmail: 'engineer@example.com', message: 'PagerDuty alert acknowledged.', createdAt: new Date(now.getTime() - 1000 * 60 * 78) }
    ]
  },
  {
    id: 'inc-2002',
    title: 'AuthService token validation failures',
    summary: 'Spike in token validation errors for enterprise SSO customers.',
    serviceName: 'AuthService',
    status: 'Monitoring',
    severity: 'SEV2',
    linkedTicketIds: [],
    openedAt: new Date(now.getTime() - 1000 * 60 * 180),
    timeline: [
      { id: 'evt-2', incidentId: 'inc-2002', actorEmail: 'support@example.com', message: 'Support confirmed customer impact.', createdAt: new Date(now.getTime() - 1000 * 60 * 170) }
    ]
  }
];

export const memoryStore: { dashboard: DashboardSummary; tickets: Ticket[]; incidents: Incident[]; users: AppUser[] } = {
  tickets,
  incidents,
  users,
  dashboard: {
    openTickets: tickets.filter((ticket) => ticket.status !== 'Closed').length,
    activeIncidents: incidents.filter((incident) => incident.status !== 'Resolved').length,
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
