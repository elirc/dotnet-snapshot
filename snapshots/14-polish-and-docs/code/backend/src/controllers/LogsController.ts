import type { Router } from 'express';
import { memoryStore } from '../data/memoryStore';
import { normalizePage, paginate } from '../application/dtos/queryDtos';
import { asyncHandler } from '../shared/asyncHandler';

export class LogsController {
  register(router: Router) {
    router.get('/', asyncHandler(async (req, res) => {
      const page = normalizePage(req.query);
      const search = page.search?.toLowerCase();
      const items = memoryStore.logs.filter((log) => {
        const matchesSearch = !search || log.message.toLowerCase().includes(search) || log.traceId.toLowerCase().includes(search);
        const matchesService = !page.serviceName || log.serviceName === page.serviceName;
        return matchesSearch && matchesService;
      }).map((log) => ({ ...log, timestamp: log.timestamp.toISOString() }));
      res.json({ data: paginate(items, page) });
    }));
  }
}
