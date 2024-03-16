import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/hot',
      name: 'hot',
      component: () => import('../views/PanelView.vue')
    },
  ]
})

export default router
