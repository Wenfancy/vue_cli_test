<template>
  <div class="school">
      <h2>School name:{{name}}</h2>
      <h2>Address:{{address}}</h2>
  </div>
</template>

<script>

export default {
    name:'School',
    data() {
        return {
            name:'Haust-KaiYuan',
            address:'LuoYang'
        }
    },
    mounted() {
        //console.log('SChool',this.x);
        this.$bus.$on('hello',data=>{
            console.log('这是school组件,接收到了数据',data)
        })
    },
    beforeDestroy() {
        this.$bus.$off('hello')
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