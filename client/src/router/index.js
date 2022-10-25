import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LookTicket from '../views/LookTicket.vue'
import AddTicket from '../views/AddTicket.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/lookticket',
    name: 'LookTicket',
    component: LookTicket
  }, 
  {
    path: '/addticket',
    name: 'AddTicket',
    component: AddTicket
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
