# 14 Polish And Docs

## Goal
Finish the teaching codebase with navigable documentation, API notes, Docker/CI examples, and a retrospective.

## What changed and why
The final snapshot adds codebase docs, API examples, Dockerfiles, compose config, CI workflow, contribution/security notes, and a retrospective that names tradeoffs.

## Key decisions
- Document architecture in the repo because a teaching artifact should explain where to start.
- Include CI and Docker as realistic production artifacts while noting this simulated codebase is not guaranteed to compile.
- End with a retrospective because production engineering includes explaining what changed and why.

## Deferred on purpose
Nothing in the teaching spine remains deferred; future work is listed as optional extensions.

## Where to look
- code/README.md
- code/docs/api.md
- code/docs/architecture.md
- code/docker-compose.yml
- code/.github/workflows/ci.yml

## Predict before you read
Predict which docs a new teammate would need on their first day, then compare with the final README.

## Skills introduced
- technical documentation
- CI pipeline
- Docker Compose
- retrospective
