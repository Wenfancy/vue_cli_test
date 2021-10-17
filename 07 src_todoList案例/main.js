//引入Vue
import Vue from "vue";
//引入App
import App from './App.vue';

Vue.config.productionTip = false;


//创建vm
new Vue({
    el:'#root',
    render:h=>h(App)
})
