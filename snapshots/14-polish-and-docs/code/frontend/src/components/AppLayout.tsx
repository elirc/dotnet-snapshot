import { NavLink, Outlet } from 'react-router-dom';

export function AppLayout() {
  return (
    <div className="shell">
      <aside className="sidebar">
        <strong>NetAiOps</strong>
        <nav>
          <NavLink to="/">Dashboard</NavLink>
          <NavLink to="/tickets">Tickets</NavLink>
          <NavLink to="/tickets/new">New ticket</NavLink>
          <NavLink to="/incidents">Incidents</NavLink>
          <NavLink to="/logs">Logs</NavLink>
          <NavLink to="/knowledge">Knowledge</NavLink>
          <NavLink to="/agents">Agents</NavLink>
          <NavLink to="/evals">Evals</NavLink>
          <NavLink to="/admin/users">Admin Users</NavLink>
          <NavLink to="/admin/settings">Admin Settings</NavLink>
        </nav>
      </aside>
      <Outlet />
    </div>
  );
}
