# landing/Dockerfile

# Stage 1: Build
FROM node:20 AS build-stage

WORKDIR /app

# Copia el package.json y package-lock.json (si existe)
COPY package*.json ./

RUN npm install

# Copia todo el proyecto
COPY . .

# Compila el proyecto (esto ejecutará el build que usará tsc --build)
RUN npm run build

# Stage 2: Servir con Nginx
FROM nginx:1

# Copia los archivos compilados a la carpeta que Nginx sirve
COPY --from=build-stage /app/dist/ /usr/share/nginx/html

# Copia la configuración de Nginx personalizada
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

