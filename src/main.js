import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap-vue/dist/bootstrap-vue.css";
import Vuex from 'vuex';


import {library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {far} from '@fortawesome/free-regular-svg-icons'
import {FontAwesomeIcon, FontAwesomeLayers} from '@fortawesome/vue-fontawesome' 
import { faFacebookSquare, faTwitterSquare, faInstagramSquare, faPinterestSquare } from '@fortawesome/free-brands-svg-icons'

library.add(fas);
library.add(far);
library.add(faFacebookSquare, faTwitterSquare, faInstagramSquare, faPinterestSquare)
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('font-awesome-layers', FontAwesomeLayers);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin)
Vue.use(Vuex);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
