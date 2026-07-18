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
        </nav>
      </aside>
      <Outlet />
    </div>
  );
}
