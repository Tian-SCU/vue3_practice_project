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
    <br>
    <h2>{{ obj.a.b.c }}</h2>
    <button @click="changeObjC">修改深层次的对象值</button>
  </div>
</template>

<script lang="ts" setup name="Person">
  import { reactive } from 'vue';

  //数据
  let car = reactive({
    brand: '奔驰',
    price: 100
  })
  let games = reactive([
    {id:'asdasdasd01',name:'王者荣耀'},
    {id:'asdasdasd02',name:'元神'},
    {id:'asdasdasd03',name:'三国'},
  ])
  let obj = reactive({
    a:{
      b:{
        c: 66666
      }
    }
  })
  //方法
  function changePrice(){
    car.price += 10
  }
  function changeFristGame(){
    games[0].name = "流星蝴蝶剑"
  }
  function changeObjC(){
   obj.a.b.c = 999  //深层代理
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