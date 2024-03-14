import {defineStore}  from 'pinia'
import axios from 'axios'
import { nanoid } from 'nanoid'

export const useLoveTalkStore = defineStore('loveTalk',{
  actions:{
    async getATalk(){
      try {
        // 发请求,连续解构赋值两次，然后把content重新命名为title
        let {data:{content: title}} = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
        // 把请求回来的字符串，包装成一个对象
        let obj = { id:nanoid(),title}
        //放到数组中
        this.talkList.unshift(obj)
      } catch (error) {
        console.log(error)
      }
    }
  },

  //真正存储数据的地方
  state(){
    return{     
      talkList: JSON.parse(localStorage.getItem('talkList') as string) || []
    }
  }
})

