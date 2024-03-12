<template>
  <div class="person">
    <!-- <h2>{{ a }}</h2> -->
    <ul>
      <li v-for="items in list" :key="items.id">
        {{ items.name }} -- {{  items.age  }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup name="Person">
  import {  withDefaults } from 'vue';
  import {type Persons} from '@/types/index'

  //接收a
  // defineProps(['a','list'])

  //接收list+限制类型
  // defineProps<{list?: Persons}>()

  //接收list + 限制类型+ 限制必要性 +指定默认值
  withDefaults(defineProps<{list?: Persons}>(),{
    list: () => [{id:'sadasda',name:'zhangsan',age:20}]
  })
  
  
  
  
  // defineProps({
  //   list:{
  //     type: Array as () => Persons,
  //     required: true
  //   }
  // })


  //接收list，同时将props保存起来
  // let x = defineProps(['list'])
  // console.log(x.list)

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