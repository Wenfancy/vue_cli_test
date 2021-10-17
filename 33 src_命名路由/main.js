//引入Vue
import Vue from "vue"
//引入App
import App from './App.vue'
//引入vue-router
import VueRouter from 'vue-router'
//引入路由
import router from './router'
Vue.config.productionTip = false;
//应用插件
Vue.use(VueRouter)

//创建vm
new Vue({
    el:'#root',
    render:h=>h(App),
    //vue-router配置项
    router:router
})
