import type { ApiEnvelope, DashboardSummary } from '@netaiops/shared/src/types';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:4000';

async function getJson<T>(path: string): Promise<T> {
  const response = await fetch(API_BASE_URL + path);
  if (!response.ok) {
    throw new Error('Request failed with status ' + response.status);
  }
  return response.json() as Promise<T>;
}

export const api = {
  async getDashboardSummary() {
    const envelope = await getJson<ApiEnvelope<DashboardSummary>>('/api/dashboard/summary');
    return envelope.data;
  }
};
