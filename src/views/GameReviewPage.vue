<template>
  <div>
    <div class="font-style-1">
      <h1>GameReviewPage</h1>
    </div>
    <br />
    <div class="font-style-2">
      <p>{{ getDataGameName }}</p>
    </div>

    <div>
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="#495057"
        img-width="1024"
        img-height="480"
        style="text-shadow: 1px 1px 2px #333"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <!-- Text slides with image -->
        <b-carousel-slide
          caption="First slide"
          :img-src="getDataGameImageURL"
        ></b-carousel-slide>

        <!-- Slides with custom text -->
        <b-carousel-slide :img-src="getDataGameImageURL">
          <h1>Hello world!</h1>
        </b-carousel-slide>

        <!-- Slides with image only -->
        <b-carousel-slide :img-src="getDataGameImageURL"></b-carousel-slide>

        <!-- Slides with img slot -->
        <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
        <b-carousel-slide>
          <template v-slot:img>
            <img
              class="d-block img-fluid w-100"
              width="1024"
              height="480"
              :src="getDataGameImageURL"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>
      </b-carousel>
    </div>

    <br />

    <div class="font-style-3">
      <label>Story</label>
    </div>
    <div>
      <b-input-group>
        <b-input-group-prepend>
          <b-button @click="storyVal = null">Clear</b-button>
        </b-input-group-prepend>
        <b-form-rating v-model="storyVal" color="#ff8800" stars="10"></b-form-rating>
        <b-input-group-append>
          <b-input-group-text class="justify-content-center" style="min-width: 3em;">
            {{ storyVal }}
          </b-input-group-text>
        </b-input-group-append>
      </b-input-group>
    </div>
    <br />

    <div class="font-style-3">
      <label>Gameplay</label>
    </div>
    <div>
      <b-input-group>
        <b-input-group-prepend>
          <b-button @click="gameplayVal = null">Clear</b-button>
        </b-input-group-prepend>
        <b-form-rating v-model="gameplayVal" color="#ff8800" stars="10"></b-form-rating>
        <b-input-group-append>
          <b-input-group-text class="justify-content-center" style="min-width: 3em;">
            {{ gameplayVal }}
          </b-input-group-text>
        </b-input-group-append>
      </b-input-group>
    </div>
    <br />

    <div class="font-style-3">
      <label>Graphics</label>
    </div>
    <div>
      <b-input-group>
        <b-input-group-prepend>
          <b-button @click="graphicVal = null">Clear</b-button>
        </b-input-group-prepend>
        <b-form-rating v-model="graphicVal" color="#ff8800" stars="10"></b-form-rating>
        <b-input-group-append>
          <b-input-group-text class="justify-content-center" style="min-width: 3em;">
            {{ graphicVal }}
          </b-input-group-text>
        </b-input-group-append>
      </b-input-group>
    </div>
    <br />

    <div class="font-style-3">
      <label>Performance</label>
    </div>
    <div>
      <b-input-group>
        <b-input-group-prepend>
          <b-button @click="performanceVal = null">Clear</b-button>
        </b-input-group-prepend>
        <b-form-rating v-model="performanceVal" color="#ff8800" stars="10"></b-form-rating>
        <b-input-group-append>
          <b-input-group-text class="justify-content-center" style="min-width: 3em;">
            {{ performanceVal }}
          </b-input-group-text>
        </b-input-group-append>
      </b-input-group>
    </div>
    <br />

    <div class="font-style-3">
      <label>Sound</label>
    </div>
    <div>
      <b-input-group>
        <b-input-group-prepend>
          <b-button @click="soundVal = null">Clear</b-button>
        </b-input-group-prepend>
        <b-form-rating v-model="soundVal" color="#ff8800" stars="10"></b-form-rating>
        <b-input-group-append>
          <b-input-group-text class="justify-content-center" style="min-width: 3em;">
            {{ soundVal }}
          </b-input-group-text>
        </b-input-group-append>
      </b-input-group>
    </div>
    <br />

    <div class="mb-2">
      <div class="avatar">
        <b-avatar src="https://placekitten.com/300/300" size="6rem"></b-avatar>
      </div>
      <br />
      <div>
        <b-form-textarea
          id="textarea"
          v-model="text"
          placeholder="Enter something..."
          rows="3"
          max-rows="6"
        ></b-form-textarea>

      </div>
      <div class="d-flex flex-row-reverse">
        <router-link :to="{ name: 'gamedetail', params: { slug: getSlugData } }">
          <b-button variant="primary" v-on:click="handleSubmit()">SUBMIT</b-button>
        </router-link>
      </div>
    </div>
  </div>
</template>
    

<script>
import { mapGetters } from "vuex";
// import RatingStar from "../components/GameReviewComponent/RatingForm";
import ReviewServiceAPI from "@/api/ReviewServiceAPI";

const reviewService = new ReviewServiceAPI();

export default {
  name: "gamereview",

  components: {
    // RatingStar,
  },
  data() {
    return {
      storyVal: null,
      gameplayVal: null,
      graphicVal: null,
      performanceVal: null,
      soundVal: null,
      text: null,
    }
  },
  computed: {
    ...mapGetters({
      getSlugData: "topGameCard/getSlugData",
      getSlugDataNew: "newGameCard/getSlugData",
      getDataGameName: "gameDetail/getDataGameName",
      getDataGameImageURL: "gameDetail/getDataGameImageURL",
      getUserName: "account/getUserName",
    }),
  },
  methods: {
    handleSubmit() {
      const formdata = new FormData();
      if (this.getSlugData) {
        formdata.append("gameTag", this.getSlugData)
      }
      else {
        formdata.append("gameTag", this.getSlugDataNew)
      }
      formdata.append("gameName", this.getDataGameName)
      formdata.append("username", this.getUserName)
      formdata.append("story", this.storyVal)
      formdata.append("gameplay", this.gameplayVal)
      formdata.append("sound", this.soundVal)
      formdata.append("graphic", this.graphicVal)
      formdata.append("performance", this.performanceVal)
      formdata.append("comments", this.text)

      const check = reviewService.createReview(formdata)
      console.log(check)
    }
  }
};
</script>


<style>
.body {
  background: #495057;
}

.font-style-1 {
  font-size: 3.5vw;
  color: #e8eaec;
}

.font-style-2 {
  font-size: 2vw;
  color: #e8eaec;
}

.font-style-3 {
  font-size: 1.5vw;
  color: #e8eaec;
}
</style>