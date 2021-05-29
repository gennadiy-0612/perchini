<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Description msg="Пепперони"/>
  </div>
</template>

<script>
import Description from './components/DescriptPrice'

export default {
  name: 'Description',
  components: {
    Description
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
