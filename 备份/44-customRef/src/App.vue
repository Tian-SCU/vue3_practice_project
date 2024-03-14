<template>
	<div class="app">
		 <h2>{{ msg }}</h2>
		 <input type="text" v-model="msg">
	</div>

</template>

<script setup lang="ts" name="App">
	import useMsgRef from './useMsgRef';

	//使用useMesRef来定义一个响应式数据，并且有延迟更新效果
	let {msg} = useMsgRef('你好', 2000)
	
</script>


<style scoped>
.app{
	background-color: grey;
	border-radius: 10px;
	box-shadow: 0 0 10px;
	padding: 10px;
}
</style>