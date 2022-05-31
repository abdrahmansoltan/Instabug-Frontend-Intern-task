<template>
  <div class="card">
    <img class="logo" src="@/assets/logos/logo.svg" alt="instabug logo" />

    <h2>
      Welcome to <span>{{ email }}</span>
    </h2>
    <base-button
      class="btn"
      @click="logout"
      type="submit"
      text="Log out"
      fontColor="white"
      bgColor="#187eff"
    />
  </div>
</template>

<script>
import BaseButton from "@/components/BaseButton/BaseButton.vue";
export default {
  components: { BaseButton },
  data() {
    return {
      email: "",
    };
  },
  created() {
    // Runs as soon as the component is created
    this.email = window.localStorage.getItem("userEmail");
  },
  methods: {
    // ----------------logging-out functionality---------------- //
    logout() {
      window.localStorage.removeItem("userEmail");
      this.$router.push("/login");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./Welcome.styles.scss";
</style>
