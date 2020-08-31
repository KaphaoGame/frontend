<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h5>(temporary logo)</h5>
    <HelloWorld msg="Welcome to Unireview"/>
  </div>
</template>

<script>
import HelloWorld from './views/Home'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h5 {
  margin-top: 0;
}
</style>
