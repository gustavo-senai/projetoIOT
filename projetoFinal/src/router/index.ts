import Dashboard from '@/components/Dashboard.vue'
import PaginaInicial from '@/components/paginaInicial/PaginaInicial.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: PaginaInicial
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
  ]
})

export default router
