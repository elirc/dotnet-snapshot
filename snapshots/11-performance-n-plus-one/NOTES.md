# 11 Performance N Plus One

## Goal
Show a realistic performance mistake, measure it, and replace it with a batched query.

## What changed and why
The incident list previously fetched linked ticket summaries one incident at a time. A measurement note captures the problem, and repository/service code now batch-loads ticket summaries.

## Key decisions
- Fix the repository interface instead of hiding loops in the controller because performance belongs near data access.
- Keep a measurement script and comment so the junior sees why the refactor happened.
- Return summary DTOs instead of full tickets to avoid accidental payload growth.

## Deferred on purpose
Users still need richer ways to navigate the growing data set. Snapshot 12 adds search, filters, and pagination.

## Where to look
- code/backend/docs/performance-incident-list.md
- code/backend/src/application/repositories/TicketRepository.ts
- code/backend/src/application/services/OperationsService.ts

## Predict before you read
Predict how many repository calls happen when five incidents each link three tickets in the before version.

## Skills introduced
- N+1 query
- batch loading
- performance measurement
- DTO shaping
