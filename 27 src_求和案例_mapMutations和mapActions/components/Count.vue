<template>
  <div class="container">
    <h2>当前求和值为:{{ sum }}</h2>
    <h3>当前求和放大10倍后的值为:{{ bigSum }}</h3>
    <select v-model="n">
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <button @click="JIA(n)">+</button>
    <button @click="JIAN(n)">-</button>
    <button @click="jiaOdd(n)">当前值为奇数再加</button>
    <button @click="jiaWait(n)">等一等再加</button>
    <hr>
    <h3>我在{{ school }},学习{{ subject }}</h3>
  </div>
</template>

<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'

export default {
  name: "Count",
  data() {
    return {
      n: 1, //用户的select
    };
  },

  computed: {
   
    //利用mapState生成计算属性,从state中读取数据(对象写法)-----------------------
    /* ...mapState({
      he:'sum',
      xuexiao:'school',
      kecheng:'subject'})   //用扩展运算符将返回的对象解构,赋值在computed中 */

    //利用mapState生成计算属性,数组写法---------------------------------------
    ...mapState(['sum','school','subject']),

    //同理
    ...mapGetters(['bigSum'])
  },

  methods: {
    /* increment() {
      this.$store.commit('JIA',this.n)      //commit是跟mutations对话,跳过了跟action对话的一步,所以要用大写
    },
    decrement() {
      this.$store.commit('JIAN',this.n)
    }, */


    //同理借助mapMutations生成对应的方法,方法中会调用commit去连续mutations(对象写法)
    //...mapMutations({increment:'JIA',decrement:'JIAN'}),  
    //数组写法
    ...mapMutations(['JIA','JIAN']),  

    /* ************************************************************************************* */

    /* incrementOdd() {
      this.$store.dispatch('jiaOdd',this.n)     //dispatch是跟actions对话,action中可追加操作(定时器,条件...)
    },
    incrementWait() {
      this.$store.dispatch('jiaWait',this.n)
    }, */

    //mapAction对象写法
    //...mapActions({incrementOdd:'jiaOdd',incrementWait:'jiaWait'}),
    //数组写法
    ...mapActions(['jiaOdd','jiaWait'])
  },
  mounted() {
    //console.log("Count", this.$store);
  },
};
</script>

<style scoped>

.container{
  max-width: 500px;
  background-color: cornflowerblue;
  margin-bottom: 5px;
  padding: 0 10px;
  border:2px solid darkslateblue;
  
}
button {
  margin-left: 10px;
}
</style>