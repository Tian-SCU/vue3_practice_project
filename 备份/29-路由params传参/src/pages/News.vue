<template>
  <div class="news">
    <!-- news里面的导航区 -->
    <ul>
      <li v-for="news in newsList" :key="news.id">
        <!-- 1.params直接穿参 -->
        <!-- <RouterLink :to="`/news/detail/${news.id}/${news.title}/${news.content}`">{{ news.title }}</RouterLink> -->

        <!-- 2.params第二种语法 -->
        <RouterLink 
        :to="{
            name: 'xiangqing',
            params:{
              id: news.id,
              title: news.title,
              content: news.content,
              //params里面也不允许穿对象
              // a:[1,2,3,2,3]
            }
          }"
        >
            {{ news.title }}
        </RouterLink>
      </li>
    </ul>

    <!-- 展示区 -->
    <div class="news-content">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script setup lang="ts" name="News">
  import type { title } from 'process';
import {reactive} from 'vue'
  import { RouterView } from 'vue-router';

  const newsList = reactive([
    {id:'dadadada01',title:'很好的抗癌食物',content:'西兰花'},
    {id:'dadadada02',title:'如何一夜暴富',content:'学It'},
    {id:'dadadada03',title:'震惊，万万没想到',content:'明天是周一'},
    {id:'dadadada04',title:'好消息！好消息',content:'快过年了'},
  ])
</script>

<style scoped>
.news{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%
}
.news-content{
  flex: 1;
  margin: 0 10px;
  height : 80%;
  border-radius: 10px;
  border: 1px solid;
}
.news li::marker{
  color: #64867E;
}
</style>