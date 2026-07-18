FROM node:22-alpine AS build
WORKDIR /app
COPY frontend ./frontend
COPY packages ./packages
WORKDIR /app/frontend
RUN npm install && npm run build

FROM nginx:1.27-alpine
COPY --from=build /app/frontend/dist /usr/share/nginx/html
