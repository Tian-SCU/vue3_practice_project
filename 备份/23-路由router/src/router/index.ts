//创建一个路由器，并且暴露出去

//1.引入createRouter
import {createRouter, createWebHistory} from 'vue-router'

//3.引入一个一个可能要呈现的组件
import Home from '@/components/Home.vue'
import News from '@/components/News.vue'
import About from '@/components/About.vue'

//2.创建路由器
const router = createRouter({
  history: createWebHistory(), //路由器的工作模式
  routes:[ //一个一个的路由规则
    {
      path: '/home',
      component: Home
    },
    {
      path: '/news',
      component: News
    },
    {
      path: '/about',
      component: About
    }
  ]
})

//暴露出去router
export default router