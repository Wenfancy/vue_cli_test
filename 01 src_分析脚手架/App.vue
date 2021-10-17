/* 功能:汇总所有的组件 */
<template>
    <div>
        <img src="./assets/logo.png" alt="logo">
        <School/>   <!-- 脚手架环境下不报错 -->
        <Student/>
    </div>
</template>

<script>
    //引入组件
    import School from './components/School.vue'
    import Student from './components/Student.vue'

    export default {
        name:'App',
        components:{
            School,
            Student
        }
    };
</script>
