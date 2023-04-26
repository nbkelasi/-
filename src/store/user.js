import { reqGetCode,reqUserRegister,reqUserLogin,reqUserInfo,reqLoginOut } from "@/api";
import { setToken,getToken,clearToken } from '@/utils/token';
const state = {
    code:'',
    token:getToken(),
    userInfo:{},
};
const mutations = {
    GETCODE(state,code){
        state.code = code;
    },
    USERLOGIN(state,token){
        state.token = token;
    },
    USERINFO(state,userInfo){
        state.userInfo = userInfo;
    },
    CLEARUSERINFO(state){
        state.userInfo = {};
        state.token = '';
        clearToken();
    }
};
const actions = {
    // 获取验证码
    async getCode({commit},phone){
        let result = await reqGetCode(phone);
        if(result.code == 200){
            commit('GETCODE',result.data);
            return 'ok';
        }else{
            return Promise.reject(new Error('failed'))
        }
    },
    // 用户注册
    async userRegister({commit},user){
        let result = await reqUserRegister(user);
        console.log(result);
        if(result.code == 200){
            return 'ok'
        }else{
            return Promise.reject(new Error(result.message))
        }
    },
    // 登录业务
    async userLogin({commit},data){
        let result = await reqUserLogin(data)
        if(result.code == 200){
            commit('USERLOGIN',result.data.token)
            if(result.data.token){
                setToken(result.data.token);
            } 
            
            return 'ok';
        }else{
            return Promise.reject(new Error(result.message))
        }
    },
    // 获取用户信息
    async getUserInfo({commit}){
        let result = await reqUserInfo()
        if(result.code == 200){
            commit('USERINFO',result.data);
            return 'ok'
        }else{
            return Promise.reject(new Error('failed'))
        }
    },
    // 退出登录
    async loginOut({commit}){
        let result = await reqLoginOut()
        if(result.code == 200){
            commit('CLEARUSERINFO');
            return 'ok';
        }else{
            return Promise.reject(new Error('failed'));
        }
    },
};
const getters ={};

export default{
    state,
    mutations,
    actions,
    getters
}