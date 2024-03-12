<template>
  <div class="person">
    <!-- <h2>情况一：监视【ref】的【基本数据类型】</h2>
    <h2>{{ sum }}</h2> -->

    <h2>情况二：监视【ref】的【对象类型】</h2>
    <h2>{{ person.name }}</h2>
    <h2>{{ person.age }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changePersonInfo">修改person</button>
    
  </div>
</template>

<script lang="ts" setup name="Person">
  import { ref, watch } from 'vue'

  //数据
  let sum = ref(0)
  let person =ref({
    name: 'zhangsan',
    age: 18
  })

  //方法
  function changeSum(){
    sum.value +=1
  }
  function changeName(){
    person.value.name +='~'
  }
  function changeAge(){
    person.value.age += 1
  }
  function changePersonInfo(){
    person.value = {
      name:'莉丝',
      age: 20
    }
  }

  //监视,传递两个参数 (target, callback)
  //1.监视ref定义的基本类型数据,不用写.value
  const stopWatch = watch(sum,(newValue, oldValue)=>{
    console.log("sum变化了",newValue,oldValue)
    if(newValue>=10){
      stopWatch()
    }
  })
  //2.监视ref定义的对象数据,默认监视的是对象的地址值改变才changePersonInfo触发
  watch(person,(newValue, oldValue)=>{
    console.log("person变化了",newValue,oldValue)
  },{
    //对于对象内部的属性改变也监视，不仅于对象的地址改变
    deep: true,
    immediate: true  //第一次就开启监听,oldValue为undefined
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