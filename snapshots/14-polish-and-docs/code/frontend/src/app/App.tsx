import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppLayout } from '../components/AppLayout';
import { ErrorBoundary } from '../components/ErrorBoundary';
import { ProtectedRoute } from '../components/ProtectedRoute';
import { AdminSettingsPage } from '../pages/AdminSettingsPage';
import { AdminUsersPage } from '../pages/AdminUsersPage';
import { AgentsPage } from '../pages/AgentsPage';
import { CreateTicketPage } from '../pages/CreateTicketPage';
import { DashboardPage } from '../pages/DashboardPage';
import { EvalsPage } from '../pages/EvalsPage';
import { IncidentDetailPage } from '../pages/IncidentDetailPage';
import { IncidentsPage } from '../pages/IncidentsPage';
import { KnowledgeBasePage } from '../pages/KnowledgeBasePage';
import { LoginPage } from '../pages/LoginPage';
import { LogsPage } from '../pages/LogsPage';
import { TicketDetailPage } from '../pages/TicketDetailPage';
import { TicketsPage } from '../pages/TicketsPage';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route element={<ProtectedRoute />}>
          <Route element={<AppLayout />}>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/tickets" element={<TicketsPage />} />
            <Route path="/tickets/new" element={<CreateTicketPage />} />
            <Route path="/tickets/:ticketId" element={<TicketDetailPage />} />
            <Route path="/incidents" element={<IncidentsPage />} />
            <Route path="/incidents/:incidentId" element={<IncidentDetailPage />} />
            <Route path="/logs" element={<LogsPage />} />
            <Route path="/knowledge" element={<KnowledgeBasePage />} />
            <Route path="/agents" element={<AgentsPage />} />
            <Route path="/evals" element={<EvalsPage />} />
            <Route path="/admin/users" element={<AdminUsersPage />} />
            <Route path="/admin/settings" element={<AdminSettingsPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export function App() {
  return (<ErrorBoundary><AppRoutes /></ErrorBoundary>);
}
