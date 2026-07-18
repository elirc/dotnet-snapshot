import type { IncidentRepository } from '../../application/repositories/IncidentRepository';
import type { Incident } from '../../domain/incident';

export class InMemoryIncidentRepository implements IncidentRepository {
  constructor(private readonly incidents: Incident[]) {}

  async list() {
    return [...this.incidents].sort((a, b) => b.openedAt.getTime() - a.openedAt.getTime());
  }

  async getById(id: string) {
    return this.incidents.find((incident) => incident.id === id);
  }

  async create(incident: Incident) {
    this.incidents.push(incident);
    return incident;
  }

  async save(incident: Incident) {
    const index = this.incidents.findIndex((candidate) => candidate.id === incident.id);
    if (index >= 0) {
      this.incidents[index] = incident;
    }
    return incident;
  }
}
