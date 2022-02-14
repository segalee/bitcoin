import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue';
import ContactApp from '@/views/ContactApp.vue';
import ContactDetails from '@/views/ContactDetails.vue';
import ContactEdit from '@/views/ContactEdit.vue';
import Statistics from '@/views/Statistics.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/contact',
      name: 'ContactApp',
      component: ContactApp
    },
    {
      path: '/contact/:id',
      name: 'ContactDetails',
      component: ContactDetails
    },
    {
      path: '/contact/edit/:id?',
      name: 'ContactEdit',
      component: ContactEdit
    },
    {
      path: '/statistics',
      name: 'Statistics',
      component: Statistics
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
