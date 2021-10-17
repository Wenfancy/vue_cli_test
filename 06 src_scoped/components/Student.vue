<template>
  <div class="demo">
      <h2 v-text="msg"></h2>
      <h2>Student name:{{name}}</h2>
      <h2>Age:{{age}}</h2>
      <h2 class="demomo">Sex:{{sex}}</h2>
  </div>
</template>

<script>

export default {
    name:'Student',
    data() {
        return {
            msg:'------I am a student of Haust------',
            name:'GYH',
            age:20,
            sex:'Male',
        }
    },
}
</script>

<style scoped lang="less"> /* 可以用less写样式 */
    .demo{
        background-color:cornflowerblue;
        .demomo{
            font-size: 40px;
        }
    }
</style>