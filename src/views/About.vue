<template>
  <div class="home content-center h-full mx-2">
    <img class="h-64 w-64 mt-12 rounded-full mx-auto object-cover" src="/img/senior_wall.jpg">
    <h1 class="text-primary text-3xl py-auto">Zachary Seebeck</h1>
    <h4 class="text-secondary text-xl py-auto">A student, web developer, and musician located in Bay City, Michigan</h4>
    <hr class="w-64 mx-auto mt-4" />
    <div class="my-5">
      <p class="text-secondary text-sm">seebeckzachary@gmail.com / (989) 750-5996</p>
    </div>
    <hr class="w-64 mx-auto mt-4" />
    <div class="my-10">
      <a href="https://github.com/ZacharySeebeck2020" target="new" class="social-btn"><font-awesome-icon :icon="['fab', 'github']" /></a>
      <a href="https://www.linkedin.com/in/zacharyseebeck/" target="new" class="social-btn"><font-awesome-icon :icon="['fab', 'linkedin']" /></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'about',
  components: {
  }
}
</script>
