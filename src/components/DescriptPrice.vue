<template>
  <div class="Description">
    <h3 class="Ag-h3-to-1070">{{ msg }}</h3>
    <p class="Ag-text12-to-1070">Средняя 30 см, традиционное тесто, 700 г</p>
    <p class="Ag-text14-to-1070">Пикантная колбаса Пепперони,
      свежие томаты, маслины, каперсы,
      сыр Моцарелла и соус Помадоро</p>
    <h3 class="Ag-h3-to-1070">610.-</h3>
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
