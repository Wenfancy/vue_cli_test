<template>
  <div>
    <button @click="getStudents">获取Students信息</button>
    <button @click="getCars">获取Cars信息</button>
  </div>
</template>

<script>
//引入
import axios from 'axios'

//引入的顺序能够影响冲突时使用的顺序
export default {
  name: "App",
  methods: {
    getStudents(){
      axios.get('http://localhost:8080/entrance1/students').then(response=>{
        console.log('success!',response.data);
      },error=>{
        console.log('error!',error.message);
      })
    },
    getCars(){
      axios.get('http://localhost:8080/entrance2/cars').then(response=>{
        console.log('success!',response.data);
      },error=>{
        console.log('error!',error.message);
      })
    }
  },
};
</script>