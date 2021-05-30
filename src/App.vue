<template>
  <div id="app">
    <X/>
    <Photo msg="Photo"/>
    <DescriptionPrice msg="Пепперони"/>
    <AlsoBuy/>

    <div class="flex-auto justify-between flex flex-wrap">
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
import X from './components/popupbluda/X.vue'
import Photo from './components/popupbluda/Photo.vue'
import DescriptionPrice from './components/popupbluda/DescriptPrice.vue'
import AlsoBuy from './components/popupbluda/AlsoBuy.vue'
import AlsoItem from './components/popupbluda/AlsoItem.vue'
import LoadBar from './components/popupbluda/LoadBar.vue'
import OrderMore from './components/popupbluda/OrderMore.vue'

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
