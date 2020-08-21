import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import vuetify from './plugins/vuetify'
import routes from './router/index'
import store from './store'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:5006/app/coinbase'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(vuetify, {})

const router = new VueRouter({ mode: 'history', routes })

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

export default router
