import {createApp} from 'vue'
import App from './App.vue'

import Hello from './Hello.vue'

// 创建应用
const app = createApp(App)

//注册全局组件
app.component('Hello', Hello)
app.config.globalProperties.x = 99


declare module 'vue'{
  interface ComponentCustomProperties{
    x: number
  }
}

//element为html元素，后面一项为option里面解构value就可以
app.directive('beauty',(element,{value})=>{
  element.innerText += value
  element.style.color = 'green'
  element.style.backgroundColor = 'yellow'
})



// 挂载应用
app.mount('#app')

//2s之后注销组件
setTimeout(()=>{
  app.unmount()
}, 2000)