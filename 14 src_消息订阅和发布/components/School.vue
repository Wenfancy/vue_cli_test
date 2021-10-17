<template>
  <div class="school">
      <h2>School name:{{name}}</h2>
      <h2>Address:{{address}}</h2>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name:'School',
    data() {
        return {
            name:'Haust-KaiYuan',
            address:'LuoYang'
        }
    },
    mounted() {
        /* this.$bus.$on('hello',data=>{
            console.log('这是school组件,接收到了数据',data)
        }) */


        this.pubId = pubsub.subscribe('hello',(msgName,data)=>{
            console.log(this);  //使用箭头函数让this指向Vue
            console.log('有人发布了hello消息，内容为',data);
        })//消息名，回调（参数：数据）
    },
    beforeDestroy() {
        //this.$bus.$off


        //取消订阅
        pubsub.unsubscribe(this.pubId)
    },
}
</script>

<style scoped>/* 避免了命名冲突 */
    .school{
        margin-top: 5px;
        padding: 5px;
        background-color:burlywood;
    }
</style>