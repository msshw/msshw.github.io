<template>
  <div>
    <topHeader/>
    <div class="inner-menu" v-if="innerMenuItems">
      <div class="container">
        <a v-for="(item, index) in innerMenuItems" v-bind:key="index" v-bind:href="item[1]">{{ item[0] }}</a>
      </div>
    </div>
    <transition name="fade">
      <router-view
        :key="$route.fullPath"
        class="main-content"
        v-on:inner-menu-update="onInnerMenuUpdate"></router-view>
    </transition>
  </div>
</template>

<script>
import header from './components/header'

export default {
  name: 'App',
  components: {
    topHeader: header
  },
  data() {
    return {
      innerMenuItems: []
    }
  },
  methods: {
    onInnerMenuUpdate: function(menuItems) {
      this.innerMenuItems = menuItems
    }
  }
}
</script>

<style lang="scss">
@import './assets/_fonts.scss';

$text-color: #2c3e50;

html,
body {
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Lato', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $text-color;
  line-height: 1.75;
  font-size: 16px;
}

h1, h2 {
  font-weight: 700;
}

.main-content {
  margin-top: 100px;
  margin-bottom: 100px;

  @media screen and (min-width: 1700px) {
    margin-bottom: 0;
  }
}

.inner-menu {
  background: #fff;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0.7;
  padding: 20px 0;
  position: fixed;
  transition: opacity 100ms ease;
  z-index: 1;

  &:hover {
    opacity: 1;
  }

  a {
    color: $text-color;
    display: inline-block;
    margin-right: 20px;
    text-decoration: none;
  }

  .container {
    margin-left: auto;
    margin-right: auto;
    padding-left: 10px;
    padding-right: 10px;
    max-width: 1000px;
  }

  @media screen and (min-width: 1700px) {
    right: auto;
    opacity: 1;
    padding: 20px 50px;

    a {
      display: block;
      margin-right: 0;
    }
  }
}
</style>
