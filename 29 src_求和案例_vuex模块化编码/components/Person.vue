<template>
  <div class="container">
      <h2>人员列表</h2>
      <input type="text" placeholder="Input your name" v-model="name">
      <button @click="addPerson(name)">添加</button>
      <button @click="addPersonK">是K开头的就添加</button>
      <button @click="addGet">get请求随机语句添加至列表</button>
      <h4>列表中第一个人的名字是:{{firstPersonName}}</h4>
      <ul>
          <li v-for="person in personList" :key="person.id">{{person.name}}</li>
      </ul>
      <h4 class="shared">Count组件的求和值为:{{ sum }}</h4>
  </div>
</template>

<script>
import {nanoid} from 'nanoid'
import { mapGetters, mapState} from 'vuex'

export default {
    name:'Person',
    data() {
        return {
            name:''
        }
    },
    methods: {
        addPerson(){
            const personObj = {id:nanoid(),name:this.name}
            this.$store.commit('personAbout/ADD_PERSON',personObj)
            this.name=''
        },
        addPersonK(){
            const personObj = {id:nanoid(),name:this.name}
            this.$store.dispatch('personAbout/addPersonK',personObj)
            this.name=''
        },
        addGet(){
            this.$store.dispatch('personAbout/addPersonServer')
        }
    },
    computed: {
        ...mapState('countAbout',['sum',]),
        ...mapState('personAbout',['personList']),
        ...mapGetters('personAbout',['firstPersonName'])
    }
}
</script>

<style scoped>
    .container{
        max-width: 500px;
        background-color:lightcoral;
        padding: 0 10px;
        border:2px solid rgb(179, 16, 38);
    }
    .shared{
        color:greenyellow;
    }
</style>