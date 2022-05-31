<template>
  <button
    type="button"
    :class="{ border: bgColor === 'white' }"
    :style="{
      backgroundColor: bgColor,
      color: fontColor,
      borderColor: fontColor,
    }"
  >
    <img v-if="icon" :src="icon" alt="logo" />
    <span>{{ text }}</span>
  </button>
</template>

<script>
export default {
  // using the props to control the functionality & styling of the button
  props: {
    bgColor: {
      type: String,
      required: false,
      default: "white",
    },
    fontColor: {
      type: String,
      required: false,
      default: "black",
    },
    icon: {
      type: String,
      required: false,
      default: "",
    },
    text: {
      type: String,
      required: false,
      default: "Button",
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./BaseButton.styles.scss";
</style>
