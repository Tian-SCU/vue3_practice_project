import {onMounted, ref, computed} from 'vue'

export default function(){
  // 数据
  let sum = ref(0)
  let bigSum = computed(()=>{
    return sum.value*10
  })

  //function
  function add(){
    sum.value += 1
  }

  //钩子
  onMounted(()=>{
    add()
  })

  //向外提供东西
  return {
    sum,
    bigSum,
    add
  }
}

  