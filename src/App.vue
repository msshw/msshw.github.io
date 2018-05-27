<template>
    <div class="vue-proper-image-demo">
      <h1>Test</h1>
      <div class="demo-container">
        <div class="column">
          <ProperImage
              :containerStyles="containerStyles"
              :src="'https://source.unsplash.com/random/1000x800'"
              :alt="'Alt text'">
          </ProperImage>
          <ProperImage
              :containerStyles="containerStyles"
              :src="'https://source.unsplash.com/random/800x420'"
              :alt="'Alt text'"/>
          <ProperImage
              :containerStyles="containerStyles"
              :src="'https://source.unsplash.com/random/600x900'"
              :alt="'Alt text'"
              :ratioWidth="4"
              :ratioHeight="3"/>
        </div>
        <div>
          <ProperImage
              :containerStyles="containerStyles"
              :src="'https://source.unsplash.com/random/1024x768'"
              :alt="'Alt text'"
              :ratioWidth="10"
              :ratioHeight="5"/>
          <ProperImage
              :containerStyles="containerStyles"
              :src="'https://source.unsplash.com/random/2000x300'"
              :alt="'Alt text'"
              :ratioWidth="18"
              :ratioHeight="4"/>
          <ProperImage
              :containerStyles="containerStyles"
              :src="'https://source.unsplash.com/random/1100x500'"
              :alt="'Alt text'"
              :ratioWidth="10"
              :ratioHeight="4"/>
        </div>
      </div>
    </div>
</template>

<script>
import ProperImage from './../../vue-proper-image/src/index.js'

export default {
  name: 'App',
  components: {
    ProperImage
  },
  data () {
    return {
      containerStyles: {
        maxWidth: '700px'
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.vue-proper-image-container {
  margin-bottom: 10px;
}
</style>
