<template>
  <div>
    <div class="row">
      <Banner></Banner>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!-- Vue中借助router-link标签实现路由的切换 --> <!-- replace无痕浏览，追加后无法后退，默认为push -->
          <router-link :replace="true" class="list-group-item " active-class="active" to="/about">About</router-link>
          <router-link replace class="list-group-item " active-class="active" to="/home">Home</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!-- 指定组件的呈现位置 -->
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//引入组件
import Banner from './components/Banner.vue'

export default {
  
  name: "App",
  components:{Banner,},
  mounted() {
    //console.log('App',this);
  },
};
</script>