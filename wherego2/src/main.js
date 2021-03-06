
import Vue from 'vue'
import App from './App'
import fastClick from 'fastclick'
import router from './router'
import store from './store'
import './assets/iconfont/iconfont.css'
import 'styles/reset.css'
import 'styles/border.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)

fastClick.attach(document.body)

new Vue({
  el: '#app',
 router,
 store,
  components: { App },
  template: '<App/>'
})
