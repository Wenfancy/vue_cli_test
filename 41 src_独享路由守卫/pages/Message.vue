<template>
  <div>
    <ul>
      <li v-for="m in messageList" :key="m.id">
        <router-link
          :to="{
            name: '具体消息', //可以代替路径,简化路由的跳转( 用params参数的话只能用name！！！ )
            query: {
              id: m.id,
              title: m.title,
            },
          }"
        >
          {{ m.title }}
        </router-link>
        <button @click="pushShow(m)">push 查看</button>
        <button @click="repacleShow(m)">replace 查看</button>
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
  methods: {
    pushShow(m) {
      //console.log(this.$router);
      this.$router.push({
        name: "具体消息",
        query: {
          id: m.id,
          title: m.title,
        },
      })
    },
    repacleShow(m) {
      this.$router.replace({
        name: "具体消息",
        query: {
          id: m.id,
          title: m.title,
        },
      })
    },
  },
};
</script>

<style>
</style>