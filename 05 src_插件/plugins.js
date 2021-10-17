export default {
    install(Vue){
        //console.log(Vue);
        //全局过滤器
        Vue.filter('mySlice',function(value){
            return value.slice(0,4);
        })

        //全局自定义指令
        Vue.directive('focus-bind', {
            //指令与元素成功绑定时(一上来)
            bind(element, binding) {
                element.value = binding.value;
                //console.log(element);
                console.log(this); //此处的this是Window
            },
            //指令所在元素被插入页面时
            'inserted'(element) {
                element.focus();
            },
            //指令所在模板被重新解析时
            update(element, binding) {
                element.value = binding.value;
            }
        })

        //定义混入
        Vue.mixin({
            data() {
                return {
                    x:100,
                    y:200
                }
            },
        })
        //给Vue原型上添加方法(vm,vc都能用)
        Vue.prototype.hello = ()=>{
            alert('hello~')
        }
    }
}