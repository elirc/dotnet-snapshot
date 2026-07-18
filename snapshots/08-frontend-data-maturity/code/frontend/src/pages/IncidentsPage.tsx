import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import type { IncidentSummaryDto } from '@netaiops/shared/src/types';
import { api } from '../app/api';
import { EmptyState, ErrorState } from '../components/ApiState';

export function IncidentsPage() {
  const [incidents, setIncidents] = useState<IncidentSummaryDto[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api.listIncidents().then(setIncidents).catch((err) => setError(err.message)).finally(() => setIsLoading(false));
  }, []);

  if (isLoading) return <main className="page"><p>Loading incidents...</p></main>;
  if (error) return <main className="page"><ErrorState message={error} /></main>;

  return (
    <main className="page">
      <h1>Incidents</h1>
      {incidents.length === 0 ? <EmptyState title="No active incidents" body="Nothing is currently in incident response." /> : (
        <table>
          <thead><tr><th>Title</th><th>Service</th><th>Severity</th><th>Status</th><th>Tickets</th></tr></thead>
          <tbody>
            {incidents.map((incident) => (
              <tr key={incident.id}>
                <td><Link to={'/incidents/' + incident.id}>{incident.title}</Link></td>
                <td>{incident.serviceName}</td>
                <td>{incident.severity}</td>
                <td>{incident.status}</td>
                <td>{incident.linkedTicketIds.length}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
}
