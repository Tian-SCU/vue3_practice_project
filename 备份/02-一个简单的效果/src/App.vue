<template>
  <!-- html -->
  <div class="app">
    <h1>
      你好啊,这里是App组件
    </h1>
    <Person/>
  </div>
</template>

<script lang="ts">
  import Person from './components/Person.vue'

  //JS或者TS
  export default {
    name: 'App', //组件名
    components: {Person} //注册组件
  }
</script>


<style>
  /* 样式 */
  .app{
    background-color: #add;
    box-shadow: 0px 0 10px;
    border-radius: 10px;
    padding: 20px
  }
</style>