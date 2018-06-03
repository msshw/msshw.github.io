<template>
  <div>
    <transition name="fade">
      <router-view :key="$route.fullPath"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {}
}
</script>

<style lang="scss">
@import './assets/_fonts.scss';

body {
  font-family: 'Lato', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  line-height: 1.75;
  font-size: 16px;
}
</style>
