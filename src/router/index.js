import { createRouter, createWebHistory } from 'vue-router'

const subtitle = "微博信息系统";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/LoginView.vue'),
      meta: {
        title: "登陆"
      }
    },
    {
      path: '/hot',
      name: 'hot',
      component: () => import('../views/PanelView.vue'),
      meta: {
        title: "热榜"
      }
    },
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title + " - " + subtitle;
  }
  next();
});

export default router
