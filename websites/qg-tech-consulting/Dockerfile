# === Build stage ===
FROM node:22-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm ci --frozen-lockfile

COPY . .
RUN npm run build

# === Production stage (Nginx ultra-léger) ===
FROM nginx:alpine AS runner

# Copie les fichiers statiques générés par Astro
COPY --from=builder /app/dist /usr/share/nginx/html

# Configuration Nginx optimisée pour Astro / Starlight
COPY <<EOF /etc/nginx/conf.d/default.conf
server {
    listen 80;
    server_name _;
    root /usr/share/nginx/html;
    index index.html;

    # Gestion des URLs propres (sans .html)
    location / {
        try_files \$uri \$uri.html \$uri/ /index.html;
    }

    # Cache agressif pour les assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff2?)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Sécurité basique
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
}
EOF

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]