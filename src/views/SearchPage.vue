<template>
  <div class="container-fluid">
    <h1 class="text-center">Search</h1>
    <!-- Search Containter -->

    <div class="searchBar container"></div>

      <!-- Search Bat -->
      <b-form-tags input-id="tags-basic" v-model="value" placeholder="Name, Tag, Keyword..."></b-form-tags>
      <br>

      <!-- Sorting Bar -->
      <b-button-group class="col-6 offset-3">
        <b-button>Name</b-button>
        <b-button>Released Date</b-button>
        <b-button>View</b-button>
      </b-button-group>

      <!-- Search Result -->
      <div>
        <GameCard/>
        <GameCard/>
        <GameCard/>
        <GameCard/>
        <GameCard/>
      </div>

  </div>
</template>

<script>
import GameCard from "../components/searchComponent/GameCard.vue"

export default {
  name: 'search',

  components: {
    GameCard,
  }
}
</script>

<style>

</style>