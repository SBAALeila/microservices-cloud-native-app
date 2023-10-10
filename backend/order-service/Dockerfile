FROM node:16.15.1-alpine
 
LABEL maintainer="SBAA Leila <sbaaleila1@gmail.com>, OUSSEINI HASSANE Malika <ousseinimalika35@gmail.com> "
LABEL version="1.0"
LABEL description="Notre application microservices du miniprojet"


WORKDIR /usr/src/app

# Installation des dépendances
COPY package*.json ./
RUN npm ci --only=production

# Installation de dumb-init
RUN apk add --no-cache dumb-init

# Vérification des vulnérabilités
RUN npm audit --production


COPY . .

EXPOSE 6000

USER node

# Utilisation de dumb-init comme point d'entrée
ENTRYPOINT ["dumb-init", "--"]

CMD ["npm", "start"]
