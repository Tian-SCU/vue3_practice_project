import {defineStore}  from 'pinia'

export const useCountStore = defineStore('count',{
  //actions里面放置的是一个一个的方法，用于响应组件中的动作
  actions:{
    increment(value: number){
      console.log("increment被调用了",value)
      //修改数据，无法直接获取到state内的数据，(this是当前的store)
      // this.sum += value

      //action的话可以做一些限制，比如商品订单的操作，逻辑，函数复用
      if(this.sum<10){
        this.sum += value
      }
    }
  },

  //真正存储数据的地方
  state(){
    return{
      sum: 6,
      school: 'CUHK',
      address: 'ShaTin'
    }
  }
})

