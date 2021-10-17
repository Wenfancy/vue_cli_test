//计算相关模块
export default {
    namespaced:true,    //添加命名空间配置
    actions: {
        jiaOdd(context, value) {
            //console.log(context);
            if (context.state.sum % 2) {
                context.commit('JIA', value)
            }
        },
        jiaWait(context, value) {
            setTimeout(() => {
                context.commit('JIA', value)
            }, 500);
        },
    },
    mutations: {
        JIA(state, value) {
            state.sum += value
        },
        JIAN(state, value) {
            state.sum -= value
        },
    },
    state: {
        sum: 0,
        school: 'HAUST',
        subject: '高等数学',
    },
    getters: {
        bigSum(state) {
            return state.sum * 10
        }
    }
}