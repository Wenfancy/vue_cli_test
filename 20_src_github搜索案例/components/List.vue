<template>
  <div>
    <div class="row">
      <!-- 用户列表 -->
      <div class="card" v-for="user in searchInfo.users" :key="user.login">
        <a :href="user.html_url" target="_blank">
          <img :src="user.avatar_url" style="width: 100px" />
        </a>
        <p class="card-text">{{ user.login }}</p>
      </div>
    </div>
    <!-- Welcome -->
    <h1 v-show="searchInfo.isFirst">Welcome!!!😄😄😄</h1>
    <!-- Loading -->
    <h1 v-show="searchInfo.isLoading">Loading...🤔🤔🤔</h1>
    <!-- 展示错误信息 -->
    <h1 v-show="searchInfo.errMsg">{{ searchInfo.errMsg }}</h1>
  </div>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      searchInfo: {
        users: [],
        isFirst: true,
        isLoading: false,
        errMsg: "",
      },
    };
  },
  mounted() {
    this.$bus.$on("getUserInfo", (info) => {
      //console.log("List组件收到数据:", info);
      this.searchInfo = {...this.searchInfo,...info};
    });
  },
};
</script>

<style scoped>
.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>