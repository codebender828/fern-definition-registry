#!/bin/bash
cd "$(dirname "$0")"
cd ..
docker-compose -f src/__test__/compose-db.yml up -d

echo "Sleeping for 5s..."
sleep 5

yarn prisma migrate deploy

yarn jest -i

docker-compose -f src/__test__/compose-db.yml down