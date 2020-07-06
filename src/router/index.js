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
          component: () => import('@/views/home.vue')
        },
          {
              path: '/coworkings',
              name: 'coworkings',
              component: () => import('@/views/coworkings.vue')
          }
      ]
    }
)

