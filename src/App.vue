<template>
  <!-- Navigation -->
  <div id="app" class="contatiner mx-auto min-h-screen flex flex-col">
    <header class="md:flex md:justify-between md:items-center md:px-4 nav">
      <div class="flex items-center justify-between px-4 py-3 md:p-0">
        <div class="">
          <img class="h-8" src="/img/ZacharySeebeck-02.png" alt="Zachary Seebeck ShortLogo">
        </div>
        <h1 class="ml-4 mr-auto text-primary text-2xl unselectable">Zachary Seebeck</h1>
        <div class="md:hidden">
          <button @click="isOpen = !isOpen" type="button"
            class="mr-auto block text-gray-500 hover:text-white focus:text-white focus:outline-none">
            <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path v-if="isOpen" fill-rule="evenodd"
                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
              <path v-if="!isOpen" fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
            </svg>
          </button>
        </div>
      </div>
      <nav @click="isOpen = !isOpen" :class="isOpen ? 'block' : 'hidden'" class="px-2 pt-2 md:flex md:p-0 ml-auto"
        style="font-weight: bold">
        <router-link class="nav-btn" to="/">
          <font-awesome-icon :icon="['fas', 'home']" class="pr-1" /> Home</router-link>
        <!-- <router-link class="nav-btn" to="/"><font-awesome-icon :icon="['fas', 'user']" class="pr-1"/> About</router-link> -->
        <router-link class="nav-btn" to="/projects">
          <font-awesome-icon :icon="['fas', 'vial']" class="pr-1" /> Projects</router-link>
        <a class="nav-btn" href="/files/resume.pdf" target="_new">
          <font-awesome-icon :icon="['fas', 'file']" class="pr-1" /> Resume</a>
      </nav>
    </header>
    <!-- /Navigation -->


    <router-view class="pt-4 flex-grow" />

    <!-- Footer -->
    <footer class='w-full text-center pt-8 pb-4 text-secondary'>
      © 2020 Zachary Seebeck |
      Created in
      <font-awesome-icon :icon="['fab', 'vuejs']" /> <a href="https://vuejs.org/" target="new">Vue.js</a> and <a
        href="https://tailwindcss.com/" target="new">Tailwindcss.</a>
    </footer>
    <!-- /Footer -->
  </div>
</template>

<script>
  import './assets/css/app.css'

  export default {
    name: 'home',
    components: {},
    data() {
      return {
        isOpen: false,
      }
    },
  }
</script>


<style>
  html {
    @apply bg-background;
    text-align: center;
  }
</style>