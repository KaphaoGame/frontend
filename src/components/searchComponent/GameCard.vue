<template>
  <div>
    <!-- <b-card no-body class="overflow-hidden">
      <router-link :to="{ name: 'gamedetail', params: { slug: slug } }">
        <img
          :src="gameImageURL"
          alt="Image"
          class="rounded-0 game-img"
          contain
          @click="clickGame"
        />
      </router-link>

     
      <b-card-body :title="title"> </b-card-body>
    </b-card> -->

    <div>
      <router-link :to="{ name: 'gamedetail', params: { slug: slug } }">
        <b-card
          overlay
          :img-src="gameImageURL"
          :img-alt="Image"
          text-variant="white"
          @click="clickGame"
        >
          <b-card-title class="game-title ">
            {{ title }}
          </b-card-title>
        </b-card>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";

export default {
  props: ["title", "gameImageURL", "slug"],

  computed: {
    ...mapGetters({
      getSlugData: "topGameCard/getSlugData",
      getSlugDataNew: "newGameCard/getSlugData",
      getData: "gameDetail/getData",
    }),
    ...mapState("gameDetail", ["data"]),
    ...mapState("topGameCard", ["slugData"]),
    ...mapState("newGameCard", ["newGameCardData"]),
  },
  methods: {
    ...mapActions("gameDetail", ["dataAction"]),
    ...mapActions("topGameCard", ["topGameCardSlugAction"]),
    ...mapActions("newGameCard", ["newGameCardSlugAction"]),
    clickGame() {
      this.topGameCardSlugAction(this.slug);
      this.newGameCardSlugAction(null);
    },
  },
  created() {
    this.topGameCardSlugAction();
    this.newGameCardSlugAction();
  },
};
</script>

<style>
.game-img {
  width: 100%;
}
.blackbar {
  background-color: black;
}
.game-title {
  background-color: #212529;
}
</style>