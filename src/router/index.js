import { createRouter, createWebHashHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'


const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
        path: '/',
        name: 'home',
        component: HomeView
      },
      {
        path: '/contact',
        name: 'contact',
        component: ContactView
      },
  ]
})

export default router