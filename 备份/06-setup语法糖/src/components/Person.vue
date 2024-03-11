<template>
  <div class="person">
    <h2>{{ a }}</h2>
  </div>
</template>

<!-- <script lang="ts">
  export default {
    name: 'Person'
  }
</script> -->

<script lang="ts" setup name="Person234">
  let a = 666

</script>


<style scoped>
  .person{
  background-color: lightgreen;
  box-shadow: 0px 0 10px;
  border-radius: 10px;
  padding: 10px
}
button{
  margin: 0 5px;
}
</style>