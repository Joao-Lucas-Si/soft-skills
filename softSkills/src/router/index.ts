import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SoftSkillsView from '@/views/SoftSkillsView.vue'
import Pagina404View from '@/views/Pagina404View.vue'
import InteligenciaEmocionalView from '@/views/InteligenciaEmocionalView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/soft-skills/',
      name: 'softskills',
      component: SoftSkillsView
    },
    {
      path: '/inteligencia-emocional/',
      name: 'inteligenciaEmocional',
      component: InteligenciaEmocionalView
    },
    {
      path: '/:catchAll(.*)',
      name: '404',
      component: Pagina404View
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    else {
      return {
        top: 0
      }
    }
  }
})

export default router
