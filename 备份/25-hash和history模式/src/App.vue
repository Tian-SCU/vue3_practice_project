<template>
  <div class="app">
    <!-- <h2 class="title">Vue路由测试</h2> -->
    <Header></Header>
    <!-- 导航区 -->
    <div class="navigate">
      <RouterLink to="/home" active-class="xiaozhupeiqi">首页</RouterLink>
      <RouterLink to="/news" active-class="xiaozhupeiqi">新闻</RouterLink>
      <RouterLink to="/about" active-class="xiaozhupeiqi">关于</RouterLink>
    </div>
    <!-- 展示区 -->
    <div class="main-content">
      <!-- 此处以后可能要展示的位置,以后就放在这里路由的组件 -->
      <RouterView></RouterView>
    </div>
  </diV>

</template>

<script lang="ts" setup name="App">
import { RouterView,RouterLink } from 'vue-router';
import Header from '@/components/Header.vue'

</script>

<style>
  /* App样式 */
  .main-content{
    margin: 0 auto;
    margin-top: 30px;
    border-radius: 10px;
    width: 90%;
    height: 400px;
    border: 1px solid;
  }
  .navigate{
    display: flex;
    justify-content: space-around;
    margin: 0 100px;
  }
  .navigate a {
    display: block;
    text-align: center;
    width: 90px;
    height: 40px;
    line-height: 40px;
    border-radius: 10px;
    background-color: gray;
    text-decoration: none;
    color: white;
  }
  .navigate a.xiaozhupeiqi{
    background-color: #64967E;
    color: #ffc268;
    font-weight: 900;
    text-shadow: 0 0 1px black;
    font-family: Arial, Helvetica, sans-serif;
  }
</style>