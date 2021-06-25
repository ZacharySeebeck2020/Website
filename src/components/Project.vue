<template>
  <div class="overflow-hidden bg-background-darker my-3 p-2 w-full sm:p-4 h-auto sm:h-64 rounded-2xl shadow-lg flex flex-col sm:flex-row gap-5 select-none">
    <div
        class="h-52 max-w-sm sm:h-full sm:w-30 rounded-xl bg-gray-100 bg-center bg-cover"
    >
      <img v-if="img" :src="img">
    </div>
    <div class="flex sm:flex-1 flex-col gap-2 p-1">
        <h1 class="text-lg sm:text-xl font-semibold  text-gray-600">
            {{title}}
        </h1>
        <p class="mx-10 mt-3 text-gray-500 text-sm sm:text-base line-clamp-3">
            {{desc}}
        </p>
        <div class="flex gap-4 mt-auto">
        <div class="ml-auto flex">
          <a
            target="_new"
            v-if="git"
            :href="git"
            class='mx-2 text-primary flex items-center gap-1 sm:text-lg border border-primary px-3 py-1 rounded-full hover:bg-gray-50 transition-colors focus:bg-gray-100 focus:outline-none focus-visible:border-gray-500'
          >
              <span>Source Code</span>
          </a>
          <a
            target="_new"
            v-if="live"
            :href="live"
            class='mx-2 text-primary flex items-center gap-1 sm:text-lg border border-primary px-3 py-1 rounded-full hover:bg-gray-50 transition-colors focus:bg-gray-100 focus:outline-none focus-visible:border-gray-500'
          >
              <span>View Live Site</span>
          </a>
        </div>
        </div>
      </div>
  </div>
<!-- <div class="px-6 pt-4 pb-2 bg-background-darker opacity-75">
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
</div> -->
</template>



<script>
export default {
  props: ["title", "desc", "img", "git", "live"],
};
</script>
