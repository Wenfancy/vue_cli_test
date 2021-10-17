<template>
  <div class="School">
      <h2>School name:{{name | mySlice}}</h2>
      <h2>Address:{{address}}</h2>
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
}
</script>

<style>
    .School{
        background-color:burlywood;
    }
</style>