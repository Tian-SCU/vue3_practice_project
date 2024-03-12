<template>
  <div class="person">
    <h2>一辆{{ car.brand }}车，价值{{ car.price }}W </h2>
    <button @click="changeBrand">修改汽车的品牌</button>
    <button @click="changePrice">修改汽车的价格</button>
    <button @click="changeCar">修改整个汽车,修改reactive对象的指向</button>
    <hr>
    <h2>当前求和为: {{ sum }}</h2>
    <button @click="changeSum">点我sum+1</button>
  </div>
</template>

<script lang="ts" setup name="Person">
  import { ref,reactive } from 'vue';

  //数据,ref可以定义对象类型的响应式数据,reactive只能处理对象类型
  let car = ref({
    brand: '奔驰',
    price: 100
  })
  let sum = ref(0)
  //方法
  function changeCar(){
    //不可以直接重新分配reactive的指向,直接重新复制reactive的对象也不行
    // car = reactive({brand:'奥拓', price:1})

    //如果car是reactive的对象的更新，Object.assign
    // Object.assign(car,{brand:'奥拓', price:1})

    //如果car是ref代理
    car.value = {brand:'奥拓', price:1}
  }
  function changeBrand(){
    car.value.brand = "宝马"
  }
  function changePrice(){
    car.value.price += 10
  }
  function changeSum(){
    sum.value +=1
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