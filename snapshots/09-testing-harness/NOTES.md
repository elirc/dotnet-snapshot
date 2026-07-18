# 09 Testing Harness

## Goal
Add enough tests to show how a production team protects service rules, endpoints, and UI states.

## What changed and why
Unit tests cover ticket transitions and dashboard calculations. Integration-style tests document auth behavior, and component tests cover empty/error UI states.

## Key decisions
- Start with service tests because they are fast and stable; exhaustive browser coverage is deferred.
- Use test fixtures over shared mutable seed state to keep examples isolated.
- Document endpoint behavior with integration-style tests even if this teaching repo is not compiled.

## Deferred on purpose
Observability and runtime config are still too thin for production-like operations. Snapshot 10 adds them.

## Where to look
- code/backend/tests/TicketService.test.ts
- code/backend/tests/DashboardService.test.ts
- code/frontend/src/pages/TicketsPage.test.tsx

## Predict before you read
Predict the smallest test that proves invalid ticket status transitions are rejected.

## Skills introduced
- unit testing
- integration test
- component test
- test fixture
