<template>
  <div id="gameDetail">
    <router-link to="/gamereview">
      <button>Game Review Page</button>
    </router-link>
    <br />
  </div>
</template>

<script>

import ScoresCard from '../components/gameDetailComponent/ScoresCard'
import UserReviewsCard from '../components/gameDetailComponent/UserReviewsCard'

export default {

  name: "gamedetail",
  methods: {},
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