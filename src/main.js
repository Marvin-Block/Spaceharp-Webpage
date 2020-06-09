import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import vuetify from './plugins/vuetify'
import './plugins'
import Axios from 'axios'
Vue.config.productionTip = false
// set auth header
Axios.defaults.headers.common.Authorization = `Bearer ${store.state.token}`

new Vue({
  store: store,
  router,
  vuetify,
  render: h => h(App),
}).$mount('#app')
