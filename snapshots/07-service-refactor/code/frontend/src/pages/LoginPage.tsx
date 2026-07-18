import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../app/api';
import { authStore } from '../app/authStore';

export function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('engineer@example.com');
  const [password, setPassword] = useState('Password123!');
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    setError(null);
    try {
      const session = await api.login({ email, password });
      authStore.setSession(session);
      navigate('/');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
    }
  }

  return (
    <main className="login-page">
      <form className="login-card" onSubmit={onSubmit}>
        <h1>Sign in to NetAiOps</h1>
        {error && <p role="alert" className="form-error">{error}</p>}
        <label>Email<input value={email} onChange={(event) => setEmail(event.target.value)} /></label>
        <label>Password<input type="password" value={password} onChange={(event) => setPassword(event.target.value)} /></label>
        <button className="button" type="submit">Sign in</button>
      </form>
    </main>
  );
}
