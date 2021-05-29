<template>
  <div class="Description">
    <h1>{{ msg }}</h1>
    <p>Средняя 30 см, традиционное тесто, 700 г</p>
    <p>СрПикантная колбаса Пепперони,
      свежие томаты, маслины, каперсы,
      сыр Моцарелла и соус Помадоро</p>
    <p>610.-</p>
  </div>
</template>

<script>
export default {
  name: 'Description',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
