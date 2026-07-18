import { api } from '../app/api';
import { useApiResource } from '../app/useApiResource';
import { PageScaffold } from './PageScaffold';

export function AgentsPage() {
  const runs = useApiResource('agents:runs', api.listAgentRuns);
  const approvals = useApiResource('agents:approvals', api.listApprovals);
  return (
    <PageScaffold title="Agents">
      <h2>Recent runs</h2>
      <ul className="resource-list">{(runs.data ?? []).map((run) => <li key={run.id}><strong>{run.status}</strong><span>{run.recommendation}</span></li>)}</ul>
      <h2>Approval queue</h2>
      <ul className="resource-list">{(approvals.data ?? []).map((approval) => <li key={approval.id}><strong>{approval.status}</strong><span>{approval.requestedAction}</span></li>)}</ul>
    </PageScaffold>
  );
}
