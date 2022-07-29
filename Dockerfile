FROM node:18.1.0-alpine

ARG DATABASE_URL
ENV DATABASE_URL=$DATABASE_URL

COPY package.json /app/package.json
COPY tsconfig.json /app/tsconfig.json
COPY .npmrc /app/.npmrc
COPY prisma/ /app/prisma
RUN cd app && npm install
COPY src/ /app/src

RUN cd app && npm run compile

ENTRYPOINT ["node", "--experimental-modules", "--es-module-specifier-resolution=node", "lib/server.js"]