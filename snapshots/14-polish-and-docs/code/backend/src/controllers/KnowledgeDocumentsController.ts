import type { Router } from 'express';
import { knowledgeDocuments } from '../data/aiOpsCatalog';
import { asyncHandler } from '../shared/asyncHandler';

export class KnowledgeDocumentsController {
  register(router: Router) {
    router.get('/', asyncHandler(async (_req, res) => {
      res.json({ data: knowledgeDocuments });
    }));
  }
}
