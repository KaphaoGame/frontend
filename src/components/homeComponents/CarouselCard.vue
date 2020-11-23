<template v-slot:img>
  <div class="container">
    <div class="row col-12">
      <!-- <span>{{ title }}</span> -->
      <router-link :to="{ name: 'gamedetail', params: { slug: slug } }">
        <img
          class="d-block img-fluid w-100 bg-image"
          width="1024"
          height="480"
          :src="gameImageURL"
          alt="image slot"
          @click="clickGame"
        />
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  props: ["title", "gameImageURL", "metacritic", "slug"],
  computed: {
    ...mapState("newGameCard", ["slugData"]),
    ...mapState("gameDetail", ["data"]),
  },
  methods: {
    ...mapActions("newGameCard", ["newGameCardSlugAction"]),
    ...mapActions("topGameCard", ["topGameCardSlugAction"]),

    clickGame() {
      this.newGameCardSlugAction(this.slug);
      this.topGameCardSlugAction(null);
    },
  },
};
</script>

<style>
.font-style {
  font-size: 10px;
  color: #e8eaec;
}
.example-review {
  font-size: 1.5vw;
  color: #e8eaec;
}
.bg {
  background: #6c757d;
  border-radius: 3%;
}
.bg-image {
  border-radius: 10px;
}
</style>