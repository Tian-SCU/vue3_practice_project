<template>
  <ul class="news-list">
    <li>编号(id): {{ query.id }}</li>
    <li>标题(title): {{ query.title }}</li>
    <li>内容(content): {{ query.content }}</li>
  </ul>
</template>

<script setup lang="ts" name="Detail">
  import { toRefs } from 'vue';
import { useRoute } from 'vue-router';
  const route = useRoute()

  //如果直接解构，会失去响应式
  // let {query} = route

  let {query} = toRefs(route)
  // console.log('@',route)


</script>

<style scoped>
.news{
  display: flex;
  justify-content: left;
  align-items: center;
  height: 100%
}
</style>