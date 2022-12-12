<template>
  <v-main>
    <data-base />
    <br/>
    <pop-up/>
  </v-main>
</template>

<script>
  import DataBase from '../components/DataBase'
  export default {
    name: 'Home',
    
    components: {
      DataBase
    },
  }
</script>

<style>
.v-main{
  margin-left: 1cm;
  margin-right: 1cm;
}
</style>


