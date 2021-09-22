import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/global.css'

axios.defaults.baseURL = 'http://localhost:9000'
Vue.prototype.$http = axios // $http这个是自定义的

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
