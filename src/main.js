import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import userApi from '../static/user';
Vue.use(userApi);
//全局引用个人定义js文件
import * as http from './api/api'
// 自定义tools
Vue.prototype.$http = http;
Vue.config.productionTip = false
 new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
