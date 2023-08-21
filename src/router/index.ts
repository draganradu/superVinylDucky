import { createRouter, createWebHistory, RouterView } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Tr from "@/i18n/translation"
import LandingPageView from "@/views/LandingPage.vue"
import NotFound from "@/views/E404.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LandingPageView
    },
    {
      path: '/site-map/',
      name: 'site-map',
      component: () => import('../views/sitemap.vue')
    },
    {
      path: '/tools',
      name: 'toolsApp',
      component: RouterView,
      children: [
        {
          path: 'category/:id',
          name: 'toolCategory',
          component: () => import('../views/tools/category.vue')
        },
        {
          path: 'id/:id',
          name: 'toolID',
          component: () => import('../views/tools/id.vue')
        },
        {
          path: 'tag/:id',
          name: 'tagID',
          component: () => import('../views/tools/tag.vue')
        },
        // {
        //   path: 'stickers-category/:name/', 
        //   name: 'Products',
        //   component: HomeView
        // },
      ]
    },
    {
      path: '/:locale',
      name: 'vinylDucky',
      component: RouterView,
      beforeEnter: Tr.routeMiddleware,
      children: [
        {
          path: '',
          name: 'landingPage',
          component: LandingPageView
        },
        {
          path: 'radu-dragan',
          name: 'CvPage',
          component: () => import('../views/CVPage.vue')
        },
        {
          path: 'stickers/001',
          name: 'Products',
          component: () => import('../views/vinylDucky/Products.vue')
        },
        {
          path: 'stickers-category/:name/',
          name: 'ProductsCategory',
          component: () => import('../views/vinylDucky/Category.vue')
        },
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: "/:notFound",
      alias: ['/:notFound/:a', '/:notFound/:a/:b', '/:notFound/:a/:b/:c'],
      name: "error404",
      component: NotFound,
    },
  ]
})

export default router
