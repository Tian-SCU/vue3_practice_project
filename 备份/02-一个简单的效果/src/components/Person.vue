<template>
  <div class="person">
    <h2>name: {{name}}</h2>
    <h2>age: {{age}}</h2>
    <h2>tel: {{tel}}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showTel">查看联系方式</button>
  </div>

</template>




<script lang="ts">
  export default {
    name: 'Person',
    //vue2
    data(){
      return {
        name: "张三",
        age: 18,
        tel: '1388888'
      }
    },
    methods: {
      showTel(){
        alert(this.tel)
      },
      changeName(){
        this.name = "zhang-san"
      },
      changeAge(){
        this.age+=1
      }
    }
  }
</script>


<style scoped>
   .person{
    background-color: lightgreen;
    box-shadow: 0px 0 10px;
    border-radius: 10px;
    padding: 20px
  }
  button{
    margin: 0 5px;
  }
</style>