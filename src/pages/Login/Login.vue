<template>
  <div class="container">
    <Slider class="slider" />
    <div class="login">Form</div>
  </div>
</template>

<script>
import Slider from "@/components/Slider/Slider.vue";
export default { components: { Slider } };
</script>

<style lang="scss" scoped>
@import "./Login.styles.scss";
</style>
