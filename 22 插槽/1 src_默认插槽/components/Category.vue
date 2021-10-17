<template>
  <div class="category">
      <h3>{{title}}分类</h3>
      <slot>我是一个default,当没有使用者传递具体结构时,我会出现</slot><!-- 定义一个插槽(挖坑,等组件的使用者进行填充) -->
      <ul>
          <li v-for="(item,index) in listData" :key="index">{{item}}</li>
      </ul>
  </div>
</template>

<script>
export default {
    name:'Category',
    data() {
        return {
            
        }
    },
    props:['title']
}
</script>

<style>
    .category{
        background-color: cornflowerblue;
        width: 200px;
        height: 300px;
    }
    h3{
        text-align: center;
        background-color:skyblue;
    }
</style>