<template>
  <div class="grand-child">
    <h3>我是孙组件</h3>
    <h4>银子：{{ money }}</h4>
    <h4>车子：一辆{{ car.brand }}车，价值{{ car.price }}W</h4>
    <button @click="updateMoney(6)">孙子花爷爷的钱</button>
  </div>
</template>

<script setup lang="ts" name="GrandChild">
  import { inject } from "vue";

  //inject(传入值的名称,默认值,)
  let {money, updateMoney} = inject('moneyContext',{money:0,updateMoney:(val:number)=>val})
  let car = inject('car',{ 
      //给一个默认值
      brand:'未知',
      price:0
    })

</script>

<style scoped>
  .grand-child{
    background-color: orange;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px black;
  }
</style>