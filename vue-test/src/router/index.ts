import { createRouter, createWebHistory, RouterView } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Tr from "@/i18n/translation" 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:locale',
      name: 'homeeer',
      component: RouterView,
      beforeEnter: Tr.routeMiddleware,
      children: [  // <--- 4
        {
          path: '', // <--- 5
          name: 'homeLang',
          component: HomeView
        },
        {
          path: 'about',  // <--- 6
          name: 'aboutLang',
          component: () => import('../views/AboutView.vue')
        }
      ]
    },

    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
