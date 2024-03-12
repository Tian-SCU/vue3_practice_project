<template>
  <div class="person">
    <h2>name: {{ name }}</h2>
    <h2>age: {{ age }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>

  </div>
</template>

<script lang="ts" setup name="Person">
  import { reactive, toRefs, toRef } from 'vue'
  
  //data
  let person = reactive({
    name: 'dab',
    age: 18
  })
  //当从reactive解构出来的name和age不是响应式的
  // let {name, age} = person

  //toRefs->把一个reactive定义的对象中的每一组key-value都变成由ref包裹的新的对象
  //把值传递变成了 -> 地址传递(把地址拷贝过去了)
  let {name, age} = toRefs(person)

  //第一个参数响应式对象，第二个参数为property
  let nl = toRef(person,'age')
  console.log(nl.value)

  //function
  function changeName(){
    name.value += '~'
    console.log(name.value,person.name)
  }
  function changeAge(){
    age.value += 1
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