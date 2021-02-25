import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Animales from '../views/Animales.vue'
import Insectos from '../views/Insectos.vue'
import Link from '../views/Link.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }, 
 {
  path: '/Animales',
  name: 'Animales',
  component: Animales
 },
 {
   path: '/Insectos',
   name: 'Insectos',
   component: Insectos
  },
  {
    path: '/Link',
    name: 'Link',
    component: Link
   },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
