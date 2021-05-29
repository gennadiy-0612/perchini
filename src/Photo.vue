<template>
  <div id="app">
    <img alt="Photo" src="./assets/img/Photo.svg">
    <Photo msg="Photo"/>
  </div>
</template>

<script>
import Photo from './components/Photo.vue'

export default {
  name: 'Photo',
  components: {
    Photo
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
}
</style>
