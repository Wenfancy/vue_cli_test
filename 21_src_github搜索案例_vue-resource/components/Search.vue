<template>
  <div>
    <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input
          type="text"
          placeholder="enter the name you search"
          v-model="keyWord"
        />&nbsp;
        <button @click="searchUsers">Search</button>
      </div>
    </section>
  </div>
</template>

<script>
//import axios from "axios";

export default {
  name: "Search",
  data() {
    return {
      keyWord: "",
    };
  },
  methods: {
    searchUsers() {
      //请求更新List的数据
      this.$bus.$emit("getUserInfo", {
        users: [],
        isFirst: false,
        isLoading: true,
        errMsg: "",
      });
      //了解即可,最好还是用那个axios
      this.$http.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
        (response) => {
          //console.log('请求成功了,data:',response.data.items)
          //请求成功后更新List的数据
          this.$bus.$emit("getUserInfo", {
            users: response.data.items,
            isLoading: false,
            errMsg: "",
          });
        },
        (reject) => {
          console.log("请求失败!", reject.message);
          this.$bus.$emit("getUserInfo", {
            users: [],
            isLoading: false,
            errMsg: reject.message,
          });
        }
      );
    },
  },
};
</script>

<style>
</style>