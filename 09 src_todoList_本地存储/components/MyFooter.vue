<template>
  <div class="todo-footer" v-show="total">
    <label>
      <input type="checkbox" :checked="isAll" @change="checkAll"/>
      <span>----</span>
      <input type="checkbox" v-model="isAll"/><!-- isAll为计算属性不能写简写形式,因为涉及到修改计算属性,需要加setter -->
    </label>
    <span> <span>已完成{{todos.filter(item=>item.done===true).length}}</span> / 全部{{total}} -----</span>
    
    <span>已完成{{doneTotal}}</span>
    <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  props:['todos','checkAllTodos','clearAllDoneTodos'],
  computed:{
    total(){
      return this.todos.length
    },
    doneTotal(){
      //return this.todos.filter(item=>item.done===true).length
      return this.todos.reduce((pre,todo)=>{
        //console.log(pre,todo)
        return pre+(todo.done ? 1 : 0)   /* reduce方法,好用,专门用来统计 */
      },0)
    },
    isAll:{
      get(){
        return this.total===this.doneTotal&&this.total>0
      },
      set(value){
        this.checkAllTodos(value)
      }
    }
  },
  methods: {
    checkAll(e){
      this.checkAllTodos(e.target.checked)
    },
    clearAll(){
      this.clearAllDoneTodos()
    }
  },
};
</script>

<style scoped>
 /*footer*/
    .todo-footer {
      height: 40px;
      line-height: 40px;
      padding-left: 6px;
      margin-top: 5px;
    }

    .todo-footer label {
      display: inline-block;
      margin-right: 20px;
      cursor: pointer;
    }

    .todo-footer label input {
      position: relative;
      top: -1px;
      vertical-align: middle;
      margin-right: 5px;
    }

    .todo-footer button {
      float: right;
      margin-top: 5px;
    }
</style>