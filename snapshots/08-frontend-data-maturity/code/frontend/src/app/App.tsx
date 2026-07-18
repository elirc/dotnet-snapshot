import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppLayout } from '../components/AppLayout';
import { ProtectedRoute } from '../components/ProtectedRoute';
import { CreateTicketPage } from '../pages/CreateTicketPage';
import { DashboardPage } from '../pages/DashboardPage';
import { IncidentDetailPage } from '../pages/IncidentDetailPage';
import { IncidentsPage } from '../pages/IncidentsPage';
import { LoginPage } from '../pages/LoginPage';
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
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export function App() {
  return <AppRoutes />;
}
