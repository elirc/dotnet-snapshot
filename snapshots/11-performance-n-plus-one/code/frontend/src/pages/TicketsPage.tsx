import { Link } from 'react-router-dom';
import { api } from '../app/api';
import { queryClient } from '../app/queryClient';
import { useApiResource } from '../app/useApiResource';
import { EmptyState, ErrorState } from '../components/ApiState';

export function TicketsPage() {
  const ticketsResource = useApiResource('tickets:list', api.listTickets);

  async function resolveTicket(id: string) {
    const current = ticketsResource.data ?? [];
    queryClient.setQueryData('tickets:list', current.map((ticket) => ticket.id === id ? { ...ticket, status: 'Resolved' as const } : ticket));
    try {
      await api.updateTicketStatus(id, 'Resolved');
      ticketsResource.reload();
    } catch {
      queryClient.setQueryData('tickets:list', current);
      ticketsResource.reload();
    }
  }

  if (ticketsResource.isLoading) {
    return <main className="page"><p>Loading tickets...</p></main>;
  }

  if (ticketsResource.error) {
    return <main className="page"><ErrorState message={ticketsResource.error} /></main>;
  }

  const tickets = ticketsResource.data ?? [];

  return (
    <main className="page">
      <header className="page-header">
        <h1>Tickets</h1>
        <Link className="button" to="/tickets/new">Create ticket</Link>
      </header>
      {tickets.length === 0 ? <EmptyState title="No tickets" body="The operations queue is clear." /> : (
        <table>
          <thead>
            <tr><th>Title</th><th>Status</th><th>Priority</th><th>Assignee</th><th>Action</th></tr>
          </thead>
          <tbody>
            {tickets.map((ticket) => (
              <tr key={ticket.id}>
                <td><Link to={'/tickets/' + ticket.id}>{ticket.title}</Link></td>
                <td>{ticket.status}</td>
                <td>{ticket.priority}</td>
                <td>{ticket.assignedTo ?? 'Unassigned'}</td>
                <td><button type="button" onClick={() => resolveTicket(ticket.id)}>Resolve</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
}
