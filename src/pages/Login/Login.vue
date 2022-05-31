<template>
  <div class="container">
    <Slider class="slider" />
    <LoginForm class="login" />
  </div>
</template>

<script>
import Slider from "@/components/Slider/Slider.vue";
import LoginForm from "@/components/LoginForm/LoginForm.vue";
export default { components: { Slider, LoginForm } };
</script>

<style lang="scss" scoped>
@import "./Login.styles.scss";
</style>
