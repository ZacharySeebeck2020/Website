<template>
  <div class="home content-center h-full mx-2">
    <div class="home">
      <img class="h-64 w-64 mt-12 rounded-full mx-auto object-cover" src="/img/senior_wall.jpg">
      <h1 class="text-secondary text-3xl">Hi there, I'm <span class="text-secondary-darker">Zachary Seebeck</span></h1>
      <h4 class="text-primary text-xl py-auto">I am a student, developer, and musician located in Bay City, Michigan.</h4>
      <h4 class="text-primary text-l py-auto">I specialize  in web development, but also have a fond interest in robotics software and hardware.</h4>
      <hr class="w-64 mx-auto mt-4" />
      <div class="my-10">
        <a href="https://github.com/ZacharySeebeck2020" target="new" class="social-btn"><font-awesome-icon :icon="['fab', 'github']" /></a>
        <a href="https://www.linkedin.com/in/zacharyseebeck/" target="new" class="social-btn"><font-awesome-icon :icon="['fab', 'linkedin']" /></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {
  }
}
</script>
