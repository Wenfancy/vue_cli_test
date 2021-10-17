<template>
  <div>
      <button @click="isShow = !isShow">show/hidden</button>

      <transition name="hello" :appear="true">
          <h1 v-show="isShow">Helloworld</h1>
      </transition>
      
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
        background-color: springgreen;
        overflow: hidden;
    }

    .hello-enter-active{
        animation: firstA 1s;
    }
    .hello-leave-active{
        animation: firstA 1s reverse;
    }
    @keyframes firstA{
        from{
            transform: translateX(100%);
        }
        to{
            transform: translateX(0);
        }
    }
</style>