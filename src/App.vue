<template>
  <div class="full-height">
      <Header />
      <b-container>
        <router-view></router-view>
      </b-container>
      <Footer />
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  }
}
</script>

<style>
.full-height {
  background-color: #495057;
}
</style>
