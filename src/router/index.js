import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Weights from '@/components/Weights'
import Distances from '@/components/Distances'
import Speeds from '@/components/Speeds'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/weights',
      name: 'Weights',
      component: Weights
    },
    {
      path: '/distances',
      name: 'Distances',
      component: Distances
    },
    {
      path: '/speeds',
      name: 'Speeds',
      component: Speeds
    }
  ]
})
