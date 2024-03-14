import {defineStore}  from 'pinia'

export const useLoveTalkStore = defineStore('loveTalk',{

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

