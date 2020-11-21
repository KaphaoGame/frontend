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
      found: false,
    }
  },
  components: {
    GameCard
  },
  computed: {
    ...mapState("topGameCard", ["topGameCardData"]),
    ...mapState("newGameCard", ["newGameCardData"]),
    ...mapGetters({
      getTopGameCard: "topGameCard/getTopGameCardData",
      getNewGameCard: "newGameCard/getNewGameCardData",
      getUser: "account/getUser",
    }),
    filteredList() {
      return this.gameList.filter(game => {
        return game.gameName.toLowerCase().includes(this.searchWord.toLowerCase())
      })
    }
  },
  methods: {
    ...mapActions("topGameCard", ["topGameCardSlugAction"]),
    ...mapActions("newGameCard", ["newGameCardSlugAction"]),
  },
  created() {
    // console.log(this.getNewGameCard)
    // console.log(this.getTopGameCard)
    this.topGameCardSlugAction();
    this.newGameCardSlugAction();
    this.getNewGameCard.forEach(element => {
      this.gameList.forEach(game => {
        if(element.gameName === game.gameName) {
          this.found = true;
        }
      });
      if(this.found === false) {
        this.gameList.push(element);
      }
      this.found = false;
    });
    // console.log(this.gameList)
    this.getTopGameCard.forEach(element => {
      this.gameList.forEach(game => {
        if(element.gameName === game.gameName) {
          this.found = true;
        }
      });
      if(this.found === false) {
        this.gameList.push(element);
      }
      this.found = false;
    });
    // console.log(this.gameList)

  },
}
</script>

<style scoped>
#search-bar {
  width: 80vw;
}
</style>