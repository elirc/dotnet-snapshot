import { api } from '../app/api';
import { useApiResource } from '../app/useApiResource';
import { PageScaffold } from './PageScaffold';

export function EvalsPage() {
  const evals = useApiResource('evals:list', api.listEvalRuns);
  return (
    <PageScaffold title="Evals">
      <table>
        <thead><tr><th>Name</th><th>Pass rate</th><th>Ran at</th></tr></thead>
        <tbody>{(evals.data ?? []).map((run) => <tr key={run.id}><td>{run.name}</td><td>{Math.round(run.passRate * 100)}%</td><td>{run.ranAt}</td></tr>)}</tbody>
      </table>
    </PageScaffold>
  );
}
