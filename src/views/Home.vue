<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
  <counter />
  <buttons />
  <color-code />
</template>

<script>
export default {
  name: 'Home',
  components: {
    'counter': require('@/components/Counter.vue').default,
    'buttons': require('@/components/Buttons.vue').default,
    'color-code': require('@/components/ColorCode.vue').default,
  }
}
</script>

<style>
div {
  margin-bottom: 10px;
}

.counter {
  font-size: 80px;
}

.buttons button {
  font-size: 40px;
  width: 100px;
  margin: 0 10px;
}
</style>