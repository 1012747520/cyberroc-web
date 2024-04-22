<template>  
  <div class="backgroud" style="height: 600px;">  
    <iframe 
      v-bind:src="reportUrl" 
      style="border:none" 
      :width="searchTableWidth"
      :height="searchTableHeight"> </iframe>
  </div>  
</template>  
  
<script>  
import { Button,Layout,Menu,Modal } from 'ant-design-vue';
export default {  
  name: 'backgroud',  
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
    return{
      reportUrl:'https://www.csdn.net',
      searchTableHeight: 0,
      searchTableWidth: 0
    };
  },
  methods:{
    showWarning() {
      Modal.info({
        title: "告知",
        content: "平台开发中。",
        okText: "知道了"
      });
    },
    widthHeight() {
      this.searchTableHeight = window.innerHeight -180;
      this.searchTableWidth = window.innerWidth - 230
    },
  },
  mounted() {
    window.onresize = () => {
      this.widthHeight(); // 自适应高宽度
    };
    this.$nextTick(function () {
      this.widthHeight();
    });
  },
  created() {
    // 从路由里动态获取 url地址   具体地址看libs下util.js里的 backendMenuToRoute  方法 
    this.reportUrl = 'https://www.csdn.net'
  },
  watch: {
    '$route': function () {
      // 监听路由变化
      this.reportUrl =  'https://www.csdn.net'
    }
  }
}
</script>  
  
<style lang="scss">  

</style>