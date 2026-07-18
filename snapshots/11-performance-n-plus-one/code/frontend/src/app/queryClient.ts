type CacheEntry<T> = {
  value?: T;
  promise?: Promise<T>;
};

const cache = new Map<string, CacheEntry<unknown>>();

export const queryClient = {
  async fetchQuery<T>(key: string, load: () => Promise<T>) {
    const existing = cache.get(key) as CacheEntry<T> | undefined;
    if (existing?.value) return existing.value;
    if (existing?.promise) return existing.promise;
    const promise = load().then((value) => {
      cache.set(key, { value });
      return value;
    });
    cache.set(key, { promise });
    return promise;
  },
  setQueryData<T>(key: string, value: T) {
    cache.set(key, { value });
  },
  invalidate(prefix: string) {
    for (const key of cache.keys()) {
      if (key.startsWith(prefix)) cache.delete(key);
    }
  }
};
