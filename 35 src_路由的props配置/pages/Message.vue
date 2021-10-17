<template>
  <div>
    <ul>
      <li v-for="m in messageList" :key="m.id">
        <!-- 跳转路由并携带params参数,to的字符串写法 -->
        <!-- <router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{m.title}}</router-link> -->
        
        <!-- 跳转路由并携带params参数,to的对象写法 -->

        <router-link :to="{
          name:'具体消息',//可以代替路径,简化路由的跳转( 用params参数的话只能用name！！！ )
          query:{
            id:m.id,
            title:m.title
          }
        }">
          {{m.title}}
        </router-link>
      </li>
    </ul>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      messageList: [
        { id: "001", title: "消息1" },
        { id: "002", title: "消息2" },
        { id: "003", title: "消息3" },
      ],
    };
  },
};
</script>

<style>
</style>