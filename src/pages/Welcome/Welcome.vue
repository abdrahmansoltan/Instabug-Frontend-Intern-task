<template>
  <div class="welcome card">
    <img class="logo" src="@/assets/logos/logo.svg" alt="instabug logo" />
    <span
      >Welcome to <strong>{{ email }}</strong></span
    >
    <br />
    <base-button
      class="btn"
      @click="logout"
      type="submit"
      text="Log out"
      fontColor="white"
      bgColor="#db8680"
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
    this.email = window.localStorage.getItem("userEmail");
  },
  methods: {
    logout() {
      window.localStorage.removeItem("userEmail");
      this.$router.push("/login");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./Welcome.styles.scss";

@import "../../assets/styles/mixins.scss";
@import "../../assets/styles/variables.scss";

.welcome {
  width: 50%;
  margin: 2rem auto;
}

.card {
  @include center-flex;
  flex-direction: column;
  gap: 1rem;
  color: #495466;
  font-size: $text-l;

  .logo {
    width: 15rem;
  }
  .btn {
    width: 40%;
  }
}
</style>
