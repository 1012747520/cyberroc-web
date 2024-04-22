import axios from 'axios';

let backURL = process.env.VUE_APP_BASE_API;
console.log('backurlis: '+backURL)
const service = axios.create({
    baseURL: backURL ,
    timeout: 60000 //请求超时时间  
})

export {
    service as axios
}