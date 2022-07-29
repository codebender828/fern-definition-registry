FROM node:18.1.0-alpine

ARG DATABASE_URL
ENV DATABASE_URL=$DATABASE_URL

COPY bundle.js /bundle.js
COPY schema.prisma /schema.prisma
COPY init.sh /init.sh
RUN mkdir -p "/opt/var/data"

ENTRYPOINT ["sh", "/init.sh"]