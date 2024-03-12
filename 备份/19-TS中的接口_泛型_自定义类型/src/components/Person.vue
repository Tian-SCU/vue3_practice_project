<template>
  <div class="person">
    ???
  </div>
</template>

<script lang="ts" setup name="Person">
  //@表示根目录
  import {type PersonInter, type Persons} from '@/types'
  // let person: PersonInter = {id:'asyuskdjsjdk', name:'张三', age:60}
  // let personList:Array<PersonInter> = [
  //   {id:'asyuskdjsjdk', name:'张三', age:60},
  //   {id:'asyuskdjsjdk', name:'张三', age:60},
  //   {id:'asyuskdjsjdk', name:'张三', age:60}
  // ]
  // let personList:PersonInter[] = [
  //   {id:'asyuskdjsjdk', name:'张三', age:60},
  //   {id:'asyuskdjsjdk', name:'张三', age:60},
  //   {id:'asyuskdjsjdk', name:'张三', age:60}
  // ]
  let personList: Persons= [
    {id:'asyuskdjsjdk', name:'张三', age:60},
    {id:'asyuskdjsjdk', name:'张三', age:60},
    {id:'asyuskdjsjdk', name:'张三', age:60}
  ]

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