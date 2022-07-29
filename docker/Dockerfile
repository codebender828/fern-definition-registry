FROM node:18.1.0-alpine

ARG DATABASE_URL
ENV DATABASE_URL=$DATABASE_URL

COPY bundle.js /bundle.js
COPY schema.prisma /schema.prisma
RUN mkdir -p "/opt/var/data"

ENTRYPOINT ["node", "/bundle.js"]