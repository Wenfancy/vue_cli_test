<template>
  <div>
      <h2>我是About的内容</h2>
  </div>
</template>

<script>
//路由组件存放于pages，而一般组件存放在components
//通过切换，隐藏了的路由组件默认是要被销毁的，需要的时候再去挂载
//每个组件都有自己的$route属性，里边存放着自己的路由信息
//整个应用只有一个router，可以通过组件的$router属性获取


export default {
    name:'About',
    /* mounted() {
      console.log('About组件挂载完毕')
    },
    beforeDestroy() {
      console.log('About组件即将被销毁',this)
    }, */
}
</script>

<style>

</style>