<template>
  <button @click="isShow=true">展示弹窗</button>

  <Teleport to="body">
    <div class="modal" v-show="isShow">
      <h2>我是弹窗的标题</h2>
      <p>我是弹窗的内容</p>
      <button @click="">关闭弹窗</button>
      <h2></h2>
	  </div>
  </Teleport>
	

</template>

<script setup lang="ts" name="Modal">
  import { ref } from 'vue';
  let isShow = ref(false)
</script>


<style scoped> 
.modal{
  /* 参考视口定位 水平居中 距离上方一小部分*/
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-100px);
  width: 200px;
  height: 150px;
  background-color: skyblue;
  border-radius: 10px;
  padding: 5px;
  box-shadow: 0 0 5px;
  text-align: center;
}
</style>