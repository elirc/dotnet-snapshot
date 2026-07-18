export const knowledgeDocuments = [
  { id: 'kb-billing-runbook', title: 'BillingService timeout runbook', serviceName: 'BillingService', updatedAt: '2026-06-14T18:20:00.000Z' },
  { id: 'kb-auth-runbook', title: 'AuthService token validation runbook', serviceName: 'AuthService', updatedAt: '2026-06-12T20:15:00.000Z' },
  { id: 'kb-incident-handbook', title: 'Incident response handbook', serviceName: 'Platform', updatedAt: '2026-06-10T16:00:00.000Z' },
  { id: 'kb-postmortem-template', title: 'Postmortem template', serviceName: 'Platform', updatedAt: '2026-06-08T12:00:00.000Z' }
];

export const agentRuns = [
  { id: 'agentrun-7001', incidentId: 'inc-2001', status: 'WaitingForApproval', startedBy: 'engineer@example.com', recommendation: 'Scale BillingService workers and replay failed invoice jobs.' }
];

export const humanApprovals = [
  { id: 'approval-9001', agentRunId: 'agentrun-7001', status: 'Pending', requestedAction: 'Apply BillingService worker scale-up plan' }
];

export const evalRuns = [
  { id: 'eval-3001', name: 'Incident triage recommendation eval', passRate: 0.94, ranAt: '2026-06-15T09:00:00.000Z' },
  { id: 'eval-3002', name: 'Runbook retrieval relevance eval', passRate: 0.89, ranAt: '2026-06-14T09:00:00.000Z' }
];

export const adminSettings = [
  { key: 'agent.autoCreateApproval', value: 'true', description: 'Require human approval before agent-suggested remediation.' },
  { key: 'logs.retentionDays', value: '30', description: 'Synthetic log retention window for local operations.' }
];
