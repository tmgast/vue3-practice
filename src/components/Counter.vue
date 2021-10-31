<template>
  <div class="counter" :style="{color: $store.state.colorCode}">
    {{$store.state.counter}}
  </div>
  <div class="counter-squared">
    {{$store.state.counter}}
    <sup>2</sup> = 
    {{$store.getters.counterSquared}}
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>