<template>
  <div class="gameDetail container">
    <h1 class="font-style">Game Name</h1>
    <br />

    <b-row class="mb-3">
      <b-img
        src="https://uknow.in.th/wp-content/uploads/2020/03/7-7.jpg"
        width="300px"
        height="540px"
      />
      <b-col><ScoresCard title="Game Scores card" /></b-col>
    </b-row>
    

    <div class="col-8">

      <div id="tag-card">TAG: RTS</div>
      <br />

      <b-row id="description-card">
        <h3>Description</h3>
        <p>
          I don't know what to write paragraph. I don't know what to write
          paragraph. I don't know what to write paragraph. I don't know what
          to write paragraph. I don't know what to write paragraph. I don't
          know what to write paragraph. I don't know what to write
          paragraph.
        </p>
      </b-row>

      <br />
      <b-row id="user-reviews-card">
        <h3>User Reviews</h3>
          <UserReviewsCard username="Kendo" score="9.0" reviewParagraph="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" />
        <br>
          <UserReviewsCard username="Kendos" score="8.8" reviewParagraph="bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
          bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
          bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
          bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb" />
        <br>
          <UserReviewsCard username="KendosOwO" score="9.5" reviewParagraph="cccccccccccccccccccccccccccccccccccccccccccccccccccc
          cccccccccccccccccccccccccccccccccccccccccccccccccccc
          cccccccccccccccccccccccccccccccccccccccccccccccccccc
          cccccccccccccccccccccccccccccccccccccccccccccccccccc" />
        <br>
      </b-row>
    </div>
    
    <br> 
    
    <div id="recommend-card" class="col-4">Recommend</div>
      
    
    <br>

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
import ScoresCard from "../components/gameDetailComponent/ScoresCard";
import UserReviewsCard from "../components/gameDetailComponent/UserReviewsCard";

export default {
  name: "gamedetail",

  components: {
    ScoresCard,
    UserReviewsCard,
  },

  methods: {
    dataAction() {
      this.$store.dispatch("dataAction");
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#tag-card {
  font-size: 2vw;
  color: grey;
  background: #e8eaec;
  width: 640px;
  border-radius: 10px;
}

#description-card {
  background: #e8eaec;
  width: 640px;
  border-radius: 10px;
}

#user-reviews-card {
  background: #e8eaec;
  width: 640px;
  border-radius: 10px;
}

#recommend-card {
  background: #e8eaec;
  width: 100px;
  border-radius: 10px;
}

.font-style {
  font-size: 1.2vw;
  color: #e9ecef;
}
</style>