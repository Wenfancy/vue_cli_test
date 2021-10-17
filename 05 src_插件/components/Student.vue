<template>
  <div class="Student">
      <h2 v-text="msg"></h2>
      <h2>Student name:{{name}}</h2>
      <h2>Age:{{age}}</h2>
      <h2>Sex:{{sex}}</h2>
      <input type="text" focus-bind:value='name'>
  </div>
</template>

<script>

export default {
    name:'Student',
    data() {
        return {
            msg:'------I am a student of Haust------',
            name:'GYH',
            age:20,
            sex:'Male',
        }
    },
}
</script>

<style>
    .Student{
        background-color:cornflowerblue;
    }
</style>