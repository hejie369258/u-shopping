// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/js/remScale'
import './assets/css/reset.css'
// import './assets/font/iconfont.css'
import store from './store'
Vue.config.productionTip = false

import vantUI from 'vant'
Vue.use(vantUI)
import 'vant/lib/index.css'

//在vue原型上挂载一个服务器地址
Vue.prototype.$imgUrl = 'http://localhost:3000'
console.log(this.$imgUrl);
// import common from './common'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
