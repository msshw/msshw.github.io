<template>
    <header class="top-header">
      <ul>
        <li><a href="#">Examples</a></li>
        <li><a href="#">Try it yourself</a></li>
        <li><a href="#">Installation</a></li>
        <li><a href="#">Usage</a></li>
      </ul>
    </header>
</template>

<script>
import VueProperImage from './../../../vue-proper-image/src/index.js'

export default {
  name: 'PageVueProperImage',
  components: {
    VueProperImage
  },
  data() {
    return {
      containerStyles: {},
      styles: {'max-width': '500px'},
      customWidth: 5,
      customHeight: 1
    }
  },
  watch: {
    customWidth: function(val) {
      console.log('val', val)
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  box-sizing: border-box;
  font-size: 40px;
  margin-bottom: 40px;

  @media screen and (min-width: 1200px) {
    padding: 0 10px 0;
  }
}

h2 {
  box-sizing: border-box;
  margin-bottom: 30px;

  @media screen and (min-width: 1200px) {
    padding: 0 10px 0;
  }
}

.vue-proper-image-container {
  border-radius: 2px;
  margin-bottom: 20px;
}

.container {
  margin-left: auto;
  margin-right: auto;
  max-width: 1500px;

  &:after {
    content:" ";
    display:table;
    clear:both;
  }
}

.column {
  box-sizing: border-box;
  width: 100%;

  @media screen and (min-width: 1200px) {
    float: left;
    padding: 0 10px 0;
    width: 33.333%;
  }
}

.author {
  background: rgba(255, 255, 255, 0.5);
  border-radius: 1px;
  color: #222;
  display: inline-block;
  padding: 5px 7px;
  text-decoration: none;
  transition: all 300ms ease-in;

  &:hover {
    background: rgba(34, 34, 34, 0.8);
    color: #fff;
  }
}

.ratio-text {
  background: rgba(34, 34, 34, 0.8);
  color: #fff;
  display: inline-block;
  padding: 5px 7px;
  vertical-align: top;
}
</style>
