import { ref, customRef } from 'vue';

export default function (initValue: string, delay: number){
	let timer: number

	//使用vue提供的customRef定义响应式数据
	// track(跟踪)、trigger(触发)
	let msg = customRef((track, trigger)=>{
		return {
			// get何时被调用？--- msg被读取时被调用
			get(){
				track() //依赖收集，订阅，告诉vue数据msg很重要，要对msg数据持续关注。一旦msg变化就去更新
				return initValue
			},

			// set何时被调用？--- msg被修改时被调用
			set(value){
				//防抖
				clearTimeout(timer)
				timer = setTimeout(()=>{
					initValue = value
					trigger() //触发更新，通知vue数据msg变化了	
				}, 1000)
			}
		}
	})

  return{
    msg
  }
}

	