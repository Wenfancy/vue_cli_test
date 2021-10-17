//引入Vue
import Vue from "vue";
//引入App
import App from './App.vue';

Vue.config.productionTip = false;

//Vue.prototype.x={a:1,b:2}   //全局事件总线铺垫



//创建vm
new Vue({
    el:'#root',
    render:h=>h(App),
    beforeCreate() {
        Vue.prototype.$bus=this    //安装全局事件总线 bus有总线的意思
    },
})
