// 该文件用于创建Vuex中最为核心的store

import Vue from 'vue'

//引入Vuex
import Vuex from 'vuex'
//应用Vuex插件
Vue.use(Vuex)

//准备actions----用于响应组件中的动作
const actions = {

    jiaOdd(context,value){
        //console.log(context);
        if (context.state.sum % 2) {
            context.commit('JIA',value)
        }
    },

    jiaWait(context,value){
        setTimeout(() => {
            context.commit('JIA',value)
        }, 500);
    },

}

//准备mutations----用于操作数据(state)
const mutations = {
    JIA(state,value){       //此处的大写仅仅作为区分actions的操作,没有必须性要求
        //console.log('mutations的JIA被调用了',state,value);
        state.sum += value
    },
    JIAN(state,value){
        //console.log('mutations的JIAN被调用了',state,value);
        state.sum -= value
    },
/*     JIAODD(state,value){
        //console.log('mutations的JIAODD被调用了',state,value);
        state.sum += value
    },
    JIAWAIT(state,value){
        //console.log('mutations的JIAWAIT被调用了',state,value);
        state.sum += value
    } */
}

//准备state----用于存储数据(data)
const state = {
    sum:0,
    school:'HAUST',
    subject:'高等数学',
    personList:[
        {id:'001',name:'G Y H'},
        {id:'002',name:'Z J S'}
    ]
}

//准备getters----用于加工state中的数据(computed)
const getters = {
    bigSum(state){
        return state.sum*10
    }
}

//创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters,
})