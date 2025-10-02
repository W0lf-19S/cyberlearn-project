# Dockerfile (CORREGIDO)
FROM node:18-alpine

WORKDIR /app

RUN apk add --no-cache \
    git \
    python3 \
    make \
    g++

COPY backend/package*.json ./backend/
COPY backend/jest.config.js ./backend/

WORKDIR /app/backend
RUN npm install

WORKDIR /app
COPY backend/src ./backend/src
COPY backend/tests ./backend/tests

EXPOSE 3000 3001

# COMANDO CORREGIDO:
CMD ["sh", "-c", "cd backend && npm run test:watch"]
