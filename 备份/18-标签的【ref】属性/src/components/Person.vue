<template>
  <div class="person">
    <h1>中国</h1>
    <h2 ref="title2">北京</h2>
    <h3>尚硅谷</h3>
    <button @click="showLog">点我输出</button>
  </div>
</template>

<script lang="ts" setup name="Person">
  import {ref, defineExpose} from 'vue'

  //创建同名title2，用于存储ref标记的内容
  let title2 = ref()
  let a = ref(0)
  let b = ref(1)
  let c = ref(2)

  function showLog(){
    //不要用id来获取。可能id冲突，会优先获取第一个id
    // console.log(document.getElementById('title2'))
    console.log(title2.value)
  }

  defineExpose({a,b,c})
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