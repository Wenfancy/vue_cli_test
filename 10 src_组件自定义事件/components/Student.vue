<template>
  <div class="student">
      <h2 v-text="msg"></h2>
      <h2>Student name:{{name}}</h2>
      <h2>Age:{{age}}</h2>
      <hr>
      <h2>当前求和为{{num}}</h2>
      <button @click="add">点我num++</button>
      <button @click="sendStudentName">把学生名发送给App</button>
      <button @click="unbindHekeda">点我解绑事件</button>
      <button @click="death">销毁当前student的组件的实例（vc）</button>
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
            num:0
        }
    },
    methods: {
        sendStudentName(){
            //触发student组件实例身上的hekeda事件
            this.$emit('hekeda',this.name,'数据1','数据2',3)
            this.$emit('demo')
        },
        unbindHekeda(){
            //this.$off('hekeda') //解绑1个自定义事件
            //this.$off(['hekeda','demo']) //解绑多个自定义事件
            this.$off() //解绑全部自定义事件
        },
        death(){
            this.$destroy()//销毁了当前的student组件的示例,销毁后所有的student实例的自定义事件全不奏效
        },
        add(){
            //console.log('add被调用')
            this.num++
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