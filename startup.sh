#!/bin/sh

MIGRATION_STATUS=$(npx prisma migrate status)

if echo "$MIGRATION_STATUS" | grep -q "Database schema is up to date"; then
    npx prisma migrate deploy
    echo "No migrations needed."
else
    echo "Running migrations..."
    npx prisma migrate deploy
fi

npm run build && npm run start





