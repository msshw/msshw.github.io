<template>
  <div>
    <router-link :to="'/vue-proper-image/'">Vue Proper Image</router-link>
  </div>
</template>

<script>
export default {
  name: 'PageHome',
  mounted() {
    this.updateInnerMenu()
  },
  methods: {
    updateInnerMenu: function() {
      this.$emit('inner-menu-update', [])
    }
  }
}
</script>
