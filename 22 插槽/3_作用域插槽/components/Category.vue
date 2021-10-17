<template>
  <div class="category">
      <h3>{{title}}分类</h3>
      <slot :games = "games">我是默认的一些内容</slot>
  </div>
</template>

<script>
export default {
    name:'Category',
    data() {
        return {
            games: ["LOL", "PUBG", "CSGO", "CF", "Minecraft"],
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