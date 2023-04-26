import {reqAddressInfo,reqOrderInfo} from '@/api';
const state = {
    address:[],
    orderInfo:{},
};
const mutations = {
    GETUSERADDRESS(state,address){
        state.address = address;
    },
    GETORDERINFO(state,orderInfo){
        state.orderInfo = orderInfo;
    }
};
const actions = {
    // 获取用户地址信息
    async getUserAddress({commit}){
        const result = await reqAddressInfo();
        // console.log(result);
        if(result.code==200){
            commit('GETUSERADDRESS',result.data);
        }else{
            return Promise.reject(new Error('failed'))
        }
    },
    // 获取订单信息
    async getOrderInfo({commit}){
        const result = await reqOrderInfo();
        // console.log(result);
        if(result.code==200){
            commit('GETORDERINFO',result.data)
        }
    }
};
const getters = {};

export default {
    state,
    mutations,
    actions,
    getters
}