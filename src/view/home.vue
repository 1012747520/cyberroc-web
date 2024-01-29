<template>  
  <a-layout>
    <a-layout-header class="nav-container">
        <A class="nav-links">  
          <li1><router-link to="/" class="router-link">首页</router-link></li1>  
          <li1><router-link to="/login" class="router-link">登录</router-link></li1>  
          <li1><router-link to="/register" class="router-link">注册</router-link></li1>  
        <li1><router-link to="/ChangePw" class="router-link">修改密码</router-link></li1>  
      </A>  
    </a-layout-header>
    <a-layout-content class="maincontent">
      <router-view class="router-view"></router-view>
    </a-layout-content>
    <a-layout-footer class="footer">
      <div class="footfont">服务备案号：	粤ICP备2023124940号-1</div>
    </a-layout-footer>
  </a-layout>
</template>  
    
<script>  
import { Layout } from 'ant-design-vue';
export default {  
  components: {
    'a-layout': Layout
  },
  name: 'Home',  
  };  
</script>

<style scoped>  
.nav-links {  
  align-items: center; /* 垂直居中 */  
  display: flex; /* 使用 Flexbox 布局 */  
  list-style-type: none;  /* 移除默认的列表样式 */  
  margin-top: 0;
  padding: 0;               /* 移除默认的内边距 */  
  overflow: hidden;         /* 隐藏超出容器的部分 */  
}  
.nav-links li {  
  float: left;               /* 设置为左浮动，实现水平排列 */  
}  

.router-link {  
  display: block; /* 将链接显示为块级元素 */  
  padding: 10px; /* 添加内边距 */  
  margin: 5px; /* 添加外边距 */  
  color: black;
  font-family: 'Microsoft YaHei';
  font-size: 19px;
}  
.nav-container {
  
  
  
  display: flex;  
  justify-content: center;  
  align-items: center;  
  height: 100px;  
  background-color: gainsboro  ; /* 酷炫的浅黑色背景 */  
}  
.router-view {  
  padding: 100px; /* 添加内边距 */  
  margin: 0; /* 添加外边距 */  
  margin-top: 1px;
  background-color: white; /* 添加背景色 */  
}  
.footer {
  background-color: gainsboro  ; /* 酷炫的浅黑色背景 */ 
  margin-top: 1px;
}
.maincontent{
  height: calc(100vh - 130px); /* 假设头部和底部总高度为100px，可以根据实际情况调整 */  
  overflow-y: auto; /* 如果内容超出高度，则显示滚动条 */  
}
.footfont{
  font-family: 'Microsoft YaHei';
  font-size: 12px;
  margin-left: 100px;
}
</style>