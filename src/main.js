import Vue from 'vue'
import App from './App.vue'
//引入路由
import router from '@/router'
//三级联动组件---注册全局
import TypeNav from '@/components/TypeNav'
Vue.component(TypeNav.name,TypeNav)
//轮播图组件 ----注册全局
import Carousel from '@/components/Carousel'
Vue.component(Carousel.name,Carousel)
//分页组件 ---注册全局
import Pagination from '@/components/Pagination'
Vue.component(Pagination.name,Pagination)
//引入仓库
import store from './store'
 //关闭生产提示
Vue.config.productionTip = false
//测试
// import {reqGetSearchInfo} from '@/api'
// console.log(reqGetSearchInfo({}));
//引入MockServer.js -----mock数据
import '@/mock/mockServer'
//引入swiper样式
import 'swiper/css/swiper.css'
new Vue({
  render: h => h(App),
  //注册路由
  router,
  store,
  beforeCreate(){
    Vue.prototype.$bus = this
  }
}).$mount('#app')
