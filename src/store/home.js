import {reqCategoryList,reqGetBannerList, reqGetFloorList} from '@/api'
//home模块的小仓库
const state ={
    //h三级菜单的数据
    categoryList:[],
    //轮播图的数据
    bannerList:[],
    //floor中的数据
    floorList:[]    
}
const mutations = {
    CATEGORYLIST(state,categoryList){
        state.categoryList = categoryList;
    },
    BANNERLIST(state,bannerList){
        state.bannerList = bannerList
    },
    FLOORLIST(state,floorList){
        // console.log(floorList);
        state.floorList = floorList
    }
} 
const actions = {
    async getCategoryList({commit}){
        let result = await reqCategoryList();
        // console.log(result);
        if(result.code == 200){
            commit("CATEGORYLIST",result.data)
        }
    },
    //获取首页轮播图的数据
    async getBannerList({commit}){
        let result = await reqGetBannerList();
        // console.log(result);
        if(result.code ==200){
            commit("BANNERLIST",result.data)
        }
    },
    //floor轮播的数据
    async getFloorList({commit}){
        let result = await reqGetFloorList();
        if(result.code ==200){
            commit('FLOORLIST',result.data)
        }
    }
}
const getters = {}
export default {
    state,
    mutations,
    actions,
    getters
}