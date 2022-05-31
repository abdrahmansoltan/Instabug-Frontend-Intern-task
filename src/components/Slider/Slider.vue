<template>
  <div class="slider-container">
    <img
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
    </div>
  </div>
</template>

<script>
import { labels, sliderImgs } from "@/data/data";

export default {
  data() {
    return {
      imgs: sliderImgs,
      labels: labels,
      currentIndex: 0,
      timer: null,
    };
  },
  created() {
    setInterval(() => {
      this.currentIndex++;
      if (this.currentIndex === this.imgs.length) {
        this.currentIndex = 0;
      }
    }, 3000);
  },
};
</script>

<style lang="scss" scoped>
@import "./Slider.styles.scss";
</style>
