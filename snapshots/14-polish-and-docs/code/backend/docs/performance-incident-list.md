# Incident List Performance Note

## Before
The incident list enriched each incident by looping over linked ticket IDs and calling `getById` repeatedly.
With five incidents and three linked tickets each, that created fifteen ticket repository calls after the incident query.

## Measurement
A quick local instrumentation pass counted repository calls during `GET /api/incidents`:

- 2 incidents: 1 incident list call + 1 ticket lookup
- 5 incidents: 1 incident list call + 15 ticket lookups

## Fix
The repository now exposes `getByIds`, and `OperationsService` asks for all linked tickets in one batch before shaping summaries.
