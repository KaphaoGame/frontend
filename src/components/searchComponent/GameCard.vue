<template>
  <div>
    <b-card no-body class="overflow-hidden">
      <b-row no-gutters>
        <b-col md="6">
          <router-link :to="{ name: 'gamedetail', params: { slug: slug } }">
            <img
              :src="gameImageURL"
              alt="Image"
              class="rounded-0 game-img"
              contain
              @click="clickGame"
            />
          </router-link>
        </b-col>
        <b-col md="6">
          <b-card-body :title="title">
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
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
      this.topGameCardSlugAction(null);
      this.newGameCardSlugAction(this.slug);
    },
  },
  created() {
    // this.newGameCardDataAction();
  },
};
</script>

<style>
.game-img {
  width: 44vw;
}
</style>