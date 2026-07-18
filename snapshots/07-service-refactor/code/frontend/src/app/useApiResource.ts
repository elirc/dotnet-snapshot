import { useEffect, useState } from 'react';

export type ApiResource<T> = {
  data?: T;
  error?: string;
  isLoading: boolean;
  reload: () => void;
};

export function useApiResource<T>(load: () => Promise<T>, dependencies: unknown[] = []): ApiResource<T> {
  const [data, setData] = useState<T | undefined>();
  const [error, setError] = useState<string | undefined>();
  const [version, setVersion] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    setIsLoading(true);
    load()
      .then((value) => { if (!cancelled) { setData(value); setError(undefined); } })
      .catch((err) => { if (!cancelled) setError(err.message); })
      .finally(() => { if (!cancelled) setIsLoading(false); });
    return () => { cancelled = true; };
  }, [version, ...dependencies]);

  return { data, error, isLoading, reload: () => setVersion((value) => value + 1) };
}
