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
    JIA(state,value){
        state.sum += value
    },
    JIAN(state,value){
        state.sum -= value
    },
    ADD_PERSON(state,value){
        state.personList.unshift(value)
    }
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