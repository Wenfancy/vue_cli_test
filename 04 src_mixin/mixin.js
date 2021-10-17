//共享方法 混入（混合）
export const hunhe = {
    methods: {
        showName(){
            alert(this.name)
        }
    },
}
//混入数据（非覆盖）,不会破坏已有数据
export const hunhe2 = {
    data() {
        return{
            a:100,
            b:200
        }
    },
    mounted() {
        console.log('mixin内的钩子函数');
    },
}
//但是生命周期函数都要（mixin和组件内部都会执行）