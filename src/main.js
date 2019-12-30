import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/index.scss'

import Adal from 'vue-adal'

Vue.config.productionTip = false

Vue.use(ElementUI)

Vue.use(Adal, {
  config: {
    instance: '**',
    tenant: '**',
    clientId: '**',
    redirectUrl: 'http://localhost:8080',
    cacheLocation: 'localStorage'
  },
  requireAuthOnInitialize: false,
  router: router
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
