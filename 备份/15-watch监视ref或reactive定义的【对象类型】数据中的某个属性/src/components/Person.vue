<template>
  <div class="person">
    <h2>姓名： {{ person.name }}</h2>
    <h2>年龄： {{ person.age }}</h2>
    <h2>汽车： {{ person.car.c1 }}、{{ person.car.c2 }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changeC1">修改第一台车</button>
    <button @click="changeC2">修改第二台车</button>
    <button @click="changeCar">修改整个车</button>
  </div>
</template>

<script lang="ts" setup name="Person">
 import { reactive, toRefs, watch } from 'vue';

 //数据
 let person = reactive({
  name: 'zhang-san',
  age: 18,
  car:{
    c1: 'benz',
    c2: 'baoma'
  }
 })

 //4.监听reactive对象中的【基本数据类型】,可以监视一个getter函数
  //  watch(()=>person.name,(newValue,oldValue)=>{
  //   console.log('person.name变化了',newValue,oldValue)
  //  })

  //发现监视reactive中的【对象属性】，可以直接写，监听的是对象内部的属性
  // watch(person.car,(newValue,oldValue)=>{
  //   console.log('person.car',newValue,oldValue)
  // })

  //这样写,这样监视的是整个【对象属性的地址值】
  // watch(()=>person.car,(newValue,oldValue)=>{
  //   console.log('person.car',newValue,oldValue)
  // })

  //最佳实践
  watch(()=> person.car, (newValue,oldValue)=>{
    console.log('person.car',newValue,oldValue)
  },{deep:true})


  function changeName(){
    person.name +=`~`
  }
  function changeAge(){
    person.age +=1
  }
  function changeC1(){
    person.car.c1 = 'aodi'
  }
  function changeC2(){
    person.car.c2 = '大众'
  }
  function changeCar(){
    person.car = {c1: '雅迪',c2:'小牛牛'}
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