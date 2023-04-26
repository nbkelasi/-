import { reqGetSearchInfo } from "@/api"
//search模块的小仓库
const state ={
    searchList:{},
}
const mutations = {
    GETSEARCHINFO(state,searchList){
        state.searchList = searchList
    }
}
const actions = {
    //获取search模块数据 //params至少是个空对象
    async getSearchInfo({commit},params){
        let result = await reqGetSearchInfo(params);
        if(result.code ==200){
            commit('GETSEARCHINFO',result.data)
        }
    }
}
const getters = {
    goodsList(state){
        return state.searchList.goodsList||[]
    },
    attrsList(state){
        return state.searchList.attrsList||[]
    },
    trademarkList(state){
        return state.searchList.trademarkList||[]
    }
}
export default{
    state,
    mutations,
    actions,
    getters
}