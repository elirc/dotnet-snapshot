import { api } from '../app/api';
import { useApiResource } from '../app/useApiResource';
import { PageScaffold } from './PageScaffold';

export function AdminUsersPage() {
  const users = useApiResource('admin:users', api.listAdminUsers);
  return (
    <PageScaffold title="Admin Users">
      <table>
        <thead><tr><th>Name</th><th>Email</th><th>Role</th><th>Status</th></tr></thead>
        <tbody>{(users.data ?? []).map((user) => <tr key={user.id}><td>{user.displayName}</td><td>{user.email}</td><td>{user.role}</td><td>{user.isActive ? 'Active' : 'Disabled'}</td></tr>)}</tbody>
      </table>
    </PageScaffold>
  );
}
