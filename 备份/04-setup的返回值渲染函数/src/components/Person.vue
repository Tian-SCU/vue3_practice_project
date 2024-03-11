<template>
<div class="person">
  <h2>name: {{name}}</h2>
  <h2>age: {{age}}</h2>
  <h2>tel: {{tel}}</h2>
  <button @click="changeName">修改名字</button>
  <button @click="changeAge">修改年龄</button>
  <button @click="showTel">查看联系方式</button>
</div>

</template>

<script lang="ts">
export default {
  name: 'Person',
  // beforeCreate(){
  //   console.log("beforeCreated")
  // },
  setup(props, ctx) {
      // console.log("setup")
      // setup中的this为undefined, vue3中已经弱化this
      // vue3中的setup的生命周期在 vue2的beforecreate之前
      //数据data,此时的name,age,tel都不是响应式的
      let name = "张三"
      let age = 18
      let tel = '133444'

      //方法
      const showTel = () =>{ alert(tel) }
      const changeName = ()=>{ name = 'zhang-san'} //这样修改name，页面没有变化，不是响应式的
      const changeAge = ()=> { age+=1 }

      // return {
      //   name,
      //   age,
      //   tel,
      //   showTel,
      //   changeAge,
      //   changeName
      // }

      //setup return也可以是一个渲染函数，直接指定模板的渲染内容
      return ()=> '哈哈'
  }
}
</script>

<style scoped>
  .person{
  background-color: lightgreen;
  box-shadow: 0px 0 10px;
  border-radius: 10px;
  padding: 20px
}
button{
  margin: 0 5px;
}
</style>