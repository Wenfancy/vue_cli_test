<template>
  <div>
      <button @click="isShow = !isShow">show/hidden</button>

      <transition-group 
        name="animate__animated animate__bounce" 
        appear
        enter-active-class="animate__bounceInRight"
        leave-active-class="animate__bounceInRight"
        >
          <h1 v-show="isShow" key="1">Helloworld</h1>
          <h1 v-show="!isShow" key="2">一行普普通通的实例段落</h1>
      </transition-group><!-- 多个元素过渡使用标签 并且带上key值 -->
      
  </div>
</template>

<script>
import 'animate.css'

export default {
    name:'Test',
    data() {
        return {
            isShow:true
        }
    },
}
</script>

<style scoped>
    h1{
        background-color: sandybrown;
    }
    

</style>