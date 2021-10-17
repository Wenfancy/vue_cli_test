// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

//创建并暴露一个路由
export default new VueRouter({
    routes:[
        //一级路由

        {
            name:'关于',//路由命名
            path:'/about',
            component:About
        },
        {
            name:'主页',
            path:'/home',
            component:Home,
            //二级路由,路径不要加'/'
            children:[
                {
                    name:'新闻',
                    path:'news',
                    component:News
                },
                {
                    name:'信息',
                    path:'message',
                    component:Message,
                    children:[
                        {
                            name:'具体消息',
                            path:'detail',//传parama参数的占位
                            component:Detail,
                            //props的第一种写法，值为对象,该对象中的所有key-value都会以props形式传给Detail组件
                            //缺点：死数据，用的极少
                            /* props:{
                                a:1,b:'hello~'
                            } */

                            //第二种写法，布尔值,若为真就会把该组件收到的params参数书都会以props的形式传给Detail组件,
                            //缺点：不会理会query参数
                            /* props:true */

                            //第三种写法，函数，
                            props({query:{id,title}}){ //解构赋值的连续解构
                                return{id,title}
                            }

                        }
                    ]
                },
            ]
        },
        
    ]
})