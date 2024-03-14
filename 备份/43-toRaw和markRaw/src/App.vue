<template>
	<div class="app">
		<h2>姓名: {{ person.name }}</h2>
		<h2>年龄： {{ person.age }}</h2>
		<button @click="person2.age+=1">修改年龄</button>
		<h2>{{ car2 }}</h2>
		<button @click="car2.price+=10">点我价格+10</button>
	</div>

</template>

<script setup lang="ts" name="App">
	import { markRaw, reactive, toRaw } from 'vue';
	import mockjs from 'mockjs'

	let person = reactive({
		name:'tony',
		age: 18
	})
	/* toRaw */
	// 用于获取一个响应式对象的原始对象
	let person2 = toRaw(person)

	/* markRaw */
	let car = markRaw({brand: '奔驰', price: 100})
	let car2 = reactive(car)
	// console.log(mockjs)
	let mockjs2 = markRaw(mockjs)
</script>


<style scoped>
.app{
	background-color: grey;
	border-radius: 10px;
	box-shadow: 0 0 10px;
	padding: 10px;
}
</style>