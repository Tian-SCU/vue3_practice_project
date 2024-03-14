<template>
  <div class="father">
    <h3>父组件</h3>
    <div class="content">
      <Category>
        <template v-slot:s2>
          <ul>
            <li v-for="game in games" :key="game.id">{{ game.name}}</li>
          </ul>
        </template>
        <template v-slot:s1>
          <h2>热门游戏列表</h2>
        </template>
      </Category>
      <Category>
        <template v-slot:s2>
          <img :src="imgUrl" alt="成都冒菜">
        </template>
        <template v-slot:S1>
          <h2>今日美食城市</h2>
        </template>
      </Category>
      <Category>
        <template #s2>
          <video :src="videoUrl" controls></video>
        </template>
        <template #s1>
          <h2>今日美食城市</h2>
        </template>
      </Category> 
    </div>
  </div>
</template>

<script setup lang="ts" name="Father">
  // import Game from './Game.vue'
  import Category from '../09_slot_具名插槽/Category.vue';
  import { ref, reactive}  from 'vue'

  let games = reactive([
    {id:'sadadaas01',name:'英雄联盟'},
    {id:'sadadaas02',name:'王者农药'},
    {id:'sadadaas03',name:'红色警戒'},
    {id:'sadadaas04',name:'斗罗大陆'},
  ])
  let imgUrl = ref("https://z1.ax1x.com/2023/11/19/piNxLo4.jpg")
  let videoUrl = ref("https://media.w3.org/2010/05/sintel/trailer.mp4")

</script>

<style scoped>
  .father {
    background-color: rgb(165, 164, 164);
    padding: 20px;
    border-radius: 10px;
  }
  .content {
    display: flex;
    justify-content: space-evenly;
  }
  img, video{
    width: 100%;
  }
  h2{
    background-color: orange;
    text-align: center;
    font-size: 20px;
    font-weight: 800;
  }
</style>