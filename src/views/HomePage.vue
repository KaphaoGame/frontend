<template>
  <div class="container">
    <img alt="Vue logo" src="../assets/kaphaogamelogo.png">
    <TopGameCard />
  </div>
</template>

<script>
import TopGameCard from '../components/TopGameCard'

export default {
  name: 'HelloWorld',
  components: {
    TopGameCard,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
