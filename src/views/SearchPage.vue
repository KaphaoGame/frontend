<template>
  <div class="container-fluid">
    <h1 class="text-center">Search</h1>
    <!-- Search Containter -->

    <div class="searchBar container"></div>

      <!-- Search Bar -->
      <b-form-tags input-id="tags-basic" v-model="value" placeholder="Name, Tag, Keyword..."></b-form-tags>
      <!-- <div class="search-wrapper">
        <input type="text" v-model="searchWord" placeholder="Search title.."/>
      </div> -->
      <br>

      <!-- Sorting Bar -->
      <b-button-group class="col-6 offset-3">
        <b-button>Name</b-button>
        <b-button>Released Date</b-button>
        <b-button>View</b-button>
      </b-button-group>

      <!-- Search Result -->
      <!-- <div class="wrapper">
        <div class="card" v-for="game in filteredList" :key="game">
          <a v-bind:href="post.link" target="_blank">
            <img v-bind:src="post.img"/>
            <small>posted by: {{ post.author }}</small>
            {{ post.title }}
          </a>
        </div>
      </div> -->

      <div v-for="(game, index) in getNewGameCard" :key="game.gameName">
        <div v-if="index < 5">
          <GameCard 
            :title="game.gameName"
            :gameImageURL="game.gameImageURL"
            :gameDescription="game.gameDescription"
            :slug="game.slug"
          />
        </div>
      </div>
      <br />
  </div>
</template>

<script>
import GameCard from "../components/searchComponent/GameCard.vue";

import { mapState, mapActions, mapGetters } from "vuex";

export default {
  name: 'search',

  data: {
    searchWord: '',
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
      return this.getNewGameCard.filter(post => {
        return game.gameName.toLowerCase().includes(this.searchWord.toLowerCase())
      })
    }
  },
  methods: {
    ...mapActions("newGameCard", ["newGameCardDataAction"]),
  },
  created() {
    this.newGameCardDataAction();
  },
}
</script>

<style>

</style>