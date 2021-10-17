<template>
  <div class="container">
    <h3>当前求和值为:{{ sum }}</h3>
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
    <h4 class="shared">Person组件总人数为{{personList.length}}</h4>
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
    ...mapState(['sum','school','subject','personList']),
    ...mapGetters(['bigSum'])
  },
  methods: {
    ...mapMutations(['JIA','JIAN']),  
    ...mapActions(['jiaOdd','jiaWait'])
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
.shared{
  color:greenyellow;
}
</style>