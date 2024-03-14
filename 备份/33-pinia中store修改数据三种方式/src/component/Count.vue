<template>
  <div class="count">
    <h2>当前求和为: {{ countStore.sum }}</h2>
    <h3>欢迎来到{{ countStore.school }},坐落于{{ countStore.address }}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">加+</button>
    <button @click="minus">减-</button>
  </div>
</template>

<script setup lang="ts" name="Count">
  import { ref } from 'vue'
  import { useCountStore } from '@/store/count'

  const countStore = useCountStore()

  //数据
  let n =  ref(0) //用户选择的数字

  //方法
  function add(){ 
    //第一种修改方式：三次【Mutation】更改
    // countStore.sum+=1 
    // countStore.school = 'HKU'
    // countStore.address = 'Kwloon' 

    //第二种修改方式：一次【patch】批量更改
    // countStore.$patch({
    //   sum: 8888,
    //   school: 'HKU',
    //   address: 'Kwloon'
    // })

    //第三种修改方式: 通过调用【action】内的函数
    countStore.increment(n.value)
  }
  function minus(){}
</script>

<style scoped>
.count{
  background-color: skyblue;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}
select,button{
  margin: 0 5px;
  height: 25px;
}
</style>