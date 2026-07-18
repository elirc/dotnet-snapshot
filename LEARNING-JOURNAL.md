# NetAiOps Learning Journal

## Project overview
NetAiOps is a teaching artifact for learning how a production-shaped full-stack operations platform comes together. The domain includes tickets, incidents, logs, auth/RBAC, operational workflows, observability, testing, performance, and hardening. The code is realistic in organization and naming, but it is intentionally simulated and does not need to compile.

## Snapshot index
- 00 [00-walking-skeleton](snapshots/00-walking-skeleton/NOTES.md) - Prove that the backend and frontend can communicate around one NetAiOps dashboard concept before any deep modeling work begins.
- 01 [01-domain-and-persistence](snapshots/01-domain-and-persistence/NOTES.md) - Turn the first real business noun, Ticket, into a domain entity with a repository boundary.
- 02 [02-backend-ticket-crud](snapshots/02-backend-ticket-crud/NOTES.md) - Make Ticket a real backend feature with controller, service, repository, and route responsibilities separated.
- 03 [03-frontend-ticket-workflow](snapshots/03-frontend-ticket-workflow/NOTES.md) - Connect the Ticket backend to a usable React workflow: list, detail, create, and refresh.
- 04 [04-validation-and-errors](snapshots/04-validation-and-errors/NOTES.md) - Make bad input and operational failures predictable across the API and UI.
- 05 [05-incidents-and-relationships](snapshots/05-incidents-and-relationships/NOTES.md) - Add Incident as a second entity and show how it relates to Tickets and timeline events.
- 06 [06-auth-and-authorization](snapshots/06-auth-and-authorization/NOTES.md) - Introduce identity, roles, protected routes, and role-aware UI affordances.
- 07 [07-service-refactor](snapshots/07-service-refactor/NOTES.md) - Revisit earlier choices once duplication is visible and extract a cohesive operations facade.
- 08 [08-frontend-data-maturity](snapshots/08-frontend-data-maturity/NOTES.md) - Make the React app behave like an operations tool under latency, empty states, and small mutations.
- 09 [09-testing-harness](snapshots/09-testing-harness/NOTES.md) - Add enough tests to show how a production team protects service rules, endpoints, and UI states.
- 10 [10-observability-and-config](snapshots/10-observability-and-config/NOTES.md) - Make runtime behavior diagnosable with configuration, structured logs, and correlation IDs.
- 11 [11-performance-n-plus-one](snapshots/11-performance-n-plus-one/NOTES.md) - Show a realistic performance mistake, measure it, and replace it with a batched query.
- 12 [12-search-filter-pagination](snapshots/12-search-filter-pagination/NOTES.md) - Add a feature that crosses the whole stack and makes large operational data usable.
- 13 [13-hardening-edge-cases](snapshots/13-hardening-edge-cases/NOTES.md) - Handle failure modes that appear after the happy path works: abuse, auth expiry, UI crashes, and accessibility.
- 14 [14-polish-and-docs](snapshots/14-polish-and-docs/NOTES.md) - Finish the teaching codebase with navigable documentation, API notes, Docker/CI examples, and a retrospective.

## Skills to snapshot map
- accessibility: 13 13-hardening-edge-cases
- API contract: 00 00-walking-skeleton
- API error model: 04 04-validation-and-errors
- append-only history: 05 05-incidents-and-relationships
- batch loading: 11 11-performance-n-plus-one
- bounded list endpoint: 12 12-search-filter-pagination
- cache invalidation: 08 08-frontend-data-maturity
- CI pipeline: 14 14-polish-and-docs
- client-side caching: 08 08-frontend-data-maturity
- component test: 09 09-testing-harness
- controlled form: 03 03-frontend-ticket-workflow
- correlation ID: 10 10-observability-and-config
- cross-resource UI: 05 05-incidents-and-relationships
- CRUD endpoint: 02 02-backend-ticket-crud
- current-user context: 06 06-auth-and-authorization
- data fetching: 03 03-frontend-ticket-workflow
- Docker Compose: 14 14-polish-and-docs
- domain model: 01 01-domain-and-persistence
- DTO design: 01 01-domain-and-persistence
- DTO shaping: 11 11-performance-n-plus-one
- empty state: 04 04-validation-and-errors
- entity relationship: 05 05-incidents-and-relationships
- env config: 10 10-observability-and-config
- error boundary: 13 13-hardening-edge-cases
- facade service: 07 07-service-refactor
- global error middleware: 04 04-validation-and-errors
- health check: 10 10-observability-and-config
- in-memory fixture data: 00 00-walking-skeleton
- input validation: 04 04-validation-and-errors
- integration test: 09 09-testing-harness
- JWT authentication: 06 06-auth-and-authorization
- list-detail workflow: 03 03-frontend-ticket-workflow
- loading state: 08 08-frontend-data-maturity
- monorepo structure: 00 00-walking-skeleton
- N+1 query: 11 11-performance-n-plus-one
- operational logs: 12 12-search-filter-pagination
- optimistic updates: 08 08-frontend-data-maturity
- pagination: 12 12-search-filter-pagination
- performance measurement: 11 11-performance-n-plus-one
- persistence boundary: 01 01-domain-and-persistence
- protected route: 06 06-auth-and-authorization
- rate limiting: 13 13-hardening-edge-cases
- RBAC: 06 06-auth-and-authorization
- React Router: 03 03-frontend-ticket-workflow
- refactoring: 07 07-service-refactor
- repository abstraction: 01 01-domain-and-persistence
- retrospective: 14 14-polish-and-docs
- reusable API hook: 07 07-service-refactor
- search/filter: 12 12-search-filter-pagination
- security headers: 13 13-hardening-edge-cases
- service layer: 02 02-backend-ticket-crud
- shared middleware: 07 07-service-refactor
- status transition: 02 02-backend-ticket-crud
- structured logging: 10 10-observability-and-config
- technical documentation: 14 14-polish-and-docs
- test fixture: 09 09-testing-harness
- thin controllers: 02 02-backend-ticket-crud
- timeline event: 05 05-incidents-and-relationships
- unit testing: 09 09-testing-harness
- walking skeleton: 00 00-walking-skeleton

## Study loop
1. Read the Goal in the snapshot `NOTES.md`.
2. Answer “Predict before you read” in your own words.
3. Explore `code/` using “Where to look”.
4. Diff against the previous snapshot in VSCode: select both folders, right-click, Compare Selected.
5. Check the Key decisions against your prediction and write down what surprised you.

## Architecture conventions
- Backend: TypeScript Node with Express-style controllers, services, repositories, middleware, and composition.
- Frontend: React with route pages, protected layout, API client, simple cache hook, and operational table/form UI.
- Shared package: DTOs that define the contract between frontend and backend.
- Snapshots: plain folders only; no git history is required.
