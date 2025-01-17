import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/views/home/Index.vue'
import About from '@/views/about/About.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
   
  ]
})

export default router
