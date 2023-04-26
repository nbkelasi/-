<template>
  <div class="swiper-container" ref="mySwiper">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        v-for="(carousel, index) in List"
        :key="carousel.id"
      >
        <img :src="carousel.imgUrl" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
import { nextTick } from "vue";
export default {
  name: "Carousel",
  props: ['List'],
  watch: {
    List: {
      immediate: true,
      handler() {
        this.$nextTick(() => {
          // console.log("swiper初始化成功");
          let mySwiper = new Swiper(this.$refs.mySwiper, {
            direction: "horizontal", // 垂直切换选项
            loop: true, // 循环模式选项/

            // 如果需要分页器
            pagination: {
              el: ".swiper-pagination",
              //点击小球也能够切换
              clickable: true,
            },

            // 如果需要前进后退按钮
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });
        });
      },
    },
  },
};
</script>

<style>
</style>