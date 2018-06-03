<template>
    <div class="vue-proper-image-demo">
      <article>
        <h1 class="container">Vue Proper Image component</h1>
        <section class="container component-description">
          <p><span class="component-name">Vue Proper Image component</span> is designed to enhance a classic HTML <span class="emphasize">&lt;img&gt;</span> tag.</p>
          <p>The main disadvantage of <span class="emphasize">&lt;img&gt;</span> tag is that you can not easily set ratio on that, which can be needed to keep a page's design correct. And the main advantage is that <span class="emphasize">&lt;img&gt;</span> tag can be read and indexed by search engines. </p>
          <p>On the other hand many developers and designers use <span class="emphasize">&lt;div&gt;</span> or other block-level HTML tags with a background image and <span class="emphasize">background&nbsp;-&nbsp;size:&nbsp;cover;</span> and <span class="emphasize">padding&nbsp;-&nbsp;bottom:&nbsp;x%;</span> CSS properties on that to create a ratio. But there is another disadvantage: CSS-background can not be indexed as images.</p>
        </section>
        <section class="container component-description">
          <h2>The solution</h2>
          <p>The idea came out of a combination of a pure <span class="emphasize">&lt;img&gt;</span> tag approach and a method with a block-level element with a background and a padding. As was said, a proper image has to meet the following conditions:</p>
          <ul>
            <li>be able to have a ratio;</li>
            <li>be indexable by search engines.</li>
          </ul>
          <p>It can be easily done by putting a <span class="emphasize">&lt;noscript&gt;</span> tag with an <span class="emphasize">&lt;img&gt;</span> tag inside a block-level element width a background and a padding. Since search engines index <span class="emphasize">&lt;noscript&gt;</span> tag content the page data which will be grabbed by a search engine will have a link to an image. And a parent block-level element with a background will render a proper image which will fit a design requirements.</p>
        </section>
        <section class="container component-description">
          <h2>Extras</h2>
          <p>Having an block-level element also gives one more advantage. These elements can have a content, in contrast to <span class="emphasize">&lt;img&gt;</span> tag which is inline element. That means what it means, you can add a content inside the <span class="component-name">Vue Proper Image component</span>. The component provides a <span class="emphasize">slot</span> with a name <span class="emphasize">content</span> which can be used to put a content in it. And of course, the content block and content itself can be styled from your app.</p>
        </section>
      </article>
      <section class="container">
        <h2>Examples</h2>
        <div>
          <div class="column">
            <VueProperImage
                :containerStyles="containerStyles"
                :src="'https://images.unsplash.com/photo-1486174975375-bd1c9e108596?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=39eaf4c47cc69019aa7d1d4485325c31&auto=format&fit=crop&w=2550&q=80'"
                :alt="'Alt text'">
                <template slot="content">
                  <a href="https://unsplash.com/@thatsmrbio" target="_blank" class="author">Matthew Hamilton</a>
                  <span class="ratio-text">natural ratio</span>
                </template>
            </VueProperImage>
            <VueProperImage
                :containerStyles="containerStyles"
                :src="'https://images.unsplash.com/photo-1453791232035-0bd4996082a6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a4bf4c093887ac0a351969e82bce519f&auto=format&fit=crop&w=2550&q=80'"
                :alt="'Alt text'"
                :ratioWidth="16"
                :ratioHeight="9"
                :contentPosition="'bottom-right'">
                <template slot="content">
                  <a href="https://unsplash.com/@veeterzy" target="_blank" class="author">veeterzy</a>
                  <span class="ratio-text">16:9</span>
                </template>
            </VueProperImage>
            <VueProperImage
                :containerStyles="containerStyles"
                :src="'https://images.unsplash.com/photo-1460647927807-8e664765c97c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=267a84e640dc58ae3e5e382af6d02994&auto=format&fit=crop&w=2550&q=80'"
                :alt="'Alt text'"
                :ratioWidth="2"
                :ratioHeight="3">
                <template slot="content">
                  <a href="https://unsplash.com/@randomlies" target="_blank" class="author">Ashim D’Silva</a>
                  <span class="ratio-text">2:3</span>
                </template>
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
                <template slot="content">
                  <a href="https://unsplash.com/@heysupersimi" target="_blank" class="author">Simone Hutsch</a>
                  <span class="ratio-text">1:1</span>
                </template>
            </VueProperImage>
            <VueProperImage
                :containerStyles="containerStyles"
                :src="'https://images.unsplash.com/photo-1463471931752-562bc2f299e9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7de443d1d5625e2a0d193efc666d1b72&auto=format&fit=crop&w=2553&q=80'"
                :alt="'Alt text'"
                :ratioWidth="4"
                :ratioHeight="3"
                :contentPosition="'bottom-left'">
                <template slot="content">
                  <a href="https://unsplash.com/@dmpop" target="_blank" class="author">Dmitri Popov</a>
                  <span class="ratio-text">4:3</span>
                </template>
            </VueProperImage>
            <VueProperImage
                :containerStyles="containerStyles"
                :src="'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-0.3.5&s=b7c17c97b26388e30891d416820e30e4&auto=format&fit=crop&w=2547&q=80'"
                :alt="'Alt text'"
                :ratioWidth="3"
                :ratioHeight="2"
                :contentPosition="'top-right'">
                <template slot="content">
                  <a href="https://unsplash.com/@etnbr" target="_blank" class="author">Étienne Beauregard-Riverin</a>
                  <span class="ratio-text">3:2</span>
                </template>
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
                <template slot="content">
                  <a href="https://unsplash.com/@grantlemons" target="_blank" class="author">Grant Lemons</a>
                  <span class="ratio-text">2:1</span>
                </template>
            </VueProperImage>
            <VueProperImage
                :containerStyles="containerStyles"
                :src="'https://images.unsplash.com/photo-1489949148730-b1c68cd128bf?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e1e549d474c13c8ce6857d03990857f9&auto=format&fit=crop&w=3934&q=80'"
                :alt="'Alt text'"
                :ratioWidth="9"
                :ratioHeight="16">
                <template slot="content">
                  <a href="https://unsplash.com/@abrkett" target="_blank" class="author">Adam Birkett</a>
                  <span class="ratio-text">9:16</span>
                </template>
            </VueProperImage>
          </div>
        </div>
      </section>
      <section class="container">
        <h2>Properties</h2>
        <table class="properties-table">
          <thead>
            <td>Property</td>
            <td>Description</td>
            <td>Type</td>
            <td>Default value</td>
          </thead>
          <tbody>
            <tr>
              <td>src</td>
              <td>An image url</td>
              <td>string</td>
              <td>none</td>
            </tr>
            <tr>
              <td>alt</td>
              <td></td>
              <td>string</td>
              <td>none</td>
            </tr>
            <tr>
              <td>containerStyles</td>
              <td></td>
              <td>object</td>
              <td>{}</td>
            </tr>
            <tr>
              <td>containerClass</td>
              <td></td>
              <td>string</td>
              <td>vue-proper-image-container</td>
            </tr>
            <tr>
              <td>contentContainerClass</td>
              <td></td>
              <td>string</td>
              <td>vue-proper-image-content</td>
            </tr>
            <tr>
              <td>imageStyles</td>
              <td></td>
              <td>object</td>
              <td>{}</td>
            </tr>
            <tr>
              <td>imageClass</td>
              <td></td>
              <td>string</td>
              <td>vue-proper-image</td>
            </tr>
            <tr>
              <td>ratioWidth</td>
              <td></td>
              <td>number, string</td>
              <td>0</td>
            </tr>
            <tr>
              <td>ratioHeight</td>
              <td></td>
              <td>number, string</td>
              <td>0</td>
            </tr>
            <tr>
              <td>contentPosition</td>
              <td></td>
              <td>string</td>
              <td>none</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section class="container">
        <h2>Usage examples</h2>
      </section>
      <br>
      <br>
      <br>
      <br>
      <br>
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
  font-size: 30px;
  margin-bottom: 40px;
}

h2 {
  box-sizing: border-box;
  margin-bottom: 30px;
}

.vue-proper-image-container {
  border-radius: 2px;
  margin-bottom: 20px;
}

.container {
  margin-left: auto;
  margin-right: auto;
  padding-left: 10px;
  padding-right: 10px;
  max-width: 1000px;

  &:after {
    content:" ";
    display:table;
    clear:both;
  }
}

.column {
  box-sizing: border-box;
  width: 100%;

  @media screen and (min-width: 800px) {
    float: left;
    padding: 0 10px 0;
    width: 33.333%;

    &:first-child {
      padding-left: 0;
    }

    &:last-child {
      padding-right: 0;
    }
  }
}

.component-description {
  margin-bottom: 40px;
}

.component-name {
  font-weight: bold;
}

.emphasize {
  background-color: #e2e2e2;
  border-radius: 2px;
  padding: 2px 3px 4px 3px;
  vertical-align: baseline;
  margin-left: 4px;
  margin-right: 4px;
}

.author,
.ratio-text {
  display: inline-block;
  font-size: .7em;
  padding: 5px 7px;
  vertical-align: top;
}

.author {
  background: rgba(255, 255, 255, 0.5);
  border-radius: 1px;
  color: #222;
  text-decoration: none;
  transition: all 100ms ease-in;

  &:hover {
    background: rgba(34, 34, 34, 0.8);
    color: #fff;
  }
}

.vue-proper-image {
  &:hover {
    .author {
      background-color: #fff;

      &:hover {
        background: rgba(34, 34, 34, 0.8);
        color: #fff;
      }
    }
  }
}

.ratio-text {
  background: rgba(34, 34, 34, 0.8);
  color: #fff;
}

.properties-table {
  border-collapse: collapse;
  width: 100%;

  &:hover {
      td {
        border-bottom-color: #f5f5f5;
      }
    }

  thead {
    font-weight: bold;
  }

  td {
    padding: 5px 12px;
    border-bottom: 1px solid #e2e2e2;
    transition: border-bottom-color 100ms ease;
  }

  tr {
    transition: background-color 100ms ease;

    &:hover {
      background-color: #f5f5f5;
    }

    &:last-child {
      td {
        border-bottom: none;
      }
    }
  }
}
</style>
