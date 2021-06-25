<template>
  <div class="projects content-center mx-auto">
    <h1 class="text-primary text-3xl py-auto mb-5">All Of My Projects</h1>
    <div class="flex flex-wrap w-3/4 mx-auto">
      <Project 
        title="BPA Web App - Epic Win Sporting Goods" 
        desc="During the Business Professionals of America 2020 season, I was tasked with creating a full 
          e-commerce suite for a company named Epic Win Sporting Goods. I chose 
          to build this app using a mix of different technologies including
          Laravel, Couchbase, Vue.js, and TailwindCSS. The project was first
          in the state and a national finalist." 
        git="https://github.com/ZacharySeebeck2020/BPA-WebApp-2020" 
        live="https://ewsg.zacharyseebeck.com" 
        img="/img/proj/ewsg.png"
        />

      <Project 
        title="United Way Of Bay City - Gravity Forms Plugin" 
        desc="The United Way Of Bay City was looking for a plugin for their forms builder, that would periodically save
          a given form, and if left dormant for a while, would email the user allowing them to pick up where 
          they left off. This plugin also allowed admins to take a look at incomplete forms to generate a lead." 
        git="https://github.com/ZacharySeebeck2020/GravityForms-AutoEmailAddon"
        live="https://www.unitedwaybaycounty.org/" 
        img="/img/proj/united_way.png"
      />
      
      <Project 
        title="Bay City Santa House" 
        desc="Our local Bay City Santa House wanted a new website to be able to give parents and children information about the 
          Santa house and to be able to submit forms to volunteer or photos they
          took while in the Santa house. The site was built on top of Wordpress 
          to give them easy control of how the site looked and functioned should they
          want to do any changes in the future. This site was built by a handful of students
          at the Bay Arenac Career Center." 
        live="https://baycitysantahouse.com/" img="/img/proj/santa_house.png"
      />
      
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