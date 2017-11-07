<template>
  <div id="app">
    <div class="container">
      <div class="columns">
        <div class="column col-8 col-mx-auto">
          <header-app></header-app>
          <hr>
          <br>
          <router-view/>          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderApp from './components/HeaderApp'
export default {
  name: 'app',
  components: {
    HeaderApp
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
