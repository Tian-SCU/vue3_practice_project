<template>
	<div class="outer">
		<h2>我是App组件</h2>
		<img 
			src="https://www.thestandard.com.hk/newsImage/20221018/50076316contentPhoto1.JPG" 
			alt=""
		>
		<br>
		<Modal/>


	</div>

</template>

<script setup lang="ts" name="App">
import Modal from './Modal.vue'

</script>


<style >
.outer{
	background-color: #ddd;
	border-radius: 10px;
	box-shadow: 0 0 10px;
	padding: 5px;
	width: 400px;
	height: 400px;
	filter: saturate(200%);
}
img{
	width: 200px;
	/* 滤镜,加上饱和度 saturate */
}
</style>