import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import type { TicketDetailDto } from '@netaiops/shared/src/types';
import { api } from '../app/api';

export function TicketDetailPage() {
  const { ticketId } = useParams();
  const [ticket, setTicket] = useState<TicketDetailDto | null>(null);

  useEffect(() => {
    if (ticketId) {
      api.getTicket(ticketId).then(setTicket);
    }
  }, [ticketId]);

  if (!ticket) {
    return <main className="page"><p>Loading ticket...</p></main>;
  }

  return (
    <main className="page">
      <h1>{ticket.title}</h1>
      <p>{ticket.description}</p>
      <dl className="details">
        <dt>Status</dt><dd>{ticket.status}</dd>
        <dt>Priority</dt><dd>{ticket.priority}</dd>
        <dt>Category</dt><dd>{ticket.category}</dd>
        <dt>Assigned to</dt><dd>{ticket.assignedTo ?? 'Unassigned'}</dd>
      </dl>
      <h2>Comments</h2>
      {ticket.comments.length === 0 ? <p>No comments yet.</p> : (
        <ul>{ticket.comments.map((comment) => <li key={comment.id}>{comment.body}</li>)}</ul>
      )}
    </main>
  );
}
