<template>
  <div>
      <h1 v-text="msg" ref="title"></h1>        <!-- 在此ref相当于ID，用于选择Dom -->
      <button @click="showDom" ref="btn">点我输出上方的Dom元素</button>
      <School ref="sch" id="sch"/>       <!-- 在此不单单是选择，this.$ref.sch输出的是这个组件本身 -->
  </div>
</template>

<script>

//引入
import School from './components/School.vue'
export default {
    name:'App',
    components:{School},
    data() {
        return {
            msg:'Welcome to Haust!'
        }
    },
    methods: {
        showDom(){
            console.log(this.$refs.title);//真实Dom
            console.log(this.$refs.btn);//真实Dom
            console.log(this.$refs.sch);//school组件的实例对象（vc）
        }
    },
}
</script>

<style>
    body{
        max-width: 300px;
        background-color: thistle;
    }
</style>