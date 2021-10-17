<template>
  <div>
      <h1>{{msg}}</h1>
      <hr>
      <Student/>
      <School/>
  </div>
</template>

<script>

//引入
import Student from './components/Student.vue';
import School from './components/School.vue'
//引入的顺序能够影响冲突时使用的顺序
export default {
    name:'App',
    components:{Student,School},
    data() {
        return {
            msg:'Welcome to Haust!'
        }
    },
    methods: {
    },
}
</script>

<style>
    body{
        max-width: 400px;
        background-color: thistle;
    }
</style>