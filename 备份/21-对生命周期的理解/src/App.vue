<template>
  <!-- <h2 a="1+1" :b="1+1" c="x" :d="x" ref="qwe"></h2> -->
  <!-- <Person a="哈哈" :list="personList"/> -->
  <Person a="哈哈" v-if="isShow"/>
</template>

<script lang="ts" setup name="App">
  import {ref, onMounted} from 'vue'
  import Person from './components/Person.vue'
  
  let isShow = ref(true)

  onMounted(()=>{
    //深度优先遍历DFS，子的操作完毕了才到父组件，App的组件最后挂载完毕
    console.log("父挂载完毕")
  })
</script>


<style></style>