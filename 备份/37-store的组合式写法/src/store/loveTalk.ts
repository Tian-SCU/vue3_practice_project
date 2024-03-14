import {defineStore}  from 'pinia'
import {ref,reactive} from 'vue'
import axios from 'axios'
import { nanoid } from 'nanoid'

//store组合式api写法,相当于类似setup函数
export const useLoveTalkStore = defineStore('loveTalk',()=>{
  //talkList相关于就是state
  const talkList = reactive(JSON.parse(localStorage.getItem('talkList') as string) || [])


  //getTalk函数相当于action
  async function getATalk(){
    try {
      // 发请求,连续解构赋值两次，然后把content重新命名为title
      let {data:{content: title}} = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
      // 把请求回来的字符串，包装成一个对象
      let obj = { id:nanoid(),title}
      //放到数组中
      talkList.unshift(obj)
    } catch (error) {
      console.log(error)
    }
  }

  return{
    talkList,
    getATalk,
  }
})

