# Changes in 14-polish-and-docs

- code/README.md - Added final codebase README.
- code/docs/api.md - Documented API behavior and role expectations.
- code/docs/architecture.md - Documented code organization.
- code/docs/retrospective.md - Added a final teaching retrospective.
- code/Dockerfile.api - Added API Dockerfile example.
- code/frontend/Dockerfile - Added frontend Dockerfile example.
- code/docker-compose.yml - Added Docker Compose example.
- code/.github/workflows/ci.yml - Added CI workflow example.
- code/CONTRIBUTING.md - Added contribution guidance.
- code/SECURITY.md - Added security guidance.
- code/CODEOWNERS - Added ownership metadata.

- code/frontend/src/app/api.ts - Wired login and bearer token handling so protected routes can actually call the API.
- code/frontend/src/app/App.tsx - Routed login outside the protected app shell and placed operational pages behind ProtectedRoute.
- code/backend/src/data/aiOpsCatalog.ts - Added final seed data for knowledge, agents, approvals, evals, and admin settings.
- code/backend/src/controllers/*KnowledgeDocuments/AgentRuns/Evals/AdminSettings* - Added lightweight final-snapshot API surfaces for the wider NetAiOps domain.
- code/backend/src/routes/*knowledge/agent/eval/admin* - Mounted protected routes for AI-ops and admin resources.
- code/frontend/src/pages/*KnowledgeBase/Agents/Evals/AdminUsers/AdminSettings* - Added polished final React pages for the broader operations platform.
