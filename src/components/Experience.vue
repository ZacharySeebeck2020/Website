<template>
  <div class="">
    <div class="flex">
      <h2 class="text-primary text-2xl">{{ title }}</h2>
      <h5 class="text-secondary text-xl ml-auto">{{ start }} - {{ end }}</h5>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'comp', 'start', 'end', 'desc']
}
</script>
