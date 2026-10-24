# ============================================
# ETAPA 1: Build
# ============================================
FROM node:24-alpine AS builder

WORKDIR /app

# Copiamos solo package.json primero para aprovechar el cache de capas
COPY package*.json ./
RUN npm ci

# Copiamos el resto del código
COPY . .

# Build de producción
RUN npm run build -- --configuration=production

# ============================================
# ETAPA 2: Runtime (nginx)
# ============================================
FROM nginx:1.27-alpine AS runtime

# Nuestra config custom
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiamos SOLO el output del build desde la etapa anterior
# Ajusta la ruta si tu angular.json tiene otro outputPath
COPY --from=builder /app/dist/hola-mundo-angular/browser /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -qO- http://localhost/health || exit 1

CMD ["nginx", "-g", "daemon off;"]
