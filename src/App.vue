<template>
  <div id="app">
    <X/>
    <Photo msg="Photo"/>
    <DescriptionPrice msg="Пепперони"/>
    <AlsoBuy msg="Вместе с этим также покупают"/>
      <div class="flex-auto justify-center flex flex-wrap m-top21">
      <AlsoItem/>
      <AlsoItem/>
      <AlsoItem/>
      <AlsoItem/>
      <AlsoItem/>
      <AlsoItem/>
    </div>
    <LoadBar/>
    <OrderMore/>
  </div>
</template>

<script>
import X from './components/X.vue'
import Photo from './components/Photo.vue'
import DescriptionPrice from './components/DescriptPrice.vue'
import AlsoBuy from './components/AlsoBuy.vue'
import AlsoItem from './components/AlsoItem.vue'
import LoadBar from './components/LoadBar.vue'
import OrderMore from './components/OrderMore.vue'

export default {
  name: 'App',
  components: {
    X,
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
  margin: 16px;
}
</style>
