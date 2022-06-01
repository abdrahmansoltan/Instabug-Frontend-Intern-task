<template>
  <div class="slider-container">
    <swiper
      :pagination="{
        clickable: true,
      }"
      :modules="modules"
      :autoplay="{ delay: 3000, disableOnInteraction: false }"
    >
      <swiper-slide v-for="item in this.sliderItems" :key="item.img">
        <img :src="item.img" alt="slider image" class="slider-img" />
        <p>{{ item.label }}</p>
      </swiper-slide>
    </swiper>

    <!----------------------- OLD SOLUTION USING TIMER ----------------------->
    <!-- <img
      :src="this.imgs[this.currentIndex]"
      alt="slider image"
      class="slider-img"
    />

    <p>{{ this.labels[this.currentIndex] }}</p>

    <div class="dots-container">
      <span
        v-for="(item, index) in this.imgs.length"
        class="dot"
        :class="{ 'dot--active': index === currentIndex }"
        :key="item"
        @click="this.currentIndex = index"
      ></span>
    </div> -->
  </div>
</template>

<script>
import { sliderData } from "@/data/data";
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination, Autoplay } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, Autoplay],
    };
  },

  data() {
    return {
      sliderItems: sliderData,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "./Slider.styles.scss";
</style>
