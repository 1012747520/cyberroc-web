
<template>
  <div class="flex">
    <div class="w-screen ">
      <div class="w-full flex bg-gray-200 ">
        <div class="bg-gray-200">
          <img class="w-32 ml-2" src="@/assets/inc/中国银行.svg" />
        </div>
        <div class="flex ml-36  items-center">
          <div>
            <button class="h-10 bg-gray-500 text-gray-100 py-1 px-4 rounded-md ml-auto">数据分析</button>
          </div>
        </div>
      </div> 
    </div>
  </div>
  <div class="flex">
    <div class="w-48 h-screen bg-gray-100 flex">
      <nav>
        <ul class="justify-between mt-10 ">
         <li class="py-4 px-5 hover:bg-gray-300 text-gray-700 text-md">
            <div class="flex items-center ml-0">
              <img src="@/assets/inc/bars.svg" class="ml-2 w-4">
              <a href="/center" class="block ml-2 -mt-2">个人首页</a >
            </div>
         </li>
         <li class="py-4 px-5 hover:bg-gray-300 text-gray-700 text-md">
           <div class="flex items-center ml-0">
              <img src="@/assets/inc/bars.svg" class="ml-2 w-4">
              <a href="/statisticstable" class="block ml-2 -mt-2">调度配置</a >
            </div>
         </li>
         <li class="py-4 px-5 hover:bg-gray-300 text-gray-700 text-md">
           <div class="flex items-center ml-0">
              <img src="@/assets/inc/bars.svg" class="ml-2 w-4">
              <a href="/center" class="block ml-2 -mt-2">文件管理</a >
            </div>
         </li>
         <li class="py-4 px-5 hover:bg-gray-300 text-gray-700 text-md">
           <div class="flex items-center ml-0">
              <img src="@/assets/inc/bars.svg" class="ml-2 w-4">
              <a href="/center" class="block ml-2 -mt-2">备用模块</a >
            </div>
         </li>
       </ul>
      </nav>
    </div>
    <div class="bg-white-100 w-full justify-center items-center h-screen "> 
          <router-view></router-view>
    </div> 
  </div>   
</template>

<script>
export default {
  data() {
    return {
      links: [
        { text: '首页', route: '/' },
        { text: '登', route: '/statisticstable' },
        { text: '注', route: '/apptemplate' },
        { text: '改', route: '/apptemplate' },
      ],
    }
  },
  methods: {
    
  },
};
</script>
