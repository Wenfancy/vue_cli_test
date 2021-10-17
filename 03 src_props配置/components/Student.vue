<template>
  <div class="Student">
      <h2 v-text="msg"></h2>
      <h2>Student name:{{name}}</h2>
      <h2>Age:{{myAge+1}}</h2>
      <h2>Sex:{{sex}}</h2>
      <button @click="updateAge">尝试修改收到的年龄+1</button>
  </div>
</template>

<script>
export default {
    name:'Student',
    data() {
        return {
            msg:'------I am a student of Haust------',
            /* name:'GYH',
            age:20,
            sex:'Male' */   //props优先级高
            myAge:this.age
        }
    },
    methods: {
        updateAge(){
            this.myAge++;
        }
    },
    //props:['name','age','sex'],//组件复用，修改数据 //简单声明接收

    //接收的同时对数据进行类型限制
    /* props:{
        name:String,
        age:Number,
        sex:String
    } */

    //接受的同时对数据进行类型限制+默认值的指定+必要性的限制，比较完善
    //尽量避免直接对传进来的数值进行修改操作
    props:{
        name:{
            type:String,//类型是字符串
            //required:true,//name是必要的
            default:'XXX(default)',//默认值,与上一行不共存
        },
        age:{
            type:Number,
            //required:true,
            default:19
        },
        sex:{
            type:String,
            default:'Male'
        }
    }
}
</script>

<style>
    .Student{
        background-color:cornflowerblue;
    }
</style>