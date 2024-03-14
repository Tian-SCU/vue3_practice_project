<template>
	<div class="app">
		<h2>我是App组件</h2>
	</div>
</template>

<script setup lang="ts" name="App">
	import {ref} from 'vue'
	let sum = ref('1')

</script>


<style>
.app{
	background-color: #ddd;
	padding: 10px;
	border-radius: 10px;
	box-shadow: 0 0 10px;
}
</style>