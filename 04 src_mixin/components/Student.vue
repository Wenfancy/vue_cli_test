<template>
  <div class="Student">
      <h2 v-text="msg"></h2>
      <h2 @click="showName">Student name:{{name}}</h2>
      <h2>Age:{{age}}</h2>
      <h2>Sex:{{sex}}</h2>
  </div>
</template>

<script>
//引入一个混入
//import {hunhe} from '../mixin'
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
//    mixins:[hunhe],
}
</script>

<style>
    .Student{
        background-color:cornflowerblue;
    }
</style>