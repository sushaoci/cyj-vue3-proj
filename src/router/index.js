import { createWebHistory, createRouter } from 'vue-router'

const routes = [
  {
    path: '/', component: () => import('@/views/LazyLoadImage/LazyLoadView.vue'), children: [
      { path: 'viewport', component: () => import('@/views/LazyLoadImage/LazyLoadViewportView.vue'), },
      { path: 'observer', component: () => import('@/views/LazyLoadImage/LazyLoadObserverView.vue'), },
    ],
    redirect: '/viewport',
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router