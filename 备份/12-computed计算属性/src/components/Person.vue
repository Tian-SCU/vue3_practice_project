<template>
  <div class="person">
    姓: <input type="text" v-model="lastName"><br>
    名: <input type="text" v-model="firstName"><br>
    <button @click="changeFullName">将全名更改为li-si</button>
    全名: <span>{{fullName}}</span>
    <!-- 全名: <span>{{fullName}}</span>
    全名: <span>{{fullName}}</span> -->
    <!-- 全名: <span>{{fullName2()}}</span>
    全名: <span>{{fullName2()}}</span>
    全名: <span>{{fullName2()}}</span> -->
  </div>
</template>

<script lang="ts" setup name="Person">
  import { computed, ref } from 'vue'
  let lastName = ref('zhang')
  let firstName = ref('san')

  //computed必须有返回值,有缓存：比如触发几次,computed里面数据更改也会跟着更改。

  //这样定义的fullName是只读的，并且不能修改
  // let fullName = computed(()=>{
  //   console.log("1")
  //   return lastName.value.slice(0,1).toUpperCase()+lastName.value.slice(1) + '-' + firstName.value
  // })

  //这么定义的fullName是一个计算属性，可读可写
  let fullName = computed({
    get(){
      return lastName.value.slice(0,1).toUpperCase()+lastName.value.slice(1) + '-' + firstName.value
    },
    set(newValue){
      //更新的时候会传入新的value
      //console.log('set',newValue) //set li-si
      const [newLastname, newFirsetname] = newValue.split('-')
      lastName.value = newLastname
      firstName.value = newFirsetname
    }
  })

  function changeFullName(){
    //只引起了computed的set调用
    fullName.value = 'li-si'
  }
  //function其实是没缓存的
  // function fullName2(){
  //   console.log(2)
  // }
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