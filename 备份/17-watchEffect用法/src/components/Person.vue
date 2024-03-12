<template>
  <div class="person">
    <h2>需求，当水温达到60度，或者水位达到80cm时，给服务器发个请求</h2>
    <h2>当前水温temp： {{ temp }}</h2>
    <h2>当前水位height： {{ height }}</h2>

    <button @click="changeTemp">点我水温temp+10</button>
    <button @click="changeHeight">点我height+10</button>
    
  </div>
</template>

<script lang="ts" setup name="Person">
  import {ref, watch, watchEffect} from 'vue'

  //数据
  let temp = ref(10)
  let height = ref(0)

  //方法
  function changeTemp(){
    temp.value +=10
  }
  function changeHeight(){
    height.value +=10
  }

  //因为temp和height都是ref所以可以直接watch
  //watch监视--需要监视两个值,明确指出监视什么值，惰性监听
  // watch([temp, height],(value)=>{
  //   //从value中获取最新的水温和水位
  //   let [newTemp, newHeight] = value
  //   if(newTemp>=60 || newHeight>=80){
  //     //发送请求
  //     console.log('给服务器发请求')
  //   }
  //   console.log(newTemp,newHeight)
  // })

  //watchEffect监视-- 有点像react中的useEffect
  watchEffect(()=>{
    //console.log("@@@"),一进入watchEffect会触发一次
    //无条件监听所有的属性，全自动的监视
    /**
     * 不用明确指出，函数用到哪些属性就监听哪些属性
     */
    if(temp.value >= 60 || height.value>=80){
       //发送请求
      console.log('给服务器发请求')
    }
  })

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