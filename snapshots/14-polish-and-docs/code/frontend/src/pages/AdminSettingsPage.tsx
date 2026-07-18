import { api } from '../app/api';
import { useApiResource } from '../app/useApiResource';
import { PageScaffold } from './PageScaffold';

export function AdminSettingsPage() {
  const settings = useApiResource('admin:settings', api.listAdminSettings);
  return (
    <PageScaffold title="Admin Settings">
      <table>
        <thead><tr><th>Key</th><th>Value</th><th>Description</th></tr></thead>
        <tbody>{(settings.data ?? []).map((setting) => <tr key={setting.key}><td>{setting.key}</td><td>{setting.value}</td><td>{setting.description}</td></tr>)}</tbody>
      </table>
    </PageScaffold>
  );
}
