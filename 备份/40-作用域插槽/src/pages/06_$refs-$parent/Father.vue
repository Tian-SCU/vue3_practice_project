<template>
	<div class="father">
		<h3>父组件</h3>
		<h4>房产：{{ house }}</h4>
		<button @click="changeChild1Toy">修改Child1的玩具</button>
		<button @click="changeChild2Computer">修改Child2的电脑</button>
		<button @click="getAllChild($refs)">让所有孩子的书变多</button>
		<Child1 ref="c1"/>
		<Child2 ref="c2"/>
	</div>
</template>

<script setup lang="ts" name="Father">
	import Child1 from './Child1.vue'
	import Child2 from './Child2.vue'
	import { ref } from "vue";

	//数据
	let house = ref(4)
	let c1	= ref()
	let c2 = ref()

	//方法
	function changeChild1Toy(){
		//虽然拿到c1拿到Child1的实例，但是需要Child1暴露自己的data才能看到-> Child1内暴露defineExpose({toy,book})
		console.log(c1.value)
	}
	function changeChild2Computer(){
		console.log(c2.value)
	}
	function getAllChild(refs: any){
		// console.log(refs)
		for(let key in refs){
			refs[key].book += 3
		}
	}

	//向外部提供数据
	defineExpose({house})
</script>


<style scoped>
	.father {
		background-color: rgb(165, 164, 164);
		padding: 20px;
		border-radius: 10px;
	}

	.father button {
		margin-bottom: 10px;
		margin-left: 10px;
	}
</style>

