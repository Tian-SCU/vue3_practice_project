<template>
<div class="person">
  <h2>name: {{name}}</h2>
  <h2>age: {{age}}</h2>
  <h2>tel: {{tel}}</h2>
  <button @click="changeName">修改名字</button>
  <button @click="changeAge">修改年龄</button>
  <button @click="showTel">查看联系方式</button>
  
  <h2>测试{{ a }}</h2>
  <h2>测试{{ c }}</h2>
  <h2>测试{{ d }}</h2>
  <button @click="b">测试methods存在setup</button>
</div>

</template>

<script lang="ts">
export default {
  name: 'Person',
  // beforeCreate(){
  //   console.log("beforeCreated")
  // },
  data(){
    return {
      a: 100,
      c: this.name,
      d: 200
    }
  },
  methods: {
    b(){
      console.log("bbbb")
    }
  },
  setup(props, ctx) {
      // console.log("setup")
      // setup中的this为undefined, vue3中已经弱化this
      // vue3中的setup的生命周期在 vue2的beforecreate之前
      //数据data,此时的name,age,tel都不是响应式的
      let name = "张三"
      let age = 18
      let tel = '133444'

      //setup中直接没有this
      // let x = this.d

      //方法
      const showTel = () =>{ alert(tel) }
      const changeName = ()=>{ name = 'zhang-san'} //这样修改name，页面没有变化，不是响应式的
      const changeAge = ()=> { age+=1 }

      return {
        name,
        age,
        tel,
        showTel,
        changeAge,
        changeName
      }
  }
}
</script>

<style scoped>
  .person{
  background-color: lightgreen;
  box-shadow: 0px 0 10px;
  border-radius: 10px;
  padding: 10px
}
button{
  margin: 0 5px;
}
</style>