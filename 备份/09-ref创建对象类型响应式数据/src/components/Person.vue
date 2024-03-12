<template>
  <div class="person">
    <h2>一辆{{ car.brand }}车，价值{{ car.price }}W </h2>
    <button @click="changePrice">修改汽车的价格</button>
    <br>
    <h2>游戏列表</h2>
    <ul>
      <li v-for="items in games" :key="items.id">{{ items.name }}</li>
    </ul>
    <button @click="changeFristGame">修改第一个游戏的名字</button>
  </div>
</template>

<script lang="ts" setup name="Person">
  import { ref,reactive } from 'vue';

  //数据,ref可以定义对象类型的响应式数据,reactive只能处理对象类型
  let car = ref({
    brand: '奔驰',
    price: 100
  })
  let games = ref([
    {id:'asdasdasd01',name:'王者荣耀'},
    {id:'asdasdasd02',name:'元神'},
    {id:'asdasdasd03',name:'三国'},
  ])
  let obj = reactive({x:999})
  console.log(car)
  console.log(obj)

  //方法
  function changePrice(){
    car.value.price += 10
  }
  function changeFristGame(){
    games.value[0].name = "流星蝴蝶剑"
  }
</script>

<style scoped>
  .person{
  background-color: lightgreen;
  box-shadow: 0px 0 10px;
  border-radius: 10px;
  padding: 10px
}
button{
  margin: 0 5px;
}
</style>