<template>
  <div class="testing content-center">
    <h1 class="text-primary text-3xl py-auto">Oh no!</h1>
    <hr class="w-64 my-2 mx-auto"/>
    <h1 class="text-primary text-xl py-auto">That page cant be found.</h1>
    <router-link class="nav-btn mt-10 max-w-sm mx-auto" to="/"><font-awesome-icon :icon="['fas', 'home']" /> Go Home</router-link>

  </div>
</template>

<script>
export default {
  name: 'pageNotFound',
  components: {
  }
}
</script>
