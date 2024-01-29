import {getAction,postAction} from '@/api/manage'

const sayHello = (params) => getAction("systemservice/sayHello",params);
const signup = (params) => postAction('/signup',params);
const login = (params) => postAction('/login',params);
const changepassword = (params) => postAction('/update',params)

export {
    sayHello,
    signup,
    login,
    changepassword
}