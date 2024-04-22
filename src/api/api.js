import {postAction} from '@/api/manage'

const signup = (params) => postAction('/systemservice/userManage/register',params);
const login = (params) => postAction('/systemservice/userManage/login',params);
const changepassword = (params) => postAction('/update',params)

export {
    signup,
    login,
    changepassword
}