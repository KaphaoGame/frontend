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
          style="text-shadow: 1px 1px 2px #333;"
        >
          <b-carousel-slide>
            <template v-slot:img>
              <CarouselCard />
            </template>
          </b-carousel-slide>

          <!-- Text slides with image -->
          <b-carousel-slide
            caption="First slide"
            text="Nulla vitae elit libero, a pharetra augue mollis interdum."
            img-src="https://i.ytimg.com/vi/k-POG1-Cp1k/maxresdefault.jpg"
          ></b-carousel-slide>

          <!-- Slides with custom text -->
          <b-carousel-slide img-src="https://gamerism.co/wp-content/uploads/2020/01/the-last-of-us-part-ii-in-depth-2.jpg">
            <h1>Hello world!</h1>
          </b-carousel-slide>

          <!-- Slides with image only -->
          <b-carousel-slide img-src="https://cdn.mos.cms.futurecdn.net/zy3gJJt97KzQU3fZLo8QA7.jpg"></b-carousel-slide>

          <!-- Slides with img slot -->
          <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
          <b-carousel-slide>
            <template v-slot:img>
              <img
                class="d-block img-fluid w-100"
                width="1024"
                height="480"
                src="https://wpadmin.gamefever.co/wp-content/uploads/2020/03/final-fantasy-7-remake.jpg"
                alt="image slot"
              >
            </template>
          </b-carousel-slide>

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
        <b-col class="col-6" v-for="item in getTopGameCard" :key="item.gameName">
            <TopGameCard :title=item.gameName :gameImageURL=item.gameImageURL :metacritic=item.metacriticScore :slug=item.slug />
        </b-col>
      </b-row>

    </div>
  </div>
</template>

<script>
import TopGameCard from '../components/homeComponents/TopGameCard'
import CarouselCard from '../components/homeComponents/CarouselCard'

import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  name: 'HelloWorld',
  components: {
    TopGameCard,
    CarouselCard,
  },
  computed: {
    ...mapState("topGameCard", ["topGameCardData"]),
    ...mapGetters({
      getTopGameCard: "topGameCard/getTopGameCardData"
    }),
  },
  methods: {
    ...mapActions("topGameCard", ["topGameCardDataAction"]),
  },
  created() {
    this.topGameCardDataAction()
  }
}
</script>

<style scoped>
.body {
  background: #495057;
}
.font-style {
  font-size: 3.5vw;
  color: #E8EAEC;
}
.text-align-center {
  text-align: center;
}
.font-style-2 {
  font-size: 2.5vw;
  color: #E8EAEC;
}
</style>
