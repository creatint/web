import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'view-design/dist/styles/iview.css';
import '@/fonts/font/iconfont.js';
import '@/static/common.css'
import Api from './api/index.js';
Vue.prototype.$api = Api;

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
