<template>
  <div class="person">
    <h2>当前求和为: {{ sum }}</h2>
    <button @click="add">点我sum加1</button>

  </div>
</template>

<script lang="ts" setup name="Person">
  import {ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted} from 'vue'

  //数据
  let sum = ref(0)

  //方法
  function add(){
    sum.value += 1
  }

  //创建->直接setup内
  console.log(`创建`)

  //挂载
  onBeforeMount(()=>{
    console.log("挂载前")
  })
  onMounted(()=>{
    console.log("子挂载完毕")
  })

  //更新
  onBeforeUpdate(()=>{
    console.log("更新前")
  })
  onUpdated(()=>{
    console.log("更新完毕")
  })

  //卸载
  onBeforeUnmount(()=>{
    console.log("卸载前")
  })
  onUnmounted(()=>{
    console.log("卸载完毕")
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