import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import type { TicketSummaryDto } from '@netaiops/shared/src/types';
import { api } from '../app/api';
import { EmptyState, ErrorState } from '../components/ApiState';

export function TicketsPage() {
  const [tickets, setTickets] = useState<TicketSummaryDto[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    api.listTickets()
      .then(setTickets)
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <main className="page"><p>Loading tickets...</p></main>;
  }

  if (error) {
    return <main className="page"><ErrorState message={error} /></main>;
  }

  return (
    <main className="page">
      <header className="page-header">
        <h1>Tickets</h1>
        <Link className="button" to="/tickets/new">Create ticket</Link>
      </header>
      {tickets.length === 0 ? <EmptyState title="No tickets" body="The operations queue is clear." /> : (
        <table>
          <thead>
            <tr><th>Title</th><th>Status</th><th>Priority</th><th>Assignee</th></tr>
          </thead>
          <tbody>
            {tickets.map((ticket) => (
              <tr key={ticket.id}>
                <td><Link to={'/tickets/' + ticket.id}>{ticket.title}</Link></td>
                <td>{ticket.status}</td>
                <td>{ticket.priority}</td>
                <td>{ticket.assignedTo ?? 'Unassigned'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
}
