FROM node:18.1.0-alpine AS builder

ARG DATABASE_URL
ENV DATABASE_URL=$DATABASE_URL

COPY package.json .npmrc tsconfig.json /app/
COPY prisma/ /app/prisma
RUN cd app && npm install
COPY src/ /app/src
RUN cd app && npm run compile

ENTRYPOINT ["node", "--experimental-modules", "--es-module-specifier-resolution=node", "/app/lib/server.js"]