<template>
  <a-layout style="min-height: 100vh">
    <a-layout-header style="display:flex;position: absolute; top: 0; left: 0; right: 0;">
        <div class="logo">阿如的混乱空间</div>
        <a-menu theme="dark" mode="horizontal" :defaultSelectedKeys="['1']">
          <a-menu-item class="menu-item" key="1">首页</a-menu-item>
          <a-menu-item class="menu-item" key="2">云盘</a-menu-item>
          <a-menu-item class="menu-item" key="3">我的</a-menu-item>
        </a-menu>
    </a-layout-header>  

      <a-layout-sider :collapsed="collapsed" collapsible @collapse="handleCollapse" width="200px" class="layout-container">
        <a-menu :defaultSelectedKeys="['2']" mode="inline">
          <a-menu-item @click=getList key="1" icon="user">
            文档管理
          </a-menu-item>
            <a-sub-menu key="sub1" a-icon="setting">
              <template v-slot:header>设置</template>
              <a-menu-item key="2">备忘录</a-menu-item>
              <a-menu-item key="3">日志</a-menu-item>
            </a-sub-menu>
          <a-menu-item @click=getList key="2" icon="user">
            云盘管理
          </a-menu-item>
        </a-menu>
      </a-layout-sider>

      <a-layout-content class="contentcss">
        <router-view>
          <a-button @click=showWarning>Click Me</a-button>
        </router-view>
      </a-layout-content>

      <a-layout-footer style="text-align: center">
        Ant Design ©2023 Created by Ant UED
      </a-layout-footer>
    </a-layout>
</template>

<script>
import axios from 'axios'
import { Button,Layout,Menu,Modal } from 'ant-design-vue';
export default{
  components: {
    'a-button':Button,
    'a-layout': Layout,
    'a-layout-sider': Layout.Sider,
    'a-layout-header': Layout.Header,
    'a-layout-content': Layout.Content,
    'a-menu': Menu,
    'a-menu-item': Menu.Item,
    'a-sub-menu': Menu.SubMenu
  },
  data() {

  },
  methods:{
    getList(){
      axios.post("/getDishes").then(res => {
        console.log(res)
      })
    },
    showWarning() {
      Modal.info({
        title: "告知",
        content: "平台开发中。",
        okText: "知道了"
      });
    }
  }
}
</script>

<style>
.logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
  color: white;
  font-size: 18px;
  line-height: 32px;
  text-align: center;
}
.menu-item {
  margin-right: 24px; /* 添加右边间隔 */
  margin-left: auto;
}
.layout-container {
  margin-top: 70px; /* 添加底部间隔 */
  margin-left:0;
}
.contentcss{
  margin-top: 70px; /* 添加底部间隔 */
  margin-left:0;
}
</style>
