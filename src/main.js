// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'es6-promise/auto'
import Vue from 'vue'
import store from './store'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Slick from 'vue-slick'
import AOS from 'aos'
import InfiniteLoading from 'vue-infinite-loading'
import VueScrollTo from 'vue-scrollto'
import VModal from 'vue-js-modal'
import StarRating from 'vue-star-rating'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '../node_modules/slick-carousel/slick/slick.css'
import '../node_modules/slick-carousel/slick/slick-theme.css'
import 'aos/dist/aos.css'

Vue.use(BootstrapVue)
axios.defaults.baseURL = process.env.API_URL
Vue.use(VueAxios, axios)
Vue.use(Slick)
Vue.use(InfiniteLoading)
Vue.use(VueScrollTo)
Vue.use(VModal)
Vue.use(require('vue-moment'))
Vue.component('star-rating', StarRating)

// Styles
require('./styles/app.scss')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  created() {
    AOS.init()
  },
  template: '<App/>',
  components: { App }
})