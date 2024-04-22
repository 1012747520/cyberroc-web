<template>
  <!--登录弹窗-->  
  <div class="h-screen bg-sky-900">
    <div class="flex items-center justify-center min-h-screen">
      <!-- 弹窗的白色背景-->
      <div class="items-center justify-center  bg-white z-50  p-8 sm:p-12 md:max-w-md lg:max-w-2xl">
        <!--员工登录四个字的背景块-->
        <div class="bg-white rounded-md shadow-md h-10 w-72">
          <h2 class="text-2xl font-medium leading-6 text-gray-900 text-center">用户注册</h2>
        </div>
        <!-- 登录表单 -->
        <form @submit.prevent="onSubmit" class="mt-6 space-y-6">
          <div>
            <label for="employee-id" class="block text-sm font-medium text-gray-700">*员工号</label>
            <input v-model="id" type="text" id="employee-id" class="mt-1 border-b-2 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 block w-full py-2 pl-3 pr-10 sm:text-sm border-gray-300 rounded-md" placeholder="请输入您的员工号">
            <div v-if="emptyId" class="text-red-500 text-sm">员工号不能为空</div>
          </div>

          <div>
            <label for="password" class="block text-sm font-medium text-gray-700">*密码</label>
            <input v-model="password" type="password" id="password" class="mt-1 border-b-2 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 block w-full py-2 pl-3 pr-10 sm:text-sm border-gray-300 rounded-md" placeholder="请输入您的密码">
            <div v-if="emptyPassword" class="text-red-500 text-sm">密码不能为空</div>
          </div>

          <div>
            <label for="nick-name" class="block text-sm font-medium text-gray-700">*昵称</label>
            <input  v-model="nickname" type="text" id="nick-name" class="mt-1 border-b-2 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 block w-full py-2 pl-3 pr-10 sm:text-sm border-gray-300 rounded-md" placeholder="请输入您的昵称">
            <div v-if="emptyNickName" class="text-red-500 text-sm">昵称不能为空</div>
          </div>

          <div class="relative inline-block text-left w-full"> 
            <label for="question-one" class="block text-sm font-medium text-gray-700">*备忘问题</label>
            <div class="relative w-full">
              <input 
                type="text" 
                id = "question-one"
                v-model="questionOne" 
                :class="{ 'text-gray-400 placeholder-shown': !selectedOption}" 
                class="mt-1 border-b-2 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 block w-full py-2 pl-3 pr-10 sm:text-sm border-gray-300 rounded-md"
                placeholder="请选择您的备忘问题"
                readonly
              />
                <div @click="toggleDropdown" 
                  :class="{'rotate-180':dropdownOpen}"
                  class="absolute inset-y-0 right-0 flex items-center pr-2  ">
                  <img src="@/assets/inc/arrow_more.png" class="mt-0.5 -mr-1.5 pointer-events-auto "/>
                </div>
            </div>
            <div v-if="emptyQuestionOne" class="text-red-500 text-sm">备忘问题不能为空</div>
            <div
              v-show="dropdownOpen"
              class="absolute z-10 mt-1 bg-white rounded shadow-md w-full max-h-60 overflow-auto border border-gray-200"
              style="width: inherit"
              >
                  <ul class="py-1 text-sm leading-5">
                    <li
                     v-for="(option,index) in options"
                     :key="index"
                     @click="selectOption(option)"
                     class="cursor-pointer hover:bg-gray-100 block px-4 py-2 text-left no-underline">
                      {{option}}
                    </li>
                  </ul>
            </div>
          </div>

          <div>
            <label for="answer-one" class="block text-sm font-medium text-gray-700">*答案</label>
            <input   v-model="answerOne"  type="text" id="answer-one" class="mt-1 border-b-2 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 block w-full py-2 pl-3 pr-10 sm:text-sm border-gray-300 rounded-md" placeholder="请输入您的答案">
            <div v-if="emptyAnswerOne" class="text-red-500 text-sm">答案不能为空</div>
          </div>

          
          <div>
            <label for="question-two" class="block text-sm font-medium text-gray-700">自定义备忘问题</label>
            <input   v-model="questionTwo" type="text" id="question-two" class="mt-1 border-b-2 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 block w-full py-2 pl-3 pr-10 sm:text-sm border-gray-300 rounded-md" placeholder="请输入一个备忘问题">
          </div>

          <div>
            <label for="answer-two" class="block text-sm font-medium text-gray-700">答案</label>
            <input  v-model="answerTwo"  type="text" id="answer-two" class="mt-1 border-b-2 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 block w-full py-2 pl-3 pr-10 sm:text-sm border-gray-300 rounded-md" placeholder="请输入您的答案">
          </div>

          <div class="flex justify-between">
            <a href="#" @click.prevent="backToLoginPage" class="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-indigo-600 bg-white border border-indigo-600 rounded-md hover:bg-indigo-50 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
              返回
            </a >
            <button type="submit" class="inline-flex items-center justify-center px-4 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              注册
            </button>
        
          </div>
        </form>
      </div>
    </div>
  </div>
</template>  
    
<script>  
import md5 from 'md5'
import {signup} from '@/api/api'
export default {
  data(){
    return {
      id: '',
      password:'',
      nickname:'',
      answerOne:'',
      answerTwo:'',
      questionOne:'',
      questionTwo:'',
      encryptedpw: '',
      encryptedAO: '',
      encryptedAT: '',
      dropdownOpen: false,
      selectedOption: null,
      options:['您小学位于哪个区？','您母亲的星座是？','您上一个手机号是？'],
      //控制提示词
      checkAllIsOk:false,
      emptyId:false,
      emptyPassword:false,
      emptyNickName:false,
      emptyQuestionOne:false,
      emptyAnswerOne:false,
    }
  },
  created() {
    console.log('进入了注册页面')
  }, 
  methods: {
    backToLoginPage(){
      this.$router.push({ path: '/login' }).catch(() => {
            })
    },
    toggleDropdown(){
      this.dropdownOpen = !this.dropdownOpen
    },
    selectOption(option){
      this.selectedOption = option;
      document.getElementById('question-one').value = option;
      this.questionOne = option;
      this.dropdownOpen = false;
    },
    //校验表单上的必填项是否都填了
    checkIsEmpty(){
      if (this.id === undefined || this.id ===null ||this.id === ''){
          this.emptyId = true
          this.checkAllIsOk = false
          console.log('emptyId')
          return ;
      }else this.emptyId = false;
      if (this.password === undefined || this.password ===null ||this.password === ''){
          this.emptyPassword = true
          this.checkAllIsOk = false
          console.log('emptyPassword')
          return ;
      }else this.emptyPassword = false;
      if (this.nickname === undefined || this.nickname ===null ||this.nickname === ''){
          this.emptyNickName = true
          this.checkAllIsOk = false
          console.log('emptyNickName')
          return ;
      }else this.emptyNickName = false;
      if (this.questionOne === undefined || this.questionOne ===null ||this.questionOne === ''){
          this.emptyQuestionOne = true
          this.checkAllIsOk = false
          console.log('emptyQuestionOne')
          return ;
      }else this.emptyQuestionOne = false;
      if (this.answerOne === undefined || this.answerOne ===null ||this.answerOne === ''){
          this.emptyAnswerOne = true
          this.checkAllIsOk = false
          console.log('emptyAnswerOne')
          return ;
      }else this.emptyAnswerOne = false;
      this.checkAllIsOk = true;
      console.log('内容填写格式校验通过')
    },
    //提交注册表单
    onSubmit(){
      this.checkAllIsOk = false;
      this.checkIsEmpty();
      if(this.checkAllIsOk==true){
        this.encryptedpw = md5(this.password);
        this.encryptedAO = md5(this.answerOne);
        if(this.answerTwo === undefined || this.answerTwo ===null ||this.answerTwo === ''){
            this.encryptedAT = md5(this.answerTwo);
        }
        let param = {
          id:this.id,
          password:this.encryptedpw,
          nickname:this.nickname,
          questionOne:this.questionOne,
          answerOne:this.encryptedAO,
          questionTwo:this.questionTwo,
          answerTwo:this.encryptedAT
        }
        console.log(param)
        signup(param).then((res) => {
          if(res.data.code===200){
            console.log('注册成功')
            this.$message.success('注册成功，5秒后自动跳转登录页面');
            let countDown = 5 //倒计时五秒然后自动跳转页面
            const timeId = setInterval(() => {
              if(countDown===0){
                this.backToLoginPage()
                console.log('跳转到登录页面')
                clearInterval(timeId)
              }else {
                countDown--
                if(countDown==1){
                  this.$message.success('注册成功，即将跳转页面');
                } 
              }
            },1000)
          }else {
            console.log('注册失败： '+res.data.message)
            this.$message.error(res.data.message)
          }
        })
      }
    },
  } 
  }
</script>

<style scoped>
.rotate-180 {
  transform:rotate(180deg);
}
</style>