<template>
  <!-- <h2 a="1+1" :b="1+1" c="x" :d="x" ref="qwe"></h2> -->
  <!-- <Person a="哈哈" :list="personList"/> -->
  <Person a="哈哈"/>
</template>

<script lang="ts" setup name="App">
  import { reactive } from 'vue';
  import Person from './components/Person.vue'
  import { type Persons } from './types';

  let x = 9
  let personList = reactive<Persons>([
    {id:'asdasdasas01',name:'张三',age:18},
    {id:'asdasdasas02',name:'李四',age:19},
    {id:'asdasdasas03',name:'王武',age:20,x:9},
  ])
</script>


<style></style>