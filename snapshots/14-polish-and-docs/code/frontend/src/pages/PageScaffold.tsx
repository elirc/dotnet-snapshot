import { ReactNode } from 'react';

export function PageScaffold({ title, children }: { title: string; children: ReactNode }) {
  return (
    <main className="page">
      <header className="page-header">
        <h1>{title}</h1>
      </header>
      {children}
    </main>
  );
}
