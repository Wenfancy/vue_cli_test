<template>
  <li>
    <label>
      <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>
      <!-- <input type="checkbox" v-model="todo.done"> --><!-- 不建议这样写,props尽量不要改变 -->
      <span v-show="!todo.isEdit">{{todo.title}}</span>
    </label>

    <input type="text" 
    v-show="todo.isEdit" 
    :value="todo.title"
    ref="editInput"
    @blur="handleBlur(todo,$event)">
    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
    <button class="btn btn-edit" @click="handleEdit(todo)" v-show="!todo.isEdit">编辑</button>
  </li>
</template>

<script>
import pubsub from 'pubsub-js'

export default {
  name: "MyItem",
  //声明接受todo
  props:['todo'],
  methods: {
    //勾选/取消功能
    handleCheck(id){
      //this.checkTodo(id)
      this.$bus.$emit('checkTodo',id)
    },
    //删除
    handleDelete(id){
      if(confirm('Are you sure??')){
        //this.deleteTodo(id)
        //this.$bus.$emit('deleteTodo',id)
        pubsub.publish('deleteTodo',id)
      }
    },
    //编辑
    handleEdit(todo){
      if(Object.prototype.hasOwnProperty.call(todo,'isEdit')){
        todo.isEdit=true

      }else{
        //console.log('没有isedit属性')
        this.$set(todo,'isEdit',true) //为了让vue及时渲染
      }
      //this.$refs.editInput.focus()  //获取失败，因为此时input还没出现，还没解析模板
      /* setTimeout(()=>{
        this.$refs.editInput.focus()
      },0) */ //解决方法一

      //解决方法二
      this.$nextTick(function(){  //下一次Dom更新结束后执行其回调
        this.$refs.editInput.focus()
      })
    },
    //失去焦点的回调
    handleBlur(todo,e){
      todo.isEdit=false
      if(!e.target.value.trim())  return alert('不能为空!')
      console.log(todo.id,e.target.value)
      this.$bus.$emit('updateTodo',todo.id,e.target.value)
    }
  },
};
</script>

<style scoped>
/*item*/
    li {
      list-style: none;
      height: 36px;
      line-height: 36px;
      padding: 0 5px;
      border-bottom: 1px solid #ddd;
    }

    li label {
      float: left;
      cursor: pointer;
    }

    li label li input {
      vertical-align: middle;
      margin-right: 6px;
      position: relative;
      top: -1px;
    }

    li button {
      float: right;
      display: none;
      margin-top: 3px;
      margin-left: 5px;
    }

    li:before {
      content: initial;
    }

    li:last-child {
      border-bottom: none;
    }

    li:hover{
      background-color: #ddd;
    }

    li:hover button{
      display: block;
    }
</style>