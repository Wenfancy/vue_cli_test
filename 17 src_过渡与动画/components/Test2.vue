<template>
  <div>
      <button @click="isShow = !isShow">show/hidden</button>

      <transition-group name="hello" :appear="true">
          <h1 v-show="isShow" key="1">Helloworld</h1>
          <h1 v-show="!isShow" key="2">一行普普通通的实例段落</h1>
      </transition-group><!-- 多个元素过渡使用标签 并且带上key值 -->
      
  </div>
</template>

<script>
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
        background-color: slateblue;
    }
    /* 进入的起点 */ /* 离开的终点 */
    .hello-enter,.hello-leave-to{
        transform: translateX(-100%);
    }

    .hello-enter-active,.hello-leave-active{
        transition: 0.5s linear;
    }

    /* 进入的终点 */ /* 离开的起点 */
    .hello-enter-to,.hello-leave{
        transform: translateX(0);
    }
    


</style>