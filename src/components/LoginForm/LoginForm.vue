<template>
  <div class="card">
    <div class="form-container">
      <div class="instabug">
        <img src="@/assets/logos/logo.svg" alt="instabug logo" />
        <p>Log in to Instabug</p>
      </div>

      <!-- -------------------------------- social login buttons --------------------------------- -->
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
        <span class="divider-title">OR</span>
      </div>

      <!-- -------------------------------- Form --------------------------------- -->
      <form @submit.prevent="login">
        <div class="error" v-if="loginError">
          Your email and/or password are incorrect
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
          <router-link to="/login" class="link-grey">
            Forget password?
          </router-link>
        </div>
        <input
          id="password"
          type="password"
          placeholder="6+ Characters"
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
          class="btn"
          type="submit"
          text="Log in"
          fontColor="white"
          bgColor="#0089e5"
          :disabled="!(validEmail && validPassword && email && password)"
        />

        <div class="label-container">
          <span class="form__signup">
            Don't have an account?
            <router-link to="/login"> Sign up </router-link></span
          >
          <router-link to="/login" class="form__link form__right">
            Login via SSO
          </router-link>
        </div>
      </form>

      <!-- -------------------------------- Companies --------------------------------- -->
      <div class="logos">
        <p class="logos-title">Trusted by the top companies</p>
        <ul class="logos-list">
          <li v-for="logo in logos" :key="logo" class="logo">
            <img :src="logo" alt="logo" class="logos-img" />
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
    // ---------------------------------- Validation patterns ---------------------------------- //
    // from https://regexr.com/
    validateEmail() {
      this.validEmail =
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g.test(
          this.email
        );
    },
    validatePassword() {
      let addressName = this.email.substring(0, this.email.indexOf("@"));
      this.validPassword =
        !this.password.includes(addressName) &&
        /^(?=.*\d)(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/gm.test(this.password);
    },

    // ---------------------------------- Authentication ---------------------------------- //
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
