export function EmptyState({ title, body }: { title: string; body: string }) {
  return <div className="state"><strong>{title}</strong><p>{body}</p></div>;
}

export function ErrorState({ message }: { message: string }) {
  return <div className="state state-error" role="alert"><strong>Something went wrong</strong><p>{message}</p></div>;
}
