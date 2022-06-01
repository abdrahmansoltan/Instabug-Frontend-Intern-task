<template>
  <router-view></router-view>
</template>

<script></script>

<style lang="scss">
@import "@/assets/styles/variables.scss";
@import "@/assets/styles/mixins.scss";

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: Helvetica, Arial, sans-serif;
}

// global styles for swiper-pagination
.swiper-pagination-bullet {
  min-height: $spacing-s;
  min-width: $spacing-s;
  margin: 0 6px !important;
  border: 2px solid #eee !important;
  &-active {
    background-color: #eee !important;
  }
}

// To Fix Bug: Vercel remove 60+ px from the page's height
@media (max-height: 640px) {
  html {
    font-size: 90%;
  }
}
</style>
