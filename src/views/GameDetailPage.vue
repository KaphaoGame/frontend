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

    <b-row class="mb-3">
      <b-col id="tag-card" class="col-8">
          <p> TAG: RTS </p>
          <h3>Description</h3>
          <p>
            I don't know what to write paragraph. I don't know what to write
            paragraph. I don't know what to write paragraph. I don't know what
            to write paragraph. I don't know what to write paragraph. I don't
            know what to write paragraph. I don't know what to write paragraph.
          </p>
          <h3>User Reviews</h3>
          <UserReviewCard username="Kendo" score="90" reviewParagraph="aaaaaaa"/>
          <UserReviewCard username="Kendo" score="90" reviewParagraph="aaaaaaa"/>
          <UserReviewCard username="Kendo" score="90" reviewParagraph="aaaaaaa"/>

      </b-col>
      <b-col class="col-4 recommend-card">
        recommend
      </b-col>
    </b-row>
    <router-link :to="{name: 'gamereview', params: {slug: slug}}" >
      <button> gamereview </button>

    </router-link>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';
import ScoresCard from "../components/gameDetailComponent/ScoresCard";
import UserReviewCard from "../components/gameDetailComponent/UserReviewsCard"

export default {
  props: ["slug"],
  name: "gamedetail",
  components: {
    ScoresCard,
    UserReviewCard,
  },
  computed: {
    ...mapGetters({
      getSlugData: "topGameCard/getSlugData",
      getData: "gameDetail/getData"
    }),
    ...mapState("gameDetail", ["data"]),
  },
  methods: {
    ...mapActions("gameDetail", ["dataAction"]),
  },
  async created() {
   await this.dataAction(this.getSlugData)
  }
  
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
  font-size: 1.2vw;
  color: #e9ecef;
}
</style>