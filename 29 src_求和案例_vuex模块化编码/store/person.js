//person相关配置

//axios
import axios from 'axios'
import { nanoid } from 'nanoid'
export default {
    namespaced:true,    //添加命名空间配置
    actions:{
        addPersonK(context,value){
            if(value.name.indexOf('K') === 0){
                context.commit('ADD_PERSON',value)
            }else{
                alert('reinput!')
            }
        },
        addPersonServer(context){
            axios.get('https://api.uomg.com/api/rand.qinghua').then(response=>{
                console.log(response.data.content);
                context.commit('ADD_PERSON',{id:nanoid(),name:response.data.content})
            },reject=>{
                alert(reject.message)
            })
        }
    },
    mutations: {
        ADD_PERSON(state, value) {
            state.personList.unshift(value)
        }
    },
    state: {
        personList: [
            {
                id: '001',
                name: 'G Y H'
            },
            {
                id: '002',
                name: 'Z J S'
            }
        ]
    },
    getters:{
        firstPersonName(state){
            return state.personList[0].name
        }
    }
}