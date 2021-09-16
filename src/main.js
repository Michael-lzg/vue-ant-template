import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import NProgress from 'nprogress' // 引入nprogress插件
import 'nprogress/nprogress.css'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import util from './utils/util'
Vue.use(util)
Vue.use(Antd)

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})
router.afterEach(() => {
  NProgress.done()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
