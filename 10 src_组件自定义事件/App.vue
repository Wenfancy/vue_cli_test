<template>
  <div class="app">
      <h1>{{msg}}</h1>
      <hr>
      <!-- 通过父组件给子组件传递函数类型props实现 子给父传递数据 -->
      <School :outputSchoolName="outputSchoolName"/>

      <!-- 通过父组件给子组件绑定一个自定义事件实现 子给父传递数据(第一种写法 使用@或v-on) -->
      <Student v-on:hekeda.once="outputStudentName" @demo="m1"/>

      <!-- 通过父组件给子组件绑定一个自定义事件实现 子给父传递数据(第二种写法 使用ref) 灵活性更高 -->
      <Student ref="student" @click.native="show"/><!-- 组件加原生事件，需要跟native修饰，否则一律按自定义事件处理 -->
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
        outputSchoolName(name){
            console.log('App收到了学校名:',name);
        },
        outputStudentName(name,...args){
            console.log('App收到了学生名:',name,args);
        },
        m1(){
            console.log('demo事件触发了');
        },
        show(){
            alert(123)
        }
    },
    mounted() {
        this.$refs.student.$on('hekeda',this.outputStudentName)
        //this.$refs.student.$once('hekeda',this.outputStudentName)   //一次性
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