import {onMounted, reactive} from 'vue'
import axios from 'axios'

export default function (){
  //狗的数据每次给一个随机的狗的图片message:https://dog.ceo/api/breed/pembroke/images/random
  // 数据
  let dogList = reactive([
    "https://images.dog.ceo//breeds//pembroke//n02113023_3495.jpg",
  ])

  //dogs相关的方法
  async function getDog(){
    try {
      let result = await axios.get('https://dog.ceo/api/breed/pembroke/images/random')
      dogList.push(result.data.message)
    } catch (error) {
      alert(error)
    }
  }

  //钩子
  onMounted(()=>{
    getDog()
  })

  //向外部提供东西
  return {
    dogList,
    getDog
  }
}
// export default function(){}

