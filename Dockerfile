# Étape 1 : Utilise une image Node.js comme base
FROM node:18-alpine

# Étape 2 : Définit le répertoire de travail dans le conteneur
WORKDIR /app

# Étape 3 : Copie le package.json et package-lock.json
COPY package.json package-lock.json ./

# Étape 4 : Installe les dépendances
RUN npm install

# Étape 5 : Copie le reste des fichiers de l'application
COPY . .

# Étape 6 : Construis l'application pour la production
RUN npm run build

# Étape 7 : Utilise un serveur pour servir les fichiers de construction
# Ajoute un serveur HTTP léger pour servir l'application, ici on utilise `serve`
RUN npm install -g serve

# Étape 8 : Expose le port 8084
EXPOSE 8084

# Étape 9 : Commande pour démarrer l'application
CMD ["serve", "-s", "dist", "-l", "8084"]
