<template>
  <div class="person">
    <h2>当前求和为: {{ sum }},放大十倍后: {{ bigSum }}</h2>
    <button @click="add">点我sum+1</button>
    <hr>
    <img v-for="(dog,index) in dogList" :src="dog" :key="index" alt="dog's picture">
    <br>
    <button @click="getDog">再来一只狗</button>
  </div>
</template>

<script lang="ts" setup name="Person">
  import useDog from '@/hooks/useDog';
  import useSum from '@/hooks/useSum';

  const {sum,bigSum, add} = useSum();
  const {dogList, getDog} = useDog();

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
  img{
    margin-right: 10px;
    height: 100px
  }
</style>