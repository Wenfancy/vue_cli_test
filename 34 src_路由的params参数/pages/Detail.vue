<template>
  <div>
      <ul>
          <li>ID:{{$route.params.id}}</li>
          <li>Title:{{$route.params.title}}</li>
      </ul>
  </div>
</template>

<script>
export default {
    name:'Detail',
    mounted() {
        //console.log(this.$route)
    },
}
</script>

<style>

</style>