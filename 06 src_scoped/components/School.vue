<template>
  <div class="demo">
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
}
</script>

<style scoped>/* 避免了命名冲突 */
    .demo{
        background-color:burlywood;
    }
</style>