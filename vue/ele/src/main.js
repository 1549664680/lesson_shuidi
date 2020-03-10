import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ljrui from 'ljrui'
import 'ljrui/lib/ljrui.css'
import './config/rem'
Vue.config.productionTip = false
Vue.use(ljrui)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
