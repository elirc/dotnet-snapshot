import type { ApiEnvelope, DashboardSummary, TicketDetailDto, TicketSummaryDto } from '@netaiops/shared/src/types';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:4000';

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(API_BASE_URL + path, {
    ...init,
    headers: { 'Content-Type': 'application/json', ...(init?.headers ?? {}) }
  });
  if (!response.ok) {
    throw new Error('Request failed with status ' + response.status);
  }
  return response.json() as Promise<T>;
}

export const api = {
  async getDashboardSummary() {
    const envelope = await request<ApiEnvelope<DashboardSummary>>('/api/dashboard/summary');
    return envelope.data;
  },
  async listTickets() {
    const envelope = await request<ApiEnvelope<TicketSummaryDto[]>>('/api/tickets');
    return envelope.data;
  },
  async getTicket(id: string) {
    const envelope = await request<ApiEnvelope<TicketDetailDto>>('/api/tickets/' + id);
    return envelope.data;
  },
  async createTicket(input: { title: string; description: string; priority: string; category: string }) {
    const envelope = await request<ApiEnvelope<TicketDetailDto>>('/api/tickets', {
      method: 'POST',
      body: JSON.stringify(input)
    });
    return envelope.data;
  }
};
