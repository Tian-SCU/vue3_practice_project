<template>
	<div class="app">
		<h2>求和为: {{ sum }}</h2>
		<h2>名字为： {{ person.name }}</h2>
		<h2>年龄为 {{ person.age }}</h2>
		<h2>汽车为 {{ car }}</h2>
		<button @click="changeSum">sum+1</button>
		<button @click="changeName">changeName</button>
		<button @click="changeAge">changeAge</button>
		<button @click="changePerson">changePerson</button>
		<span>|</span> 
		<button @click="changeBrand">修改汽车品牌</button>
		<button @click="changeColor">修改汽车颜色</button>
		<button @click="changeEngine">修改发动机</button>
		<button @click="changeCar">修改整个车</button>

	</div>

</template>

<script setup lang="ts" name="App">
	import { ref,shallowReactive,shallowRef } from 'vue';

	let sum = shallowRef(0)
	let person = shallowRef({
		name: '张三',
		age: 18
	})
	let car = shallowReactive({
		brand: '奔驰',
		options:{
			color: "红色",
			engine: "v8"
		}

	})

	/* ----------shallowRef-------------- */
	function changeSum(){
		//可以
		sum.value+=1
	}
	function changeName(){
		//shallowRef修改不了，第二层的数据
		person.value.name = '李四'
	}
	function changeAge(){
		//shallowRef修改不了，第二层的数据
		person.value.age += 1
	}
	function changePerson(){
		//可以
		person.value = {
			name: "Tony",
			age:100
		}
	}

	/* ----------shallowReactive-------------- */
	function changeBrand(){
		//可以
		car.brand = "宝马"
	}
	function changeColor(){
		//不可以
		car.options.color = "黑色"
	}
	function changeEngine(){
		//不可以
		car.options.engine = "v12"
	}
	function changeCar(){
		//可以
		Object.assign(car,{
			brand: '奥拓',
			options:{
				color: "粉色",
				engine: "v111"
			}
		})
	}
</script>


<style scoped>
.app{
	background-color: #add;
	padding: 10px;
	box-shadow: 0 0 10px;
	border-radius: 10px;
}
button{
	margin: 0 5px;
}
</style>