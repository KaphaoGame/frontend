<template>
  <div>
    <!-- edit -->
    <router-link :to="{ name: 'gamedetail', params: { slug: slug } }">
      <b-card
        overlay
        :img-src="gameImageURL"
        text-variant="white"
        @click="clickGame"
      >
        <b-card-title class="game-title">
          <div>
            {{ title }}
          </div>
        </b-card-title>
        
        <div class="mock-score">
          {{ metacritic }}
        </div>
      </b-card>
    </router-link>
    <!-- edit -->

    <!-- <b-col align-self="between">
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
              <b-col align-self="start">
          <div class="mock-score">
            <span>{{ metacritic }}</span>
          </div>
        </b-col>
      </b-col>
    </b-row>
  </b-col> -->
  </div>
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
      this.newGameCardSlugAction(null);
    },
  },
};
</script>

<style>
/* .font-style-title {
  font-size: 1.2vw;
  color: #ffffff;
}
#background-card {
  background: #212529;
  border-radius: 7px;
} */

.mock-score {
  font-size: 2vw;
  color: #ffffff;
  background: #18850c;
  border-radius: 7px;
  text-align: center;
  width: 15%;
}

/* .padding-progress {
  padding: 20px;
} */

/* .font-style-topgamecard {
  color: #ffffff;
} */

.game-title {
  background-color: #212529;
}
</style>

