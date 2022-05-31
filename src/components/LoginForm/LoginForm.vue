<template>
  <div class="card">
    <div class="form-container">
      <div class="instabug">
        <img src="@/assets/logos/logo.svg" alt="instabug logo" />
        <p>Log in to Instabug</p>
      </div>

      <div class="social">
        <base-button
          v-for="icon in icons"
          :key="icon.src"
          :icon="icon.src"
          :text="icon.name"
          :bgColor="icon.bgColor"
          :fontColor="icon.fontColor"
        />
      </div>

      <div class="divider">
        <span class="divider__title">OR</span>
      </div>

      <form @submit.prevent="login">
        <div class="label-container">
          <label for="email">Work Email</label>
        </div>
        <input
          id="email"
          type="email"
          placeholder="you@company.com"
          v-model="email"
          class="form__input"
          :class="{ invalid: !validEmail }"
        />
        <br />
        <br />
        <div class="label-container">
          <label for="password">Password</label>
          <span>Forgot Passwpord?</span>
        </div>
        <input
          id="password"
          type="password"
          placeholder="you@company.com"
          v-model="password"
          class="form__input"
          :class="{ invalid: !validPassword }"
        />
        <br />
        <br />
        <base-button text="Log in" fontColor="white" bgColor="#ccc" />
      </form>

      <div class="logos">
        <p class="logos-title">Trusted by the top companies</p>
        <ul class="logos-list">
          <li v-for="logo in logos" :key="logo" class="logo">
            <img :src="logo" alt="logo" class="companies__img" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { logos, icons } from "@/data/data";
import BaseButton from "../BaseButton/BaseButton.vue";
export default {
  data() {
    return {
      logos: logos,
      icons: icons,
    };
  },
  components: { BaseButton },
};
</script>

<style lang="scss" scoped>
@import "./LoginForm.styles.scss";
</style>
