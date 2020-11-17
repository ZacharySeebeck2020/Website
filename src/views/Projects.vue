<template>
  <div class="projects content-center mx-auto">
    <h1 class="text-primary text-3xl py-auto mb-5">All Of My Projects</h1>
    <div class="flex flex-wrap w-3/4 mx-auto">
      <Project title="BPA Web App - Epic Win Sporting Goods" desc="During the Business Professionals of America 2020 season, I was tasked with creating a full e-commerce suite for a company named Epic Win Sporting Goods. I chose to build this app using a mix of different technologies including Laravel, Couchbase, Vue.js, and TailwindCSS. The project was first in the state and a national finalist." git="https://github.com/ZacharySeebeck2020/BPA-WebApp-2020" img="/img/proj/ewsg.png"/>
      <Project title="Bay City Santa House" desc="Our local Bay City Santa House wanted a new website to be able to give parents and children information about the Santa house and to be able to submit forms to volunteer or photos they took while in the Santa house. The site was built on top of Wordpress to give them easy control of how the site looked and functioned should they want to do any changes in the future." live="https://baycitysantahouse.com/" img="/img/proj/santa_house.png"/>
      <Project title="C# Chrome Dino Game" desc="This is a basic implementation of the Chrome Offline Dino Game in C#. It was used during the Bay-Arenac Career Center 10th grade days to give students an introduction to programming and hopefully get them interested in learning more about technology." git="https://github.com/ZacharySeebeck2020/Chrome-Dino-Game" img="/img/proj/dino.png"/>
      <Project title="7 Character Display Challenge" desc="One of the challenges that were given to us, was to try and recreate the 7 character display program that was shown on a Tom Scott video. With 2 notable differences, the program had to be written in C#, and no regular expressions could be used." git="https://github.com/ZacharySeebeck2020/Tom-Scott-7CharacterDisplays"/>
      <Project title="Computer Programming Final - Joe's Automotive" desc="After the first year of the Bay-Arenac Carrer Center programming course, I was tasked with making a CMS for Joe's Automotive using C#, WinForms, and SQL Server. This project wanted a fully working customer system, including invoice creation, vehicle tracking, and parts management." git="https://github.com/ZacharySeebeck2020/Joes-Automotive" img="/img/proj/joes_auto.png"/>
    </div>
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