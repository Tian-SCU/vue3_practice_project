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
      // sum: 6
      talkList: [
        {id:'sadadad01',title:'今天你有点怪，那里怪？怪好看的'},
        {id:'sadadad02',title:'草莓，蓝莓，蔓越莓，今天想我了没'},
        {id:'sadadad03',title:'心里给你留了一块地，我的死心塌地'},
      ]
    }
  }
})

