import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Animales from '../views/Animales.vue'
import Insectos from '../views/Insectos.vue'
import Link from '../views/Link.vue'
import Orquidea from '../views/Orquidea.vue'
import Begonia from '../views/Begonia.vue'
import Suculenta from '../views/Suculenta.vue'

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
    path: '/Orquidea',
    name: 'Orquidea',
    component: Orquidea
   },
   {
    path: '/Begonia',
    name: 'Begonia',
    component: Begonia
   },  {
    path: '/Suculenta',
    name: 'Suculenta',
    component: Suculenta
   },  {
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
