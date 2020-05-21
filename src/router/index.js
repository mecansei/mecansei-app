import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Products from '@/components/Products'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/Products/:token',
      name: 'Products',
      component: Products
    }
  ]
})
