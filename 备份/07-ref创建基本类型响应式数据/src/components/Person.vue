<template>
  <div class="person">
    <h2>name: {{name}}</h2>
    <h2>age: {{age}}</h2>
    <h2>tel: {{tel}}</h2>
    <h2>address: {{address}}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showTel">查看联系方式</button>
  </div>
</template>

<script lang="ts" setup name="Person">
  import {ref} from 'vue'

  //想让哪个数据是响应式的就让其用ref包裹
  let name = ref("张三")   //响应式才加
  let age = ref(18)
  let tel = '133444'
  let address = "香港科技园沙田"

  console.log(name)
  console.log(age)
  console.log(tel)
  console.log(address)

  //方法
  const showTel = () =>{ alert(tel) }
  const changeName = ()=>{ name.value = 'zhang-san'} //这样修改name，页面没有变化，不是响应式的
  const changeAge = ()=> { age.value +=1 }
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