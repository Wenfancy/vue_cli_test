<template>
  <div class="student">
      <h2 v-text="msg"></h2>
      <h2>Student name:{{name}}</h2>
      <h2>Age:{{age}}</h2>
      <button @click="sendStudentName">把学生名给school组件</button>
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
        }
    },
    methods: {
        sendStudentName(){
            this.$bus.$emit('hello',this.name)
        }
    },
}
</script>

<style scoped lang="less"> /* 可以用less写样式 */
    .student{
        margin-top: 5px;
        padding: 5px;
        background-color:cornflowerblue;
    }
</style>