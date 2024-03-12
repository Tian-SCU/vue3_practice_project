<template>
  <ul class="news-list">
    <li>编号(id): {{route.params.id}}</li>
    <li>标题(title): {{route.params.title}}</li>
    <li>内容(content): {{route.params.content}}</li>
  </ul>
</template>

<script setup lang="ts" name="Detail">
  import { useRoute } from 'vue-router';
  const route = useRoute()
</script>

<style scoped>
.news{
  display: flex;
  justify-content: left;
  align-items: center;
  height: 100%
}
</style>