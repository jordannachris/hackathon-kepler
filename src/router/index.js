import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import OndeEncontrar from '../views/OndeEncontrar.vue'
import Sobre from '../views/Sobre.vue'
import RioBranco from '../views/RioBranco.vue'
import Macapa from '../views/Macapa.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/ondeencontrar',
    name: 'OndeEncontrar',
    component: OndeEncontrar
  },
  {
    path: '/sobre',
    name: 'Sobre',
    component: Sobre
  },
  {
    path: '/riobranco',
    name: 'RioBranco',
    component: RioBranco
  },
  {
    path: '/macapa',
    name: 'Macapa',
    component: Macapa
  }
]

const router = new VueRouter({
  routes
})

export default router
