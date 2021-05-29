<template>
  <div id="app">
    <Photo msg="Photo"/>
    <DescriptionPrice msg="DescriptionPrice"/>
    <AlsoBuy msg="Вместе с этим также покупают"/>
    <AlsoItem/>
    <AlsoItem/>
    <AlsoItem/>
    <AlsoItem/>
    <AlsoItem/>
    <AlsoItem/>
    <LoadBar/>
    <OrderMore/>
  </div>
</template>

<script>
import Photo from './components/Photo.vue'
import DescriptionPrice from './components/DescriptPrice.vue'
import AlsoBuy from './components/AlsoBuy.vue'
import AlsoItem from './components/AlsoItem.vue'
import LoadBar from './components/LoadBar.vue'
import OrderMore from './components/OrderMore.vue'

export default {
  name: 'App',
  components: {
    Photo,
    DescriptionPrice,
    AlsoBuy,
    AlsoItem,
    LoadBar,
    OrderMore
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
