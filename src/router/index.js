import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: () => import('../views/login')
    },
    {
      path: '/admin',
      component: () => import('../views/admin'),
      redirect: 'admin/home',
      children: [
        {
          path: 'home',
          meta: { title: '系统首页' },
          component: () => import('../views/pages/home')
        },
        {
          path: 'table',
          meta: { title: '列表数据' },
          component: () => import('../views/pages/table')
        }
      ]
    }
  ]
})

export default router
