<template>
  <div class="my-3 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 xl:w-1/3">
    <img class="w-full" v-if="img" :src="img"/>
    <div class="px-6 py-4 bg-background-darker opacity-75">
      <div class="font-bold text-xl mb-2 text-white">{{ title }}</div>
      <p class="text-white text-base">
        {{ desc }}
      </p>
    </div>
    <div class="px-6 pt-4 pb-2 bg-background-darker opacity-75">
      <!-- <a
        v-if="git"
        :href="git"
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
        >View Project</a
      > -->
      <a
        v-if="git"
        :href="git"
        class="inline-block btn mr-2 mb-2"
        ><font-awesome-icon :icon="['fas', 'code']" /> Source Code</a
      >
      <a
        v-if="live"
        :href="live"
        class="inline-block btn mr-2 mb-2"
        ><font-awesome-icon :icon="['fas', 'laptop']" /> View Live Site</a
      >
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "desc", "img", "git", "live"],
};
</script>
