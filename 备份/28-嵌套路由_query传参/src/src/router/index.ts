//创建一个路由器，并且暴露出去

//1.引入createRouter
import {createRouter, createWebHistory, createWebHashHistory} from 'vue-router'

//3.引入一个一个可能要呈现的组件
import Home from '@/pages/Home.vue'
import News from '@/pages/News.vue'
import About from '@/pages/About.vue'
import Detail from '@/components/Detail.vue'

//2.创建路由器
const router = createRouter({
  history: createWebHistory(), //路由器history工作模式,给客户用的基本toC
  // history: createWebHashHistory(), //hash模式,兼容性好,但是不美观带上了"#"
  routes:[ //一个一个的路由规则
    {
      name: 'zhuye',
      path: '/home',
      component: Home
    },
    {
      name: 'xinwen',
      path: '/news',
      component: News,
      //嵌套路由为子集路由
       children:[
        {
          //匹配/news/detail,注意这里不是/detail
          name: 'xiangqing',
          path: 'detail',
          component: Detail
        }
       ]

    },
    {
      name: 'guanyu',
      path: '/about',
      component: About
    }
  ]
})

//暴露出去router
export default router