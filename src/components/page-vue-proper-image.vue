<template>
    <div class="vue-proper-image-demo">
      <h1 class="container">Vue Proper Image component</h1>
      <div class="container">
        <div class="column">
          <VueProperImage
              :containerStyles="containerStyles"
              :src="'https://images.unsplash.com/photo-1486174975375-bd1c9e108596?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=39eaf4c47cc69019aa7d1d4485325c31&auto=format&fit=crop&w=2550&q=80'"
              :alt="'Alt text'">
              <a href="https://unsplash.com/@thatsmrbio" target="_blank" class="author">Matthew Hamilton</a>
              <span class="ratio-text">natural ratio</span>
          </VueProperImage>
          <VueProperImage
              :containerStyles="containerStyles"
              :src="'https://images.unsplash.com/photo-1453791232035-0bd4996082a6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a4bf4c093887ac0a351969e82bce519f&auto=format&fit=crop&w=2550&q=80'"
              :alt="'Alt text'"
              :ratioWidth="16"
              :ratioHeight="9"
              :contentPosition="'bottom-right'">
            <a href="https://unsplash.com/@veeterzy" target="_blank" class="author">veeterzy</a>
            <span class="ratio-text">16:9</span>
          </VueProperImage>
          <VueProperImage
              :containerStyles="containerStyles"
              :src="'https://images.unsplash.com/photo-1460647927807-8e664765c97c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=267a84e640dc58ae3e5e382af6d02994&auto=format&fit=crop&w=2550&q=80'"
              :alt="'Alt text'"
              :ratioWidth="2"
              :ratioHeight="3">
            <a href="https://unsplash.com/@randomlies" target="_blank" class="author">Ashim D’Silva</a>
            <span class="ratio-text">2:3</span>
          </VueProperImage>
        </div>
        <div class="column">
          <VueProperImage
              :containerStyles="containerStyles"
              :src="'https://images.unsplash.com/photo-1506073561693-14bfb93f7580?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2a78944fd4fcd6f968eedc56dbe5b567&auto=format&fit=crop&w=1703&q=80'"
              :alt="'Alt text'"
              :ratioWidth="1"
              :ratioHeight="1"
              :contentPosition="'top-right'">
            <a href="https://unsplash.com/@heysupersimi" target="_blank" class="author">Simone Hutsch</a>
            <span class="ratio-text">1:1</span>
          </VueProperImage>
          <VueProperImage
              :containerStyles="containerStyles"
              :src="'https://images.unsplash.com/photo-1463471931752-562bc2f299e9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7de443d1d5625e2a0d193efc666d1b72&auto=format&fit=crop&w=2553&q=80'"
              :alt="'Alt text'"
              :ratioWidth="4"
              :ratioHeight="3"
              :contentPosition="'bottom-left'">
            <a href="https://unsplash.com/@dmpop" target="_blank" class="author">Dmitri Popov</a>
            <span class="ratio-text">4:3</span>
          </VueProperImage>
          <VueProperImage
              :containerStyles="containerStyles"
              :src="'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-0.3.5&s=b7c17c97b26388e30891d416820e30e4&auto=format&fit=crop&w=2547&q=80'"
              :alt="'Alt text'"
              :ratioWidth="3"
              :ratioHeight="2"
              :contentPosition="'top-right'">
            <a href="https://unsplash.com/@etnbr" target="_blank" class="author">Étienne Beauregard-Riverin</a>
            <span class="ratio-text">3:2</span>
          </VueProperImage>
        </div>
        <div class="column">
          <VueProperImage
              :containerStyles="containerStyles"
              :src="'https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9ee2cea2b71182cf6c9743f86deceb47&auto=format&fit=crop&w=2550&q=80'"
              :alt="'Alt text'"
              :ratioWidth="2"
              :ratioHeight="1"
              :contentPosition="'top-right'">
            <a href="https://unsplash.com/@grantlemons" target="_blank" class="author">Grant Lemons</a>
            <span class="ratio-text">2:1</span>
          </VueProperImage>
          <VueProperImage
              :containerStyles="containerStyles"
              :src="'https://images.unsplash.com/photo-1489949148730-b1c68cd128bf?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e1e549d474c13c8ce6857d03990857f9&auto=format&fit=crop&w=3934&q=80'"
              :alt="'Alt text'"
              :ratioWidth="9"
              :ratioHeight="16">
            <a href="https://unsplash.com/@abrkett" target="_blank" class="author">Adam Birkett</a>
            <span class="ratio-text">9:16</span>
          </VueProperImage>
        </div>
      </div>
    </div>
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
      containerStyles: {}
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

.vue-proper-image-container {
  border-radius: 2px;
  margin-bottom: 20px;
}

.container {
  margin-left: auto;
  margin-right: auto;
  max-width: 1500px;
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
