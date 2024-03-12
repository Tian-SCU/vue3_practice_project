<template>
  <ul class="news-list">
    <li>编号(id): {{id}}</li>
    <li>标题(title): {{title}}</li>
    <li>内容(content): {{content}}</li>
  </ul>
</template>

<script setup lang="ts" name="Detail">
  defineProps(['id','title','content'])
</script>

<style scoped>
.news{
  display: flex;
  justify-content: left;
  align-items: center;
  height: 100%
}
</style>