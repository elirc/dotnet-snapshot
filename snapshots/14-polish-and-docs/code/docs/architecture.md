# Architecture

The final snapshot uses a layered TypeScript architecture:

- Domain: entities and enums only.
- Application: DTOs, service contracts, workflow services.
- Infrastructure: in-memory repositories, auth adapters, composition.
- API: Express controllers, routes, middleware.
- Frontend: route shell, pages, API client, resource hooks.

Controllers are intentionally thin. Business behavior lives in services, and persistence is accessed through repository contracts.
