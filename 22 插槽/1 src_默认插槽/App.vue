<template>
  <div class="container">
    <Category title="美食">
      <img src="https://pic2.zhimg.com/v2-3b2a5d5e6ae51e757aa1d809bb6be189_b.jpg" alt="">
    </Category>

    <Category title="游戏">
      <ul>
          <li v-for="(game,index) in games" :key="index">{{game}}</li>
      </ul>
    </Category>

    <Category title="电影">
      <video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
    </Category>
  </div>
</template>

<script>
//引入
import Category from "./components/Category.vue";
export default {
  name: "App",
  components: { Category },
  data() {
    return {
      foods: ['Noodles','Toast','Salad','Taco','Snack'],
      games: ["LOL", "PUBG", "CSGO", "CF", "Minecraft"],
      films: ["《教父》", "《拆弹专家》", "《长津湖》", "《1921》"],
    };
  },
  methods: {},
};
</script>

<style>
.container {
  display: flex;
  justify-content: space-around;
}
img{
  width: 100%;
}
video{
  width: 100%;
}
</style>