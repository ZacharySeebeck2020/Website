<template>
  <div class="testing content-center mx-auto">
    <h1 class="text-primary text-3xl py-auto mb-5">All Of My Projects</h1>
    <Project title="C# Chrome Dino Game" desc="This is a basic implementation of the Chrome Offline Dino Game in C#. It was used durring the Bay-Arenac Career Center 10th grade days give students an intoduction to programming and hoefully get them interested in learning more" git="https://github.com/ZacharySeebeck2020/Chrome-Dino-Game" img="/img/proj/dino.png"/>
    <Project title="BPA Web App - Epic Win Sporting Goods" desc="During the Business Professionals of America 2020 season, we were tasked with creating a full e-commerce suite for a comapny named Epic Win Sporting Goods. My team and I chose to build this app using a mix of different technologies including Laravel, Couchbase, Vue.js, and Material Design Bootstrap." git="https://github.com/ZacharySeebeck2020/BPA-WebApp-2020" img="/img/proj/ewsg.png"/>
    <Project title="7 Character Display Challenge" desc="One of the challenges that was given to us, was to try and recreate the 7 character display program that was shown on a Tom Scott video. With 2 noteable diffenrences, the progran had to be written in C#, and no regular expressions could be used." git="https://github.com/ZacharySeebeck2020/Tom-Scott-7CharacterDisplays"/>
    <Project title="Computer Programming Final - Joe's Automotive" desc="After the first year of the computer programming course that I attend, I was tasked with making a CMS for Joe's Automotive using C#, WinForms, and SQL Server. This project wanted a fully working customer system, including invoice creation, vehicle tracking, and parts management." git="https://github.com/ZacharySeebeck2020/Joes-Automotive" img="/img/proj/joes_auto.png"/>
  </div>
</template>

<script>
import Project from '@/components/Project.vue'

export default {
  name: 'projects',
  components: {
    Project,
  },
}
</script>