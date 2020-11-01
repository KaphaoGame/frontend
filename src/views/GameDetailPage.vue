<template>
  <div class="gameDetail container">
    <br />
    <h1 class="font-style">{{ getDataGameName }}</h1>
    <br />

    <b-row class="mb-3">
      <b-img :src="getDataGameImageURL" width="300px" height="540px" />
      <b-col
        ><ScoresCard
          title="Game Scores card"
          :metacritic="getDataMetacritic"
          :platforms="getDataPlatforms"
          :developers="getDataGameDevelopers"
          :slug="getSlugData"
      /></b-col>
    </b-row>

    <b-row class="col-12">
      <b-col class="col-8">
        <div id="tag-card">
          <span>TAG: </span>
          <span v-for="genre in getDataGenres" :key="genre">{{genre}} </span>
        </div>

        <br />
        
        <div id="description-card">
          <h3>Description</h3>
          <p class="text-break">
            {{ getDataGameDescription }}
          </p>

          <br />
        </div>

        <br />

        <div id="user-reviews-card">
          <h3>User Reviews</h3>
          <UserReviewsCard
            username="Kendo"
            score="90"
            reviewParagraph="I don't know what to write paragraph. I don't know what to write
            paragraph. I don't know what to write paragraph. I don't know what
            to write paragraph. I don't know what to write paragraph. I don't
            know what to write paragraph. I don't know what to write paragraph."
          />
          <br />
          <UserReviewsCard
            username="Kendos"
            score="88"
            reviewParagraph="I don't know what to write paragraph. I don't know what to write
            paragraph. I don't know what to write paragraph. I don't know what
            to write paragraph. I don't know what to write paragraph. I don't
            know what to write paragraph. I don't know what to write paragraph."
          />
          <br />
          <UserReviewsCard
            username="KendosOwO"
            score="95"
            reviewParagraph="I don't know what to write paragraph. I don't know what to write
            paragraph. I don't know what to write paragraph. I don't know what
            to write paragraph. I don't know what to write paragraph. I don't
            know what to write paragraph. I don't know what to write paragraph."
          />
          <br />
        </div>
      </b-col>

      <b-col class="recommend-card col-4">
        <br />
        <b-col align="center">
          <h3>Recommend</h3>
        </b-col>

        <br />

        <b-col>
          <div>
            <span id="mock-score">9.5</span>
            <span id="font-style2"> Half Life 3</span>
          </div>
        </b-col>

        <br />

        <b-col>
          <div>
            <span id="mock-score">9.5</span>
            <span id="font-style2"> Left 4 Dead 3</span>
          </div>
        </b-col>

        <br />

        <b-col>
          <div>
            <span id="mock-score">9.5</span>
            <span id="font-style2"> Dota 3</span>
          </div>
        </b-col>

        <br />

        <b-col>
          <div>
            <span id="mock-score">9.5</span>
            <span id="font-style2"> Portal 3</span>
          </div>
        </b-col>

        <br />

        <b-col>
          <div>
            <span id="mock-score">9.5</span>
            <span id="font-style2"> Payday 3</span>
          </div>
        </b-col>

        <br />
      </b-col>
    </b-row>

    <br />
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
import ScoresCard from "../components/gameDetailComponent/ScoresCard";
import UserReviewsCard from "../components/gameDetailComponent/UserReviewsCard";

export default {
  props: ["slug"],

  name: "gamedetail",
  components: {
    ScoresCard,
    UserReviewsCard,
  },
  computed: {
    ...mapGetters({
      getSlugData: "topGameCard/getSlugData",
      getSlugDataNew: "newGameCard/getSlugData",
      getData: "gameDetail/getData",
      getDataGameName: "gameDetail/getDataGameName",
      getDataGameImageURL: "gameDetail/getDataGameImageURL",
      getDataMetacritic: "gameDetail/getDataMetacritic",
      getDataGameDescription: "gameDetail/getDataGameDescription",
      getDataPlatforms: "gameDetail/getDataPlatforms",
      getDataGameDevelopers: "gameDetail/getDataGameDevelopers",
      getDataGenres: "gameDetail/getDataGenres"
    }),
    ...mapState("gameDetail", ["data"]),
  },
  methods: {
    ...mapActions("gameDetail", ["dataAction"]),
  },
  created() {
    if (this.getSlugData) {
      this.dataAction(this.getSlugData);
    }else {
      this.dataAction(this.getSlugDataNew);
    }
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
  border-radius: 10px;
}

#description-card {
  background: #e8eaec;
  border-radius: 10px;
}

#user-reviews-card {
  background: #e8eaec;
  border-radius: 10px;
}

.recommend-card {
  background: #e8eaec;
  border-radius: 10px;
}

.font-style {
  font-size: 2vw;
  color: #e9ecef;
}
#mock-score {
  font-size: 3vw;
  color: #e9ecef;
  background: #18850c;
  border-radius: 7px;
}

#font-style2 {
  font-size: 1.5vw;
}
</style>