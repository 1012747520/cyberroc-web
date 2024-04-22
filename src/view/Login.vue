<template>
  <!--登录弹窗-->  
  <div class="h-screen bg-sky-900">
    <div class="flex items-center justify-center min-h-screen">
      <!-- 弹窗的白色背景-->
      <div class="items-center justify-center  bg-white z-50  max-w-md p-8 sm:p-12 md:max-w-md lg:max-w-2xl">
        <!--员工登录四个字的背景块-->
        <div class="bg-white rounded-md shadow-md h-10 w-72">
          <h2 class="text-2xl font-medium leading-6 text-gray-900 text-center">用户登录</h2>
        </div>
        <!-- 登录表单 -->
        <form @submit.prevent="onSubmit" class="mt-6 space-y-6">
          <div>
            <label for="employee-id" class="block text-sm font-medium text-gray-700">员工号</label>
            <input v-model="id" type="text" id="employee-id" class="mt-1 border-b-2 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 block w-full py-2 pl-3 pr-10 sm:text-sm border-gray-300 rounded-md" placeholder="请输入您的员工号">
            <div v-if="emptyId" class="text-red-500 text-sm">密码不能为空</div>
          </div>

          <div>
            <label for="password" class="block text-sm font-medium text-gray-700">密码</label>
            <input v-model="password" type="password" id="password" class="mt-1 border-b-2 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 block w-full py-2 pl-3 pr-10 sm:text-sm border-gray-300 rounded-md" placeholder="请输入您的密码">
            <div v-if="emptyPassword" class="text-red-500 text-sm">密码不能为空</div>
          </div>

          <div class="flex justify-between">
            <button type="submit" class="inline-flex items-center justify-center px-4 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              登录
            </button>
            <a href="#" @click.prevent="goToRegisterPage"  class="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-indigo-600 bg-white border border-indigo-600 rounded-md hover:bg-indigo-50 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
              注册
            </a>
          </div>
        </form>
        <div class="text-right text-[14px] mt-2 underline hover:font-bold cursor-pointer">忘记密码？</div>
      </div>
    </div>
  </div>
</template>  
    
<script>  
import md5 from 'md5'
import { login } from '@/api/api'
export default {  
  name: 'Login',  
  data(){
    return {
      id: '',
      password:'',
      encryptedpw: '',
      emptyPassword:false,
      emptyId:false,
      readyforaction:false
    }
  },
  methods: {
    goToRegisterPage(){
      this.$router.push({ path: '/register' }).catch(() => {
              // console.log('进入/dashboard/analysis')
            })
    },
    checkEmpty(){
      this.readyforaction = false 
      if (this.id === undefined || this.id ===null ||this.id === ''){
          this.emptyId = true
          this.readyforaction = false
          console.log('emptyId')
          return ;
      }else this.emptyId = false;
      if (this.password === undefined || this.password ===null ||this.password === ''){
          this.emptyPassword = true
          this.readyforaction = false
          console.log('emptyPassword')
          return ;
      }else this.emptyPassword = false;
      this.readyforaction = true;
      console.log('内容填写格式校验通过')
    },
    onSubmit(){
      //文本框是否都填了
      this.checkEmpty();
      if(this.readyforaction == true){
        this.encryptedpw = md5(this.password)
        let param = {
          id: this.id,
          password:this.encryptedpw
        }
        login(param).then((res)=>{
          if(res.data.code===200){
            console.log('登录成功')
            this.$message.success('登陆成功');
            this.$router.push({ path: '/layout' }).catch(() => {})
          }else {
            console.log('登录失败： '+res.data.message)
            this.$message.error(res.data.message)
          }
        })
      }
    }
  }
}
</script>
