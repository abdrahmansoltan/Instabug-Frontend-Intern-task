<template>
  <router-view></router-view>
</template>

<script></script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: Helvetica, Arial, sans-serif;
}

// To Fix Bug: Vercel remove 60+ px from the page's height
@media (max-height: 640px) {
  html {
    font-size: 90%;
  }
}
</style>
