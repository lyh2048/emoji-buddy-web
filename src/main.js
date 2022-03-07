import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import './assets/css/global.css'
import './config/axiosConfig'
import { message } from "ant-design-vue"


Vue.prototype.$message = message;
message.config({
  duration: 2,
  top: `100px`,
  maxCount: 3
})
Vue.config.productionTip = false
Vue.use(Antd)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
