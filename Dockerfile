# Imagen base con Node.js
FROM node:18-alpine

# Establecer directorio de trabajo
WORKDIR /app

# Instalar dependencias del sistema necesarias
RUN apk add --no-cache \
    git \
    python3 \
    make \
    g++

# Copiar archivos de configuración de backend
COPY backend/package*.json ./backend/
COPY backend/jest.config.js ./backend/

# Instalar dependencias de backend
WORKDIR /app/backend
RUN npm install

# Copiar el código fuente
COPY backend/src ./src
COPY backend/tests ./tests

# Volver al directorio raíz
WORKDIR /app

# Exponer puertos
EXPOSE 3000 3001

# Comando por defecto para desarrollo
CMD ["cd", "backend", "&&", "npm", "run", "test:watch"]
