<template>
  <div>
    <ul>
      <li :style="{opacity}">Hello！Haust</li>
      <li>news001 <input type="text" /></li>
      <li>news002 <input type="text" /></li>
      <li>news003 <input type="text" /></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      opacity: 1,
    };
  },

  //需求：停掉定时器并且不影响路由缓存
  /* mounted() {
    this.timer = setInterval(() => {
      this.opacity -= 0.01;
      if (this.opacity <= 0) this.opacity = 1;
    },20);
  }, */
  /* beforeDestroy() {
    //console.log('即将被销毁');
  }, */

  //router特有的新的生命周期钩子
  activated() {
    //console.log('News Actived~~');
    this.timer = setInterval(() => {
      console.log('@');
      this.opacity -= 0.01;
      if (this.opacity <= 0) this.opacity = 1;
    },20);
  },
  deactivated(){
    //console.log('News Deactived~~');
    clearInterval(this.timer)
  }
}
</script>

<style>
</style>