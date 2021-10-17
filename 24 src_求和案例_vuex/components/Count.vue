<template>
  <div>
    <h2>当前求和值为:{{ $store.state.sum }}</h2>
    <h3>当前求和放大10倍后的值为:{{ $store.getters.bigSum }}</h3>
    <select v-model="n">
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前值为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
    <hr>
    <h3>我在{{ $store.state.school}},学习{{ $store.state.subject}}</h3>
  </div>
</template>

<script>


export default {
  name: "Count",
  data() {
    return {
      n: 1, //用户的select
      //sum: 0, //当前的和
    };
  },
  methods: {
    increment() {
      this.$store.commit('JIA',this.n)      //commit是跟mutations对话,跳过了跟action对话的一步,所以要用大写
    },
    decrement() {
      this.$store.commit('JIAN',this.n)
    },
    incrementOdd() {
      this.$store.dispatch('jiaOdd',this.n)     //dispatch是跟actions对话,action中可追加操作(定时器,条件...)
    },
    incrementWait() {
      this.$store.dispatch('jiaWait',this.n)
    },
  },
  mounted() {
    console.log("Count", this.$store);
  },
};
</script>

<style>
button {
  margin-left: 10px;
}
</style>