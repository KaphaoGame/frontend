<template>
  <div id="gameDetail">
    <h1 class="white--text">Game Name</h1>
    <br>

    <div>

      <b-row class="mb-3">
        <b-img src="https://uknow.in.th/wp-content/uploads/2020/03/7-7.jpg" width="300px" height="540px"/>
        <ScoresCard title="Game Scores card"/>
      </b-row>

      <b-row>
        <b-col col="6">
          <span class="tag-card">TAG:</span>
        </b-col>
        <b-col col="6">
          <span class="recommend-card text-align-center">Recommend</span>
        </b-col>
      </b-row>

      <br>

      <b-row class="description-card">
        <h3>Description</h3>
        <p1>I don't know what to write paragraph. 
          I don't know what to write paragraph. 
          I don't know what to write paragraph.
          I don't know what to write paragraph.
          I don't know what to write paragraph.
          I don't know what to write paragraph.
          I don't know what to write paragraph.
        </p1>
      </b-row>

      <br>

      <b-row class="user-reviews-card">
        <h3>User Reviews</h3>
        <UserReviewsCard title="user"/>
      </b-row>



    </div>





    <!-- <button @click="dataAction">get Game from API</button> <br>
    <div>
      <h1>{{$store.state.data.gameName}}</h1>
      <img :src= $store.state.data.gameImageURL>
      <h3>{{$store.state.data.gameReleaseDate}}</h3>
      <h3>{{$store.state.data.gameDescription_raw}}</h3>
    </div> -->
  </div>
</template>

<script>

import ScoresCard from '../components/gameDetailComponent/ScoresCard'
import UserReviewsCard from '../components/gameDetailComponent/UserReviewsCard'

export default {
  name: 'gamedetail',

  components: {
    ScoresCard,
    UserReviewsCard
  },

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

.tag-card {
  font-size: 2.0vw;
  color: grey;
  background: #E8EAEC;
  width: 640px;
}

.description-card {
  background: #E8EAEC;
  width: 640px;
}

.user-reviews-card {
  background: #E8EAEC;
  width: 640px;
}

.recommend-card {
  background: #E8EAEC;
  width: 640px;
}

</style>