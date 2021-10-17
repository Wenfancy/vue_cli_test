<template>
  <div class="school">
      <h2>Schoolname:{{name}}</h2>
      <h2>Address:{{address}}</h2>
  </div>
</template>

<script>
export default {
    name:'school',
    data() {
        return {
            name:'HAUST',
            address:'LuoYang'
        }
    },
}
</script>

<style>
    .school{
        background-color:cornflowerblue;
    }
</style>