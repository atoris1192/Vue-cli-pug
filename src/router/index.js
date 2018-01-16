import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import page1 from '@/components/page1'
import page2 from '@/components/page2'
// import page1 from '../components/page1'
// import page2 from '../components/page2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'page1',
      component: page1
      // name: 'HelloWorld',
      // component: HelloWorld
    },
    {
      path: '/page2',
      name: 'page2',
      component: page2
    },
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
