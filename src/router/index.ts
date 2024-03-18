import { createRouter, createWebHistory } from 'vue-router'
import mainView from '@/components/mainView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: mainView
    }
  ]
})

export default router
