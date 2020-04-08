import Vue from 'vue'
import Router from 'vue-router'
import Skills from '@/components/Skills'
import About from '@/components/About'
import VueLogo from '@/components/VueLogo'
import Languages from '@/components/Languages'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/skill/:name',
      component: Skills,
      children: [
        {
          path: '/',
          component: Languages
        }
      ]
    },{
      path: '/about',
      component: About
    },{
      path: '/',
      component: About
    },{
      path: '/logo',
      component: VueLogo
    }
  ]
})
