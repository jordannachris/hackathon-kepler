import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import OndeEncontrar from '../views/OndeEncontrar.vue'
import Sobre from '../views/Sobre.vue'

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
  }
]

const router = new VueRouter({
  routes
})

export default router
