/* 
  该文件是整个项目的入口文件
*/
//引入完整版的Vue
//import Vue from 'vue/dist/vue'
//引入不完整版的Vue,不能解析模板
import Vue from 'vue'
//引入App组件,他是所有组件的父组件
import App from './App.vue'

//关闭Vue的生产提示
Vue.config.productionTip = false


/* 
  关于不同版本的Vue：
    1.vue.js和vue.runtime.XXX.js:
      (1)-vue.js是完整版的vue，包含：核心功能＋模板解析器
      (2)-vue.runtime.XXX.js是运行版的Vue，只包含核心功能，无模板解析器
    2.因为vue.runtime.XXX.js无模板解析器，所以不能使用template配置项，需要使用render函数接收到的CreatElement函数去制定具体内容
*/


//创建Vue实例对象--vm
new Vue({
  el: '#app',
  //下面代码作用:将App组件放入容器中
  //render: h => h(App),
  render:createElement=>createElement(App),//必须用返回值


  /* template: `<App></App>`,
  components: {App} */
})
//console.log(888);