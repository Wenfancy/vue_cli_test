<template>
  <div>
    <h2>我是About的内容</h2>
  </div>
</template>

<script>
export default {
  name: "About",
  beforeRouteEnter(to, from, next) {
    //通过路由规则，进入该组件时被调用
    console.log("App---beforeRouteEnter?");
    if (to.meta.isAuth) {
      //判断是否需要权限
      if (localStorage.getItem("school") === "Haust") {
        next();
      } else {
        alert("无权限操作...");
      }
    } else {
      next()  //放行
    }
  },
  beforeRouteLeave(to, from, next) {
    //通过路由规则，离开该组件时被调用
    console.log("App---beforeRouteLeave??");
    next()  //放行
  },
};
</script>

<style>
</style>