<template>
  <div class="School">
      <h2 v-text="msg"></h2>
      <h2 @click="showName">School name:{{name}}</h2>
      <h2>Address:{{address}}</h2>
  </div>
</template>

<script>
//引入一个混入
//import {hunhe, hunhe2} from '../mixin'
export default {
    name:'School',
    data() {
        return {
            msg:'------H--A--U--S--T------',
            name:'Haust',
            address:'LuoYang'
        }
    },
//    mixins:[hunhe,hunhe2],
/*     mounted() {
        console.log('组件内的钩子函数')
    }, */
}
</script>

<style>
    .School{
        background-color:burlywood;
    }
</style>