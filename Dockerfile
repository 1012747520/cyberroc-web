
#基础镜像
FROM nginx:latest

#设置工作路径
#WORKDIR /app 

#作者声明
#LABEL Author teddy

#复制应用程序代码到容器中
COPY dist /usr/share/nginx/html

#暴露端口
#EXPOSE 80 

##设置环境变量
#ENV NODE_ENV=production

