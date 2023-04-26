import {reqGoodsInfo,reqAddOrUpdateShopCart} from '@/api';
//封装临时游客身份模块-->生成一个随机字符串（不重复，不改变）
import {getUUID} from '@/utils/uuid_token';
const state = {
    //详情页信息
    goodsInfo:{},
    uuid_token: getUUID()
};
const mutations = {
    GOODSINFO(state,goodsInfo){
        state.goodsInfo = goodsInfo;
    }
};
const actions = {
    //详情页信息获取
    async getGoodsInfo({commit},stuId){
        let result =  await reqGoodsInfo(stuId);
        if(result.code == 200){
            commit('GOODSINFO',result.data);
        }
    },
    //将产品添加到购物车中
    async addOrUpdateShopCart({commit},{skuId,skuNum}){
        let result = await reqAddOrUpdateShopCart(skuId,skuNum);
        if(result.code == 200){
            return 'ok';
        }else{
            return Promise.reject(new Error('failed'))
        }
    }
};
const getters = {
    //路径导航简化的数据
    categoryView(state){
        return state.goodsInfo.categoryView||{};
    },
    //简化产品信息的数据
    skuInfo(state){
        return state.goodsInfo.skuInfo||{};
    },
    //产品售卖属性的简化
    spuSaleAttrList(state){
        return state.goodsInfo.spuSaleAttrList||{};
    },
    
};

export default {
    state,
    mutations,
    actions,
    getters
}
