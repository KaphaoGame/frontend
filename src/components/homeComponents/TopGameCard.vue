<template>
  <b-col align-self="between">
    <b-row id="background-card">
      <b-col cols="10">
        <div>
          <span class="font-style-title">{{ title }}</span>
          <router-link :to="{ name: 'gamedetail', params: { slug: slug } }">
            <b-img
              :src="gameImageURL"
              width="500vw"
              height="320vh"
              @click="clickGame"
            />
          </router-link>
        </div>
      </b-col>

      <b-col class="d-flex flex-column-reverse">
        <b-row class="mb-3 d-flex flex-row">
          <span class="font-style-topgamecard">Story</span>
        </b-row>
        <b-row class="mb-3 d-flex flex-row">
          <span class="font-style-topgamecard">Gameplay</span>
        </b-row>
        <b-row class="mb-3 d-flex flex-row">
          <span class="font-style-topgamecard">Graphics</span>
        </b-row>
        <b-row class="mb-3 d-flex flex-row">
          <span class="font-style-topgamecard">Performance</span>
        </b-row>
        <b-row class="mb-3 d-flex flex-row">
          <span class="font-style-topgamecard">Sound</span>
        </b-row>
      </b-col>

      <b-col class="d-flex flex-column-reverse">
        <div class="padding-progress">
          <b-progress
            :value="100"
            variant="success"
            striped
            :animated="animate"
            class="mt-4"
          ></b-progress>
          <b-progress
            :value="100"
            variant="success"
            :animated="animate"
            class="mt-4"
          ></b-progress>
          <b-progress
            :value="70"
            variant="success"
            striped
            :animated="animate"
            class="mt-4"
          ></b-progress>
          <b-progress
            :value="50"
            variant="warning"
            striped
            :animated="animate"
            class="mt-4"
          ></b-progress>
          <b-progress
            :value="30"
            variant="danger"
            striped
            :animated="animate"
            class="mt-4"
          ></b-progress>
        </div>
        <b-col align-self="start">
          <div class="mock-score">
            <span>{{ metacritic }}</span>
          </div>
        </b-col>
      </b-col>
    </b-row>
  </b-col>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  props: ["title", "gameImageURL", "metacritic", "slug"],
  data() {
    return {
      animate: true,
    };
  },
  computed: {
    ...mapState("topGameCard", ["slugData"]),
    ...mapState("gameDetail", ["data"]),
  },
  methods: {
    ...mapActions("topGameCard", ["topGameCardSlugAction"]),
    ...mapActions("newGameCard", ["newGameCardSlugAction"]),
    clickGame() {
      this.topGameCardSlugAction(this.slug);
      this.newGameCardSluhAction(null);
    },
  },
};
</script>

<style>
.font-style-title {
  font-size: 1.2vw;
  color: #ffffff;
}
#background-card {
  background: #212529;
  border-radius: 7px;
}
.mock-score {
  font-size: 5vw;
  color: #e9ecef;
  background: #18850c;
  border-radius: 7px;
  text-align: center;
}
.padding-progress {
  padding: 20px;
}
.font-style-topgamecard {
  color: #ffffff;
}
</style>>

