import { useEffect, useState } from 'react';
import type { DashboardSummary } from '@netaiops/shared/src/types';
import { api } from '../app/api';

export function DashboardPage() {
  const [summary, setSummary] = useState<DashboardSummary | null>(null);

  useEffect(() => {
    api.getDashboardSummary().then(setSummary);
  }, []);

  if (!summary) {
    return <main className="page"><p>Loading NetAiOps dashboard...</p></main>;
  }

  return (
    <main className="page">
      <header className="hero">
        <p className="eyebrow">NetAiOps</p>
        <h1>AI-assisted IT operations console</h1>
      </header>
      <section className="metric-grid" aria-label="Operations summary">
        <Metric label="Open tickets" value={summary.openTickets} />
        <Metric label="Active incidents" value={summary.activeIncidents} />
        <Metric label="Critical alerts" value={summary.criticalAlerts} />
        <Metric label="Agent runs today" value={summary.agentRunsToday} />
      </section>
      <section>
        <h2>Recent AI recommendations</h2>
        <ul>
          {summary.recommendations.map((recommendation) => (
            <li key={recommendation}>{recommendation}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}

function Metric({ label, value }: { label: string; value: number }) {
  return (
    <article className="metric">
      <span>{label}</span>
      <strong>{value}</strong>
    </article>
  );
}
