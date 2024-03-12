<template>
  <div class="home">
    <img src="https://images.dog.ceo/breeds\/pembroke\/n02113023_3495.jpg" alt="Dog Image">
  </div>
</template>

<script setup lang="ts" name="Home">
  import { onMounted } from 'vue';
  import { useRouter } from 'vue-router';

  const router = useRouter()

  onMounted(()=>{
    setTimeout(()=>{
      // 首页看完3s，然后跳转到news页面
      router.push('/news')
      
    },3000)
  })
</script>

<style scoped>
.home{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%
}
</style>