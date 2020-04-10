<template>
  <div class="home content-center h-full mx-2">
    <vue-particles class="particles"
      color="#a3f7bf"
      :particleOpacity="0.7"
      :particlesNumber="90"
      shapeType="polygon"
      :particleSize="4"
      linesColor="#86ad92"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="1"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    ></vue-particles>
    <div class="about">
      <img class="h-64 w-64 mt-12 rounded-full mx-auto object-cover" src="/img/senior_wall.jpg">
      <h1 class="text-primary text-3xl">Hi there, I'm <span class="text-primary">Zachary Seebeck</span></h1>
      <h4 class="text-secondary text-xl py-auto">I am a student, developer, and musician located in Bay City, Michigan.</h4>
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
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {
  }
}
</script>
