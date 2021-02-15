import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/home/Home'
import Login from '@/components/pages/login/Login'
import Cadastro from '@/components/pages/cadastro/Cadastro'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/cadastro',
      name: 'Cadastro',
      component: Cadastro
    }
  ]
})
