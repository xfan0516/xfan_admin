import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import xfanMdmin from '@/components/index.js'
Vue.config.productionTip = false

Vue.use(xfanMdmin)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
