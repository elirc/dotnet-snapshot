import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import type { IncidentDetailDto } from '@netaiops/shared/src/types';
import { api } from '../app/api';

export function IncidentDetailPage() {
  const { incidentId } = useParams();
  const [incident, setIncident] = useState<IncidentDetailDto | null>(null);

  useEffect(() => {
    if (incidentId) api.getIncident(incidentId).then(setIncident);
  }, [incidentId]);

  if (!incident) return <main className="page"><p>Loading incident...</p></main>;

  return (
    <main className="page">
      <h1>{incident.title}</h1>
      <p>{incident.summary}</p>
      <dl className="details">
        <dt>Service</dt><dd>{incident.serviceName}</dd>
        <dt>Severity</dt><dd>{incident.severity}</dd>
        <dt>Status</dt><dd>{incident.status}</dd>
      </dl>
      <h2>Timeline</h2>
      <ol>
        {incident.timeline.map((event) => (
          <li key={event.id}><strong>{event.actorEmail}</strong>: {event.message}</li>
        ))}
      </ol>
    </main>
  );
}
