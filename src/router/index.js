import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
      mode: 'history',
      base: process.env.BASE_URL,
      routes: [
        {
          path: '/',
          name: 'home',
          meta: {layout: 'main'},
          component: () => import('@/views/Home.vue')
        },
        {
          path: '/cow',
          name: 'coworking',
          meta: {layout: 'main'},
          component: () => import('@/views/Coworking.vue')
        }
      ]
    }
)

