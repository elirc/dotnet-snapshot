import type { ApiEnvelope, DashboardSummary, IncidentDetailDto, IncidentSummaryDto, LoginResponse, TicketDetailDto, TicketSummaryDto } from '@netaiops/shared/src/types';
import { authStore } from './authStore';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:4000';

export class ApiError extends Error {
  constructor(public readonly status: number, message: string, public readonly code?: string) {
    super(message);
  }
}

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const session = authStore.getSnapshot();
  const response = await fetch(API_BASE_URL + path, {
    ...init,
    headers: {
      'Content-Type': 'application/json',
      ...(session.token ? { Authorization: 'Bearer ' + session.token } : {}),
      ...(init?.headers ?? {})
    }
  });
  if (!response.ok) {
    const body = await response.json().catch(() => undefined);
    throw new ApiError(response.status, body?.error?.message ?? 'Request failed', body?.error?.code);
  }
  return response.json() as Promise<T>;
}

export const api = {
  async login(input: { email: string; password: string }) {
    const envelope = await request<ApiEnvelope<LoginResponse>>('/api/auth/login', { method: 'POST', body: JSON.stringify(input) });
    return envelope.data;
  },
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
    const envelope = await request<ApiEnvelope<TicketDetailDto>>('/api/tickets', { method: 'POST', body: JSON.stringify(input) });
    return envelope.data;
  },
  async updateTicketStatus(id: string, status: string) {
    const envelope = await request<ApiEnvelope<TicketDetailDto>>('/api/tickets/' + id + '/status', { method: 'PATCH', body: JSON.stringify({ status }) });
    return envelope.data;
  },
  async listIncidents() {
    const envelope = await request<ApiEnvelope<IncidentSummaryDto[]>>('/api/incidents');
    return envelope.data;
  },
  async getIncident(id: string) {
    const envelope = await request<ApiEnvelope<IncidentDetailDto>>('/api/incidents/' + id);
    return envelope.data;
  }
};
