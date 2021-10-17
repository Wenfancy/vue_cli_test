<template>
  <div>
      <ul>
          <li>ID:{{id}}</li>
          <li>Title:{{title}}</li>
          <!-- <li>a:{{a}}</li>
          <li>b:{{b}}</li> -->
      </ul>
  </div>
</template>

<script>
export default {
    name:'Detail',
    mounted() {
        //console.log(this.$route)
    },
    props:['id','title']
}
</script>

<style>

</style>