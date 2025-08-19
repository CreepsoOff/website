# Multi-stage Dockerfile to build and serve the Vite app

# Stage 1: build the application
FROM node:18-alpine AS build
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy source and build
COPY . .
RUN npm run build

# Stage 2: serve with a lightweight web server
FROM nginx:alpine

# Copy built assets from the previous stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 for the web server
EXPOSE 80

# Run nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]

