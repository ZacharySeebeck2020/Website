<template>
  <div v-if="!removed" :class="{ preloader: true, prehidden: prehidden }">
    <div :class="{ animation: true, red: finished }" id="animation"/>
  </div>
</template>
<script>
import Vivus from 'vivus'
export default {
  data() {
    return {
      finished: false,
      prehidden: false,
      removed: false
    }
  },
  mounted() {
    new Vivus('animation', {
      type: 'sync',
      duration: 75,
      file: '/img/preloader.svg',
      pathTimingFunction: Vivus.EASE_IN,
    }, () => {
      this.finished = true
      setTimeout(() => {
        this.prehidden = true
        setTimeout(() => {
          this.removed = true
        }, 600)
      }, 400)
    })
  }
}
</script>
<style>
.prehidden {
  -webkit-transition: all 1s ease-out;
  -moz-transition: all 1s ease-out;
  -o-transition: all 1s ease-out;
  transition: all 1s ease-out;
  opacity: 0;
  z-index: -1;
}

.preloader {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: show;
  z-index: 100000;
  background: rgba(0, 0, 0, .9);
}

.preloader .animation {
    width: 250px;
    height: 250px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.preloader .red .cls-1, .preloader .red .cls-2{
  -webkit-transition: all 0.3s ease-out;
  -moz-transition: all 0.3s ease-out;
  -o-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
  stroke: #ff8080;
}
</style>
