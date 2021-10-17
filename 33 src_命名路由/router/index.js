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
                            path:'detail',
                            component:Detail
                        }
                    ]
                },
            ]
        },
        
    ]
})