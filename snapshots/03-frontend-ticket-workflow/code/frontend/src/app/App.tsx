import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppLayout } from '../components/AppLayout';
import { CreateTicketPage } from '../pages/CreateTicketPage';
import { DashboardPage } from '../pages/DashboardPage';
import { TicketDetailPage } from '../pages/TicketDetailPage';
import { TicketsPage } from '../pages/TicketsPage';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/tickets" element={<TicketsPage />} />
          <Route path="/tickets/new" element={<CreateTicketPage />} />
          <Route path="/tickets/:ticketId" element={<TicketDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
