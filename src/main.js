import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store/store'
import vuetify from './plugins/vuetify'
import './plugins'

Vue.config.productionTip = false
new Vue({
  store: store,
  router,
  vuetify,
  render: h => h(App),
}).$mount('#app')
