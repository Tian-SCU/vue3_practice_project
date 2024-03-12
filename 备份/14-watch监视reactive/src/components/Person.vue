<template>
  <div class="person">
    <h2>情况三：监视【reactive】的【对象类型】</h2>
    <h2>{{ person.name }}</h2>
    <h2>{{ person.age }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changePersonInfo">修改person</button>
    <button @click="testDeep">隐藏式深度监听的测试</button>
    
  </div>
</template>

<script lang="ts" setup name="Person">
  import { reactive, watch } from 'vue'

  //数据
  let person =reactive({
    name: 'zhangsan',
    age: 18
  })
  let obj = reactive({
    a:{
      b:{
        c: 900
      }
    }
  })

  //方法
  function changeName(){
    person.name +='~'
  }
  function changeAge(){
    person.age += 1
  }
  function changePersonInfo(){
    Object.assign(person,{name:'lisi', age: 20})
  }
  function testDeep(){
    obj.a.b.c = 1000
  }

  //3.监视【reactive】的【对象类型】数据，默认是隐式开启深度监视的,不可以关闭
  watch(person, (newValue, oldValue)=>{
    console.log("person变化了", newValue,oldValue)
  })
  watch(obj,(newValue,oldValue)=>{
    console.log("深层的obj属性变化了",newValue,oldValue)
  })
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