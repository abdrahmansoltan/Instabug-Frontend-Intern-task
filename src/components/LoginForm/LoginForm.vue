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
        <div class="error" v-if="loginError">
          Your email and/or password are correct
        </div>

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
          @change="validateEmail()"
        />
        <p class="form-error" v-if="!validEmail">Enter a valid email address</p>

        <br v-if="validEmail" />
        <br v-if="validEmail" />
        <div class="label-container">
          <label for="password">Password</label>
          <span>Forgot Password?</span>
        </div>
        <input
          id="password"
          type="password"
          placeholder="8+ Characters"
          v-model="password"
          class="form__input"
          :class="{ invalid: !validPassword }"
          @change="validatePassword"
        />
        <p class="form-error" v-if="!validPassword">
          Password must be 6 characters or more
        </p>

        <br v-if="validPassword" />
        <br v-if="validPassword" />
        <base-button
          type="submit"
          text="Log in"
          fontColor="white"
          bgColor="#09f"
          :disabled="!(validEmail && validPassword && email && password)"
        />
      </form>

      <div class="logos">
        <p class="logos-title">Trusted by the top companies</p>
        <ul class="logos-list">
          <li v-for="logo in logos" :key="logo" class="logo">
            <img :src="logo" alt="logo" class="logo-img" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { logos, icons, accounts } from "@/data/data";
import BaseButton from "../BaseButton/BaseButton.vue";
export default {
  data() {
    return {
      email: "",
      validEmail: true,
      password: "",
      validPassword: true,
      loginError: false,
      logos: logos,
      icons: icons,
      accounts: accounts,
    };
  },
  methods: {
    validateEmail() {
      this.validEmail = !/^\S+@\S+\.\S+$/.test(this.email) ? false : true;
    },
    validatePassword() {
      let addressName = this.email.substring(0, this.email.indexOf("@"));
      this.validPassword =
        this.password.includes(addressName) ||
        !/[A-Z]/.test(this.password) ||
        this.password.length < 9 ||
        !/[0-9]/.test(this.password)
          ? false
          : true;
    },
    login() {
      const enteredAcc = this.accounts.find((acc) => {
        return acc.email === this.email && acc.password === this.password;
      });

      if (enteredAcc) {
        localStorage.setItem("userEmail", this.email);
        this.reset();
        this.$router.push("/");
      } else {
        this.alert();
        this.password = "";
      }
    },
    reset() {
      this.email = "";
      this.password = "";
      // this.validEmail = true;
      // this.validPassword = true;
    },
    alert() {
      this.loginError = true;
      // this.validEmail = false;
      // this.validPassword = false;
    },
  },
  components: { BaseButton },
};
</script>

<style lang="scss" scoped>
@import "./LoginForm.styles.scss";
</style>
