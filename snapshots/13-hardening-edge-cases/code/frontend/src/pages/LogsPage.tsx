import { FormEvent, useState } from 'react';
import { api } from '../app/api';
import { useApiResource } from '../app/useApiResource';
import { ErrorState } from '../components/ApiState';

export function LogsPage() {
  const [search, setSearch] = useState('');
  const [submittedSearch, setSubmittedSearch] = useState('');
  const logs = useApiResource('logs:' + submittedSearch, () => api.searchLogs({ search: submittedSearch }), [submittedSearch]);

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    setSubmittedSearch(search);
  }

  return (
    <main className="page">
      <h1>Logs</h1>
      <form className="toolbar" onSubmit={onSubmit}>
        <label>Search logs<input value={search} onChange={(event) => setSearch(event.target.value)} /></label>
        <button className="button" type="submit">Search</button>
      </form>
      {logs.error && <ErrorState message={logs.error} />}
      {logs.isLoading ? <p>Loading logs...</p> : (
        <table>
          <thead><tr><th>Time</th><th>Service</th><th>Level</th><th>Message</th><th>Trace</th></tr></thead>
          <tbody>
            {(logs.data?.items ?? []).map((log) => (
              <tr key={log.id}><td>{log.timestamp}</td><td>{log.serviceName}</td><td>{log.level}</td><td>{log.message}</td><td>{log.traceId}</td></tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
}
