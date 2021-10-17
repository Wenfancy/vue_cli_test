<template>
  <div class="app">
      <h1>{{msg}}</h1>
      <School/>
      <Student/>

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
}
</script>

<style>
    body{
        max-width: 400px;
        background-color: thistle;
    }
    .app{
        background: #ddd;
        padding: 5px;
    }
</style>