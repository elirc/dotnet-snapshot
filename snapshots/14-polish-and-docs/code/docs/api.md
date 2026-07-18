# API Notes

All API responses use `{ data }` for success or `{ error: { code, message, details } }` for failure.

## Auth

`POST /api/auth/login` accepts `email` and `password`. Seed users all use `Password123!`.

## Operations

- `GET /api/tickets`
- `POST /api/tickets`
- `PATCH /api/tickets/:id/status`
- `GET /api/incidents`
- `POST /api/incidents/:id/timeline`
- `GET /api/logs?search=&page=&pageSize=`

Admin and Engineer roles can run sensitive operational workflows. Viewer can read protected resources only where allowed.
