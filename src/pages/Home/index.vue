<template>
  <div>
    <!-- 三级联动全局组件，不需要再引入 -->
    <TypeNav />
    <ListContainer />
    <TodayRecommend />
    <Rank />
    <Like />
    <Floor v-for="(floor, index) in floorList" :key="floor.id" :floor="floor" />
    <Brand />
  </div>
</template>

<script>
import ListContainer from "@/pages/Home/ListContainer";
import TodayRecommend from "@/pages/Home/TodayRecommend";
import Rank from "@/pages/Home/Rank";
import Like from "@/pages/Home/Like";
import Floor from "@/pages/Home/Floor";
import Brand from "@/pages/Home/Brand";
import { mapState } from "vuex";
export default {
  name: "Home",
  components: {
    ListContainer,
    TodayRecommend,
    Rank,
    Like,
    Floor,
    Brand,
  },
  mounted(){
    //获取登录用户信息
    if(!this.$store.state.user.token){
        this.$store.dispatch('getUserInfo');
    }
  },
  computed: {
    ...mapState({
      floorList: state => state.home.floorList,
    }),
  },
};
</script>

<style>
</style>