<template>
  <div class="school">
      <h2>School name:{{name}}</h2>
      <h2>Address:{{address}}</h2>
      <button @click="sendSchoolName">把学校名发送给App</button>
  </div>
</template>

<script>

export default {
    name:'School',
    data() {
        return {
            name:'Haust-KaiYuan',
            address:'LuoYang'
        }
    },
    props:['outputSchoolName'],
    methods: {
        sendSchoolName(){
            this.outputSchoolName(this.name)
        }
    },
}
</script>

<style scoped>/* 避免了命名冲突 */
    .school{
        margin-top: 5px;
        padding: 5px;
        background-color:burlywood;
    }
</style>