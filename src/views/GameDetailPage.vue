<template>
  <div class="gameDetail container">
    <br />
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

    <b-row class="col-12">
      <b-col class="col-8">
        <div id="tag-card">
          <p> TAG: RTS </p>
        </div>


        <div id="description-card">
          <h3>Description</h3>
          <p class="text-break">
            I don't know what to write paragraph. I don't know what to write
            paragraph. I don't know what to write paragraph. I don't know what
            to write paragraph. I don't know what to write paragraph. I don't
            know what to write paragraph. I don't know what to write paragraph.
          </p>
          <br>
        </div>

        <br>

        <div id="user-reviews-card">
          <h3>User Reviews</h3>
          <UserReviewsCard username="Kendo" score="90" reviewParagraph="I don't know what to write paragraph. I don't know what to write
            paragraph. I don't know what to write paragraph. I don't know what
            to write paragraph. I don't know what to write paragraph. I don't
            know what to write paragraph. I don't know what to write paragraph."/>
          <br>
          <UserReviewsCard username="Kendos" score="88" reviewParagraph="I don't know what to write paragraph. I don't know what to write
            paragraph. I don't know what to write paragraph. I don't know what
            to write paragraph. I don't know what to write paragraph. I don't
            know what to write paragraph. I don't know what to write paragraph."/>
          <br>
          <UserReviewsCard username="KendosOwO" score="95" reviewParagraph="I don't know what to write paragraph. I don't know what to write
            paragraph. I don't know what to write paragraph. I don't know what
            to write paragraph. I don't know what to write paragraph. I don't
            know what to write paragraph. I don't know what to write paragraph."/>
          <br>
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

    <br>

  </div>
</template>

<script>
import ScoresCard from '../components/gameDetailComponent/ScoresCard'
import UserReviewsCard from '../components/gameDetailComponent/UserReviewsCard'

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