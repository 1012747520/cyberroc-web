
FROM nginx:1.21.0-alpine
LABEL Author teddy
COPY dist /usr/share/nginx/html