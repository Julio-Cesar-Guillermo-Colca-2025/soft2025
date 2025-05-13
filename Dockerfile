# Usa una imagen de nginx para servir archivos estáticos
FROM nginx:alpine

# Copia los archivos al directorio de Nginx
COPY . /usr/share/nginx/html

# Expone el puerto 80
EXPOSE 80
