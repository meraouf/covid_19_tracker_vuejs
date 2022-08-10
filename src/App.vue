<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header class="text-center bg-orange-600 text-white p-4 mb-10">
    <h1 class="text-3xl md:text-5xl mb-3 text-bold">
      <i class="fa-solid fa-circle"></i>
      Covid 19 tracker</h1>
    <p>
      API by :
      <a class="text-orange-300" href="https://covid19api.com" target="_blank">covid19api.com</a>
    </p>
  </header>

  <RouterView />
</template>

<style scoped>


</style>
