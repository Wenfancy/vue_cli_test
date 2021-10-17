//引入Vue
import Vue from "vue";
//引入App
import App from './App.vue';

import{hunhe,hunhe2} from './mixin'
Vue.config.productionTip = false;

//全局混合
Vue.mixin(hunhe)
Vue.mixin(hunhe2)





//创建vm
new Vue({
    el:'#root',
    render:h=>h(App)
})
