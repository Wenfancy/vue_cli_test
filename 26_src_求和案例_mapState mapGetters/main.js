//引入Vue
import Vue from "vue"
//引入App
import App from './App.vue'
//引入插件
import vueResource from 'vue-resource'
//引入store
import store from './store'     /* 脚手架会将import提升至最前方 */

Vue.config.productionTip = false;

//使用插件
Vue.use(vueResource)


//创建vm
new Vue({
    el:'#root',
    store,
    render:h=>h(App),
    beforeCreate() {
        Vue.prototype.$bus=this //安装全局事件总线
    },
})
