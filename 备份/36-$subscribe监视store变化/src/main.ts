import { createApp } from "vue";
import App from "./App.vue"
//第一个：引入pinia
import { createPinia } from "pinia";

const app = createApp(App)
//第二步：创建pinia,有点像工厂函数
const pinia = createPinia()

// 第三步：安装pinia, 放在app挂载之前
app.use(pinia)
app.mount('#app');

