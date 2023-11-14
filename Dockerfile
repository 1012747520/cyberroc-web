#Dockerfile

#基础镜像
FROM nginx:latest

RUN rm /etc/nginx/conf.d/default.conf

# 拷贝 npm run build 之后的产物文件到对应的 nginx 目录
COPY dist/ /usr/share/nginx/html

# 拷贝配置文件到对应的 nginx 目录
COPY default.conf /etc/nginx/conf.d/default.conf


# 指定暴露容器端口 80
EXPOSE 80



