//引入一级路由
import Home from "@/pages/Home";
import Search from "@/pages/Search";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Detail from "@/pages/Detail";
import AddCartSuccess from "@/pages/AddCartSuccess";
import ShopCart from "@/pages/ShopCart";
import Trade from "@/pages/Trade"

export default [
    {
        // 主页
        name:'home',
        path:'/home',
        component:Home,
        meta:{show:true},
    },
    {
        //重定向
        path:'/',
        redirect:'/home'
    },
    {
        // 搜索页
        name:'search',
        path:'/search/:keyword?',
        component:Search,
        meta:{show:true}
    },
    {
        // 登录页
        name:'login',
        path:'/login',
        component:Login,
        meta:{show:false}
    },
    {
        //注册页
        name:'register',
        path:'/register',
        component:Register,
        meta:{show:false}
    },
    {
        //详情页
        name:'detail',
        path:'/detail/:id',
        component:Detail,
        meta:{show:true}
    },
    {
        //加入购物车页面
        name:'addcartsuccess',
        path:'/addcartsuccess',
        component:AddCartSuccess,
        meta:{show:true}
    },
    {
        // 购物车页面
        name:'shopcart',
        path:"/shopcart",
        component:ShopCart,
        meta:{show:true}
    },
    {
        // 订单交易页面
        name:'trade',
        path:'/trade',
        component:Trade,
        meta:{ isShow:true }
    },
    
]