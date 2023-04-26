//引入路由
import store from "@/store";
import Vue from "vue";
import VueRouter from "vue-router";
import routes from './routes'
//使用插件
Vue.use(VueRouter)
//备份push|replace方法
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;

//重写push|replace方法
VueRouter.prototype.push = function(location,resolve,reject){
    if(resolve && reject){
        originPush.call(this,location,resolve,reject);
    }else{
        originPush.call(this,location,()=>{ },()=>{ });
    }
}
VueRouter.prototype.replace = function(location,resolve,reject){
    if(resolve&&reject){
        originReplace.call(this,location,resolve,reject);
    }else{
        originReplace.call(this,location,()=>{ },()=> { });
    }
}

//配置路由
let router =  new VueRouter({
    //配置路由
    routes,
    //滚动行为控制
    scrollBehavior(to, from, savedPosition){
        //y=0就代表滚动条在页面的最上方  默认单位是像素
        return {y:0}
    }
});
// 设置登录权限和游客权限 -----路由前置守卫
router.beforeEach(async(to,from,next)=>{
    // 登录后才有的token
    let token = store.state.user.token;
    // 用户信息
    let name = store.state.user.userInfo.name;
    // 检测用户是否登录
    if(token){
        // 登录后用户不能去login
        if(to.path=='/login'){
            next('/home');
        }else{
            // 如果去的不是login而是其他组件
            if(name){
                next();
            }else{
                // 如果没有用户信息 就派发action
                //获取登录用户信息
                try{
                    await store.dispatch('getUserInfo');
                    next()
                }catch(error){
                    // token失效  清除登录信息
                    await store.dispatch('loginOut');
                    next('/login')
                }
            }
        }
    }else{
        // 未登录
        next()
    }
    
})

export default router;