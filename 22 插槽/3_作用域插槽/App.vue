<template>
  <div class="container">
    <Category title="游戏">
      <template slot-scope="games">   <!-- 必须用template标签接收数据，返回的是一个对象 -->
        <div>
          {{ games }}
        </div>
        <ul>
          <li v-for="(game, index) in games.games" :key="index">{{ game }}</li>
        </ul>
      </template>
    </Category>

    <Category title="游戏">
      <template slot-scope="{games}">   <!-- 解构赋值 -->
        <ol>
          <li v-for="(game, index) in games" :key="index">{{ game }}</li>
        </ol>
      </template>
    </Category>

    <Category title="游戏">
      <template slot-scope="{games}">
        <h4>
          <li v-for="(game, index) in games" :key="index">{{ game }}</li>
        </h4>
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
    return {};
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