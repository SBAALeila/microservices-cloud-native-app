FROM node:16.15.1-alpine

LABEL maintainer="SBAA Leila <sbaaleila1@gmail.com>, OUSSEINI HASSANE Malika <ousseinimalika35@gmail.com>"
LABEL version="1.0"
LABEL description="Notre application microservices du miniprojet"

WORKDIR /app

# Installation des dépendances
COPY package*.json ./
COPY package-lock.json ./
RUN npm ci --only=production

# Installation de dumb-init
RUN apk add --no-cache dumb-init

# Copie des fichiers source
COPY . .

# Construire l'application React
RUN npm run build

# Installer un serveur web pour servir les fichiers statiques
RUN npm install -g serve

EXPOSE 3000

USER node

# Utilisation de dumb-init comme point d'entrée
ENTRYPOINT ["dumb-init", "--"]

CMD ["serve", "-s", "build"]
