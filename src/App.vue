<template>
  <div id="app">
    <router-view/>
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
export default {

  mounted() {
    this.$store.dispatch('getAddress')
  },

  components: {
    FooterGuide
  },

  
}
</script>

<style lang="stylus">
#app
  touch-action pan-y
</style>
