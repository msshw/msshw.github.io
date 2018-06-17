<template>
    <header class="top-header">
      <router-link to="/" class="logo">msshw</router-link>
    </header>
</template>

<script>
export default {
  name: 'Header',
  watch: {
    customWidth: function(val) {
      console.log('val', val)
    }
  }
}
</script>

<style lang="scss" scoped>
.top-header {
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  padding: 20px 50px;
  position: fixed;
  top: 0;

  &:after {
    content: ' ';
    display: table;
    clear: both;
  }
}

.logo {
  color: #222;
  font-size: 30px;
  font-weight: 900;
  text-decoration: none;
}

.title {
  display: block;
  margin-top: -1.1em;
}
</style>
