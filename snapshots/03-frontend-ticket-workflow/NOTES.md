# 03 Frontend Ticket Workflow

## Goal
Connect the Ticket backend to a usable React workflow: list, detail, create, and refresh.

## What changed and why
The UI gains navigation, ticket pages, API client functions, and simple loading states. The dashboard links into the operational queue rather than standing alone.

## Key decisions
- Use page-level fetching first because it is transparent to a junior reader; query caching is deferred until the pain is visible.
- Use simple forms before React Hook Form because validation has not been introduced yet.
- Keep route definitions near App so the navigation model is easy to trace.

## Deferred on purpose
Validation and consistent error rendering are rough. Snapshot 04 formalizes both.

## Where to look
- code/frontend/src/app/App.tsx
- code/frontend/src/app/api.ts
- code/frontend/src/pages/TicketsPage.tsx
- code/frontend/src/pages/TicketDetailPage.tsx
- code/frontend/src/pages/CreateTicketPage.tsx

## Predict before you read
Predict what duplicate state or fetch boilerplate this snapshot will create that a later refactor can remove.

## Skills introduced
- data fetching
- React Router
- controlled form
- list-detail workflow
