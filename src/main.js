//引入Vue
import Vue from "vue"
//引入App
import App from './App.vue'

//引入elementUI完整组件库
//import ElementUI from 'element-ui'
//引入elementUI全部样式
//import 'element-ui/lib/theme-chalk/index.css'

//按需引入
import {
    Button,
    Row,
    DatePicker
} from 'element-ui'


//应用ElemrntUI插件
//Vue.use(ElementUI)

Vue.component('MyButton', Button);
Vue.component('MyRow', Row);
Vue.component('MyDatePicker', DatePicker);



Vue.config.productionTip = false;
//创建vm
new Vue({
    el: '#root',
    render: h => h(App),
})