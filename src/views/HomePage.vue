<template>
  <div class="body">
    <div class="container">
      <div>
        <span class="font-style">New Game (Released)</span>
      </div>
      <div>
        <b-carousel
          id="carousel-1"
          :interval="4000"
          controls
          indicators
          background="#495057"
          img-width="1024"
          img-height="480"
          style="text-shadow: 1px 1px 2px #333"
        >
          <div v-for="(item, index) in getNewGameCard" :key="item.gameName">
            <div v-if="index < 5">
              <b-carousel-slide>
                <template v-slot:img>
                  <CarouselCard
                    :title="item.gameName"
                    :gameImageURL="item.gameImageURL"
                    :metacritic="item.metacriticScore"
                    :slug="item.slug"
                  />
                </template>
              </b-carousel-slide>
            </div>
          </div>
        </b-carousel>
      </div>
      <div class="text-align-center">
        <span class="font-style">Top Game</span>
      </div>
      <b-row>
        <b-col>
          <span class="font-style-2">Official Score</span>
        </b-col>
      </b-row>

      <b-row>
        <b-col
          class="col-6"
          v-for="item in getTopGameCard"
          :key="item.gameName"
        >
          <TopGameCard
            :title="item.gameName"
            :gameImageURL="item.gameImageURL"
            :metacritic="item.metacriticScore"
            :slug="item.slug"
          />
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import TopGameCard from "../components/homeComponents/TopGameCard";
import CarouselCard from "../components/homeComponents/CarouselCard";

import { mapState, mapActions, mapGetters } from "vuex";

export default {
  name: "HelloWorld",
  components: {
    TopGameCard,
    CarouselCard,
  },
  computed: {
    ...mapState("topGameCard", ["topGameCardData"]),
    ...mapGetters({
      getTopGameCard: "topGameCard/getTopGameCardData",
      getNewGameCard: "newGameCard/getNewGameCardData",
    }),
  },
  methods: {
    ...mapActions("topGameCard", ["topGameCardDataAction"]),
    ...mapActions("newGameCard", ["newGameCardDataAction"]),
  },
  created() {
    this.topGameCardDataAction();
    this.newGameCardDataAction();
  },
};
</script>

<style scoped>
.body {
  background: #495057;
}
.font-style {
  font-size: 3.5vw;
  color: #e8eaec;
}
.text-align-center {
  text-align: center;
}
.font-style-2 {
  font-size: 2.5vw;
  color: #e8eaec;
}
</style>
