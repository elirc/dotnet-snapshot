import type { Incident } from '../../domain/incident';

export interface IncidentRepository {
  list(): Promise<Incident[]>;
  getById(id: string): Promise<Incident | undefined>;
  create(incident: Incident): Promise<Incident>;
  save(incident: Incident): Promise<Incident>;
}
