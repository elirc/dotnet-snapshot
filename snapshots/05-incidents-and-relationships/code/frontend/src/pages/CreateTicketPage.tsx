import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../app/api';

export function CreateTicketPage() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('High');
  const [category, setCategory] = useState('Incident');

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    const ticket = await api.createTicket({ title, description, priority, category });
    navigate('/tickets/' + ticket.id);
  }

  return (
    <main className="page">
      <h1>Create ticket</h1>
      <form className="stack" onSubmit={onSubmit}>
        <label>Title<input value={title} onChange={(event) => setTitle(event.target.value)} /></label>
        <label>Description<textarea value={description} onChange={(event) => setDescription(event.target.value)} /></label>
        <label>Priority<select value={priority} onChange={(event) => setPriority(event.target.value)}><option>Low</option><option>Medium</option><option>High</option><option>Critical</option></select></label>
        <label>Category<select value={category} onChange={(event) => setCategory(event.target.value)}><option>Access</option><option>Incident</option><option>Request</option><option>Change</option></select></label>
        <button className="button" type="submit">Create</button>
      </form>
    </main>
  );
}
