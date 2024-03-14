<template>
  <div class="father">
    <h3>父组件</h3>
    <div class="content">
      <Game>
        <template v-slot="params">
          <!-- 这里的params就是插槽传入的对象数据 -->
          <!-- {{params}} -->
          <ul>
            <li v-for="g in params.youxi" :key="g.id">
              {{ g.name }}
            </li>
          </ul>
        </template>
      </Game>
      <Game>
        <template v-slot:qwe="params">
          <ol>
            <li v-for="g in params.youxi" :key="g.id">
              {{ g.name }}
            </li>
          </ol>
        </template>
      </Game>
      <Game>
        <template #qwe="{youxi}">
          <h3 v-for="game in youxi" :key="game.id">
            {{ game.name }}
          </h3>
        </template>
      </Game>
    </div>
  </div>
</template>

<script setup lang="ts" name="Father">
 import Game from '../09_slot_作用域插槽/Game.vue';
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