import { useEffect, useState } from 'react';
import { queryClient } from './queryClient';

export type ApiResource<T> = {
  data?: T;
  error?: string;
  isLoading: boolean;
  reload: () => void;
};

export function useApiResource<T>(key: string, load: () => Promise<T>, dependencies: unknown[] = []): ApiResource<T> {
  const [data, setData] = useState<T | undefined>();
  const [error, setError] = useState<string | undefined>();
  const [version, setVersion] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    setIsLoading(true);
    queryClient.fetchQuery(key, load)
      .then((value) => { if (!cancelled) { setData(value); setError(undefined); } })
      .catch((err) => { if (!cancelled) setError(err.message); })
      .finally(() => { if (!cancelled) setIsLoading(false); });
    return () => { cancelled = true; };
  }, [key, version, ...dependencies]);

  return {
    data,
    error,
    isLoading,
    reload: () => {
      queryClient.invalidate(key);
      setVersion((value) => value + 1);
    }
  };
}
