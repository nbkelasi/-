<template>
  <div>
    <Header />
    <router-view></router-view>
    <Footer v-show="$route.meta.show"/>
  </div>
</template>

<script>
//引入
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  mounted(){
    //获取获取种类信息
    this.$store.dispatch("getCategoryList");
    // 获取轮播图
    this.$store.dispatch("getBannerList");
    this.$store.dispatch("getFloorList");

  }
};
</script>
