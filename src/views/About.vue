<template>
  <div class="mx-2">
    <div class="about">

      <!-- About Me -->
      <div class="flex items-center h-auto lg:pt-16 flex-wrap mx-auto my-16 lg:px-3 lg:my-0">

        <!--Img Col-->
        <div class="w-full lg:w-2/5">
          <img src="/img/senior_lean.jpg" class="rounded-none lg:rounded-lg shadow-2xl hidden lg:block">

        </div>

        <!--Main Col-->
        <div id="profile"
          class="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg bg-background-darker shadow-lg lg:rounded-r-none opacity-75 mx-6 lg:mx-0">
          <div class="p-4 md:p-12 text-center lg:text-left">
            <!-- Image for mobile view-->
            <div class="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
              style="background-image: url('/img/senior_lean.jpg')"></div>

            <h1 class="text-3xl font-bold pt-8 lg:pt-0 text-primary">About Me</h1>
            <div class="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-teal-500 opacity-25"></div>

            <p class="pt-8 text-lg text-secondary-lighter">
              I am a high school senior with a deep interest in web development and technology. I currently work for <a target="_new" href="https://ntdealerservices.com">Newtech Dealer Services</a> as a 
              software developer using a range of technology including Laravel, VueJS, MySql, and Couchbase. Previously I've also worked on developing websites with
              all-in-one content management systems such as Wordpress and developing plugins to meet customer's needs.
            </p>

            <h2 class="text-xl font-bold mt-8 lg:pt-0 text-primary">How To Contact Me</h2>
            <div class="mx-auto lg:mx-0 w-2/3 pb-3 border-b-2 border-teal-500 opacity-25"></div>
            <p class="pt-4 text-lg text-secondary-lighter"><font-awesome-icon class="mr-1" :icon="['fas', 'phone']" />: (989) 750-5996</p>
            <p class="pt-1 text-lg text-secondary-lighter"><font-awesome-icon class="mr-1" :icon="['fas', 'envelope-square']" />: <a href="mailto:seebeckzachary@gmail.com">seebeckzachary@gmail.com</a></p>

          </div>
        </div>
      </div>

      
      <!-- Technology I Know -->
      <div class="flex items-center h-auto lg:pt-16 flex-wrap mx-auto my-16 lg:px-3 lg:my-0 hidden md:block">

        <!--Main Col-->
        <div id="profile"
          class="w-full lg:w-4/5  rounded-lg lg:rounded-l-lg bg-background-darker shadow-lg lg:rounded-r-none opacity-75 mx-6 lg:mx-auto">
          <div class="p-4 md:p-12 text-center lg:text-center">

            <h1 class="text-3xl font-bold pt-8 lg:pt-0 text-primary">Technology I've Used</h1>
            <div class="mx-auto lg:mx-0 w-full pt-3 border-b-2 border-teal-500 opacity-25"></div>
            <div class="pt-3 hidden sm:block">
              <i title="Amazon Web Services" class="devicon-amazonwebservices-plain text-secondary text-4xl px-1 flex-auto"></i>
              <i title="Apache" class="devicon-apache-plain text-secondary text-4xl px-1"></i>
              <i title="VueJS" class="devicon-vuejs-plain text-secondary text-4xl px-1"></i>
              <i title="Git" class="devicon-git-plain text-secondary text-4xl px-1"></i>
              <i title="C#" class="devicon-csharp-plain text-secondary text-4xl px-1"></i>
              <i title="Docker" class="devicon-docker-plain text-secondary text-4xl px-1"></i>
              <i title="DotNet" class="devicon-dot-net-plain text-secondary text-4xl px-1"></i>
              <i title="Github" class="devicon-github-plain text-secondary text-4xl px-1"></i>
              <i title="Laravel" class="devicon-laravel-plain text-secondary text-4xl px-1"></i>
              <i title="Nginx" class="devicon-nginx-plain text-secondary text-4xl px-1"></i>
              <i title="WordPress" class="devicon-wordpress-plain text-secondary text-4xl px-1"></i>
              <i title="Microsoft Visual Studio" class="devicon-visualstudio-plain text-secondary text-4xl px-1"></i>
            </div>

<!-- 
            <p class="pt-8 text-lg text-secondary-lighter">
              I am a high school senior with a deep interest in web development and technology. I currently work for <a target="_new" href="https://ntdealerservices.com">Newtech Dealer Services</a> as a 
              software developer using a range of technology including Laravel, VueJS, MySql, and Couchbase. Previously I've also worked on developing websites with
              all-in-one content management systems such as Wordpress and developing plugins to meet customer's needs.
            </p> -->

          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'about',
    components: {}
  }
</script>