<template>
  <div class="news">
    <!-- news里面的导航区 -->
    <ul>
      <li v-for="news in newsList" :key="news.id">
        <button @click="showNewsDetail(news)">查看新闻</button>
        <RouterLink 
        :to="{
            name: 'xiangqing',
            query:{
              id: news.id,
              title: news.title,
              content: news.content,
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
  import {type NewsInter} from '@/types'
  import {reactive} from 'vue'
  import { RouterView,useRouter } from 'vue-router';

  const newsList = reactive([
    {id:'dadadada01',title:'很好的抗癌食物',content:'西兰花'},
    {id:'dadadada02',title:'如何一夜暴富',content:'学It'},
    {id:'dadadada03',title:'震惊，万万没想到',content:'明天是周一'},
    {id:'dadadada04',title:'好消息！好消息',content:'快过年了'},
  ])

  const router = useRouter()

  function showNewsDetail(news: NewsInter){
    router.push({
      name: 'xiangqing',
      query:{
        id: news.id,
        title: news.title,
        content: news.content,
      }
    })
  }
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