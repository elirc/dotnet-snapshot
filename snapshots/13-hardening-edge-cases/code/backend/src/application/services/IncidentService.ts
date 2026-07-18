import type { AddIncidentTimelineRequest, CreateIncidentRequest, IncidentDetailDto, IncidentSummaryDto } from '../dtos/incidentDtos';
import type { IncidentRepository } from '../repositories/IncidentRepository';
import type { Incident } from '../../domain/incident';
import { notFound } from '../../shared/AppError';

function toSummary(incident: Incident): IncidentSummaryDto {
  return {
    id: incident.id,
    title: incident.title,
    serviceName: incident.serviceName,
    status: incident.status,
    severity: incident.severity,
    linkedTicketIds: incident.linkedTicketIds,
    openedAt: incident.openedAt.toISOString()
  };
}

function toDetail(incident: Incident): IncidentDetailDto {
  return {
    ...toSummary(incident),
    summary: incident.summary,
    timeline: incident.timeline.map((event) => ({
      id: event.id,
      message: event.message,
      actorEmail: event.actorEmail,
      createdAt: event.createdAt.toISOString()
    }))
  };
}

export class IncidentService {
  constructor(private readonly incidents: IncidentRepository) {}

  async listIncidents() {
    return (await this.incidents.list()).map(toSummary);
  }

  async getIncident(id: string) {
    return toDetail(await this.requireIncident(id));
  }

  async createIncident(request: CreateIncidentRequest) {
    const now = new Date();
    const incident: Incident = {
      id: 'inc-' + crypto.randomUUID().slice(0, 8),
      title: request.title,
      summary: request.summary,
      serviceName: request.serviceName,
      severity: request.severity,
      status: 'Investigating',
      linkedTicketIds: request.linkedTicketIds,
      openedAt: now,
      timeline: [{ id: crypto.randomUUID(), incidentId: 'pending', actorEmail: 'system@netaiops.local', message: 'Incident opened', createdAt: now }]
    };
    incident.timeline[0].incidentId = incident.id;
    return toDetail(await this.incidents.create(incident));
  }

  async addTimelineEvent(id: string, request: AddIncidentTimelineRequest) {
    const incident = await this.requireIncident(id);
    incident.timeline.push({
      id: crypto.randomUUID(),
      incidentId: id,
      actorEmail: 'engineer@example.com',
      message: request.message,
      createdAt: new Date()
    });
    return toDetail(await this.incidents.save(incident));
  }

  // TODO(snapshot-07): move investigation workflows into OperationsService once agents and approvals exist.

  private async requireIncident(id: string) {
    const incident = await this.incidents.getById(id);
    if (!incident) {
      throw notFound('Incident');
    }
    return incident;
  }
}
