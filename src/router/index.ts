import { createRouter, createWebHistory, RouterView } from 'vue-router'
import Tr from "@/i18n/translation"
import LandingPageView from "@/views/LandingPage.vue"
import InformationPageView from "@/views/informatiePage.vue"
import NotFound from "@/views/E404.vue"
import store from "@/store/"

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
        {
          path: 'login/',
          name: 'login',
          component: () => import('../views/tools/CRUD/login.vue')
        },
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
          path: 'all-products/',
          name: 'allProducts',
          component: () => import('../views/vinylDucky/AllProducts.vue')
        },
        {
          path: 'radu-dragan/:skill?',
          name: 'CvPage',
          component: () => import('../views/CVPage.vue'),
          beforeEnter: (to: any, _from: any, next: any) => {
            const listOfSkills = ["front", "scrum", "ui"]
            if (listOfSkills.includes(to.params.skill)) {
              return next()
            } else {
              return next(`/${to.params.locale}/radu-dragan/${listOfSkills[0]}`)
            }
          },
        },
        {
          path: 'info',
          name: 'InfoPage',
          component: InformationPageView,
        },
        {
          path: 'stickers/:id',
          name: 'Products',
          component: () => import('../views/vinylDucky/ProductsView.vue'),
          beforeEnter: (to: any, _from: any, next: any) => {
            const productIds = Object.keys(store.state.shop.products)
            if (productIds.indexOf(to.params.id) > -1) {
              return next()
            } else {
              return next('/404/')
            }
          },
        },
        {
          path: 'stickers-category/:name/',
          name: 'ProductsCategory',
          component: () => import('../views/vinylDucky/CategoryView.vue')
        },

      ]
    },
    {
      path: "/:notFound/:notFound1?/:notFound2?/",
      name: "error404",
      component: NotFound,
    },
  ]
})

export default router
