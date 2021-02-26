FROM node:14.15.0-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --silent
COPY . .
RUN npm run build

FROM caddy:2.2.1-alpine
WORKDIR /app
COPY Caddyfile /etc/caddy/Caddyfile
COPY --from=build /app/build ./
EXPOSE 8080
