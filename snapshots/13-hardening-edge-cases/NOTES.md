# 13 Hardening Edge Cases

## Goal
Handle failure modes that appear after the happy path works: abuse, auth expiry, UI crashes, and accessibility.

## What changed and why
Login rate limiting, token expiry checks, security headers, error boundaries, focusable form controls, and accessibility notes are added.

## Key decisions
- Rate-limit login separately from normal API traffic because password guessing has a different risk profile.
- Use an ErrorBoundary around protected app content so one broken page does not blank the shell.
- Keep accessibility fixes as code changes instead of a checklist-only exercise.

## Deferred on purpose
The codebase now needs final documentation and polish. Snapshot 14 completes the learning artifact.

## Where to look
- code/backend/src/middleware/rateLimitMiddleware.ts
- code/backend/src/middleware/securityHeadersMiddleware.ts
- code/frontend/src/components/ErrorBoundary.tsx
- code/frontend/src/pages/LoginPage.tsx

## Predict before you read
Predict which error should log out the user automatically and which should just show a retry state.

## Skills introduced
- rate limiting
- security headers
- error boundary
- accessibility
