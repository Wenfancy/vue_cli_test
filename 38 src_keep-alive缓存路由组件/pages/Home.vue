<template>
  <div>
    <h2>Home组件内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link active-class="active" :to="{name:'新闻'}">News</router-link>
        </li>
        <li>
          <router-link active-class="active" to="/home/message">Message</router-link>
        </li>
      </ul>
      <!-- 缓存多个路由组件 -->
      <!-- <keep-alive :include="['News','Message']"></keep-alive> -->
      
      <keep-alive include="News">  <!-- 指定组件（组件名）保持挂载，数据不被销毁 -->
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  /* mounted() {
    console.log("Home组件挂载完毕");
  },
  beforeDestroy() {
    console.log("Home组件即将被销毁");
  }, */
};
</script>

<style>
</style>