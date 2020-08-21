<template data-test="app">
  <div id="app" data-app >
    <Navbar />
    <router-view data-test="app"></router-view>
  </div>
</template>
<script>
import Navbar from './components/navbar/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
    margin-left: 100px;
  margin-right: 100px;
  margin-bottom: 100px;
  justify-content: center;
}
</style>
