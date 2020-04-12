<template>
  <div class="xl:max-w-5xl lg:max-w-3xl md:max-w-2xl sm:max-w-md w-full lg:flex mt-5">
    <div class="h-48 lg:h-auto lg:w-64 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" v-if="img" :style="{ backgroundImage: 'url(' + img + ')' }" title="Woman holding a mug"></div>
    <div class="border-r border-b border-l border-t border-accent lg:border-l-1 lg:border-t lg:border-accent bg-background-darker opacity-75 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
      <div class="mb-4">
        <div class="text-white font-bold text-xl mb-2">{{ title }}</div>
        <p class="text-white text-base">{{ desc }}</p>
      </div>
      <div class="mb-4 flex justify-center">
        <a v-if="git" :href="git" class="btn" target="_new"><font-awesome-icon :icon="['fas', 'code']" /> Source Code</a>  
        <a v-if="live" :href="live" class="btn" target="_new"><font-awesome-icon :icon="['fas', 'laptop']" /> Live Site</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'desc', 'img', 'git', 'live']
}
</script>
