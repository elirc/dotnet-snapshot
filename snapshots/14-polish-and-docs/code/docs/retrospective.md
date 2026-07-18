# Retrospective

The codebase starts with one end-to-end slice, then grows domain boundaries before adding CRUD. That order makes later refactors meaningful because the reader can see the pressure that caused them.

Tradeoffs kept visible:

- In-memory repositories keep the artifact navigable but stand in for real PostgreSQL persistence.
- Demo auth explains JWT/RBAC flow without production cryptography.
- The query cache teaches data freshness concepts without hiding behavior behind a large library.

Future extensions: real database migrations, outbox retries, agent evaluation workflows, and browser-level end-to-end tests.
