<template>
  <div class="container">
      <h2>人员列表</h2>
      <input type="text" placeholder="Input your name" v-model="name">
      <button @click="addPerson(name)">添加</button>
      <ul>
          <li v-for="person in personList" :key="person.id">{{person.name}}</li>
      </ul>
      <h4 class="shared">Count组件的求和值为:{{ sum }}</h4>
  </div>
</template>

<script>
import {nanoid} from 'nanoid'
import {mapState} from 'vuex'

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
            this.$store.commit('ADD_PERSON',personObj)
            this.name=''
        }
    },
    computed: {
        ...mapState(['sum','personList'])
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