<template>
  <div class="father">
    <h3>父组件</h3>
    <h4>银子：{{ money }}</h4>
    <h4>车子：一辆{{ car.brand }}车，价值{{ car.price }}W</h4>
    <Child/>
  </div>
</template>

<script setup lang="ts" name="Father">
  import Child from './Child.vue'
  import { ref, reactive,provide } from 'vue';

  let money = ref(100)
  let car = reactive({
    brand: 'benci',
    price: 100
  })
  //provide一个callback回调函数，这样子孙可以传值给爷爷
  function updateMoney(value:number){
    money.value -= value
  }

  //向后代提供数据
  provide("moneyContext", {money: money.value,updateMoney })
  provide("car", car)
</script>

<style scoped>
  .father {
    background-color: rgb(165, 164, 164);
    padding: 20px;
    border-radius: 10px;
  }
</style>