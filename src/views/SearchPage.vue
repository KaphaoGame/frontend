<template>
  <div class="container-fluid">
    <h1 class="text-center">Search</h1>
    <!-- Search Containter -->
    <div class="searchBar container"></div>
      <div align="center">
        <input id="search-bar" type="text" v-model="searchWord" placeholder="Search title.."/>
      </div>
      <br />

      <!-- Sorting Bar -->
      <!-- <b-button-group class="col-6 offset-3">
        <b-button>Name</b-button>
        <b-button>Released Date</b-button>
        <b-button>View</b-button>
      </b-button-group> -->

      <!-- Search Result -->
      <div v-for="game in filteredList" :key="game.gameName">
        <GameCard 
          :title="game.gameName"
          :gameImageURL="game.gameImageURL"
          :slug="game.slug"
        />
      </div>
      <br />
  </div>
</template>

<script>
import GameCard from "../components/searchComponent/GameCard.vue";

import { mapState, mapActions, mapGetters } from "vuex";

export default {
  name: 'search',

  data() {
    return {
      searchWord: '',
      gameList: [],
    }
  },
  components: {
    GameCard
  },
  computed: {
    ...mapState("newGameCard", ["newGameCardData"]),
    ...mapGetters({
      getNewGameCard: "newGameCard/getNewGameCardData",
      getUser: "account/getUser",
    }),
    filteredList() {
      return this.getNewGameCard.filter(game => {
        return game.gameName.toLowerCase().includes(this.searchWord.toLowerCase())
      })
    }
  },
  methods: {
    ...mapActions("newGameCard", ["newGameCardSlugAction"]),
  },
  created() {
    this.newGameCardSlugAction();
  },
}
</script>

<style scoped>
#search-bar {
  width: 80vw;
}
</style>