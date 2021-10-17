<template>
  <div class="container">
    <Category title="美食">
      <img
        slot="center"
        src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F010e645bff9c02a801209252fdd000.jpg%401280w_1l_2o_100sh.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1636167773&t=3bc5f22f388477bc1cff1d5d523cc6cd"
        alt=""
      />
      <br />
      <a href="#" slot="footer">更多美食</a>
    </Category>

    <Category title="游戏">
      <ul slot="center">
        <li v-for="(game, index) in games" :key="index">{{ game }}</li>
      </ul>
      <div slot="footer" class="foot">
        <a href="#">单机游戏</a>
        <a href="#">网络游戏</a>
      </div>
    </Category>

    <Category title="电影">
      <video
        controls
        src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
        slot="center"
      ></video>
      <template v-slot:footer > <!-- v-slot只能用于template标签中 -->
        <div class="foot">
          <a href="#">更多电影</a>
          <a href="#">单机游戏</a>
          <a href="#">网络游戏</a>
        </div>
        <h4>欢迎前来观影</h4>
      </template>
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
      foods: ["Noodles", "Toast", "Salad", "Taco", "Snack"],
      games: ["LOL", "PUBG", "CSGO", "CF", "Minecraft"],
      films: ["《教父》", "《拆弹专家》", "《长津湖》", "《1921》"],
    };
  },
  methods: {},
};
</script>

<style>
.container,
.foot {
  display: flex;
  justify-content: space-around;
}
img {
  width: 100%;
}
video {
  width: 100%;
}
</style>