<template>
  <button @click="showLog">点我输出person的ref</button>
  <Person ref="ren"/>


</template>

<script lang="ts" setup name="App">
  import Person from './components/Person.vue'
  import {ref} from 'vue'

  //data
  let ren = ref()

  //数据
  function showLog(){
    console.log(ren.value)
  }
</script>


<style></style>