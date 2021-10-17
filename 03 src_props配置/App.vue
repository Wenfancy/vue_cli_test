<template>
  <div>
      <h1>{{msg}}</h1>
      <hr>
      <Student name='GYH' :age=21 sex='Male'/>
      <hr>
      <Student name='ZZS' :age=20 sex='Female'/>
      <hr>
      <Student/>
  </div>
</template>

<script>

//引入
import Student from './components/Student.vue';
export default {
    name:'App',
    components:{Student},
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