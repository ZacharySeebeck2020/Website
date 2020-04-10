import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faUser, faVial, faCode, faLaptop, faFile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faLinkedin, faGithub, faTwitter, faVuejs } from '@fortawesome/free-brands-svg-icons';
import VueParticles from 'vue-particles';

library.add(faHome, faVial, faUser, faCode, faLaptop, faFile);
library.add(faLinkedin, faGithub, faTwitter, faVuejs);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(VueParticles);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
