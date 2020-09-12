<template>
  <div id="gameDetail">
    <button @click="dataAction">get Game from API</button> <br>
    <div>
      <h1>{{$store.state.data.gameName}}</h1>
      <img :src= $store.state.data.gameImageURL>
      <h3>{{$store.state.data.gameReleaseDate}}</h3>
      <h3>{{$store.state.data.gameDescription_raw}}</h3>

    </div>
  </div>
</template>

<script>

export default {
  name: 'gamedetail',
  methods: {
    dataAction(){
      this.$store.dispatch("dataAction")
    },
  },

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>