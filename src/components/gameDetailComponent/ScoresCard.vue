<template v-slot:img>
  <b-container id="score-card">
    <b-row>
      <b-col class="text-align-center">
        <span id="font-style">User Score</span>
        <div align="center">
          <div id="mock-score2">
            <span>85</span>
          </div>
        </div>
        <b-col class="d-flex flex-column-reverse">
          <div>
            <b-progress
              :value="100"
              variant="success"
              striped
              :animated="animate"
              class="mt-4"
            ></b-progress>
            <hr />
            <b-progress
              :value="25"
              variant="success"
              striped
              :animated="animate"
              class="mt-4"
            ></b-progress>
            <hr />
            <b-progress
              :value="50"
              variant="info"
              striped
              :animated="animate"
              class="mt-4"
            ></b-progress>
            <hr />
            <b-progress
              :value="75"
              variant="warning"
              striped
              :animated="animate"
              class="mt-4"
            ></b-progress>
            <hr />
            <b-progress
              :value="100"
              variant="danger"
              :animated="animate"
              class="mt-4"
            ></b-progress>
            <hr />
          </div>
        </b-col>
        <div>
          <span>Platform: </span>
          <span v-for="platform in platforms" :key="platform"
            >{{ platform }},
          </span>
        </div>
        <br /><br />
        <div>
          <span>Developer: </span>
          <span v-for="developer in developers" :key="developer"
            >{{ developer }}
          </span>
        </div>
      </b-col>

      <b-col class="text-align-center">
        <br /><br /><br /><br /><br /><br />
        <span>Story</span>
        <br />
        <hr />
        <span>Gameplay</span>
        <br />
        <hr />
        <span>Graphics</span>
        <br />
        <hr />
        <span>Performance</span>
        <br />
        <hr />
        <span>Sound</span>
        <br />
        <hr />
      </b-col>

      <b-col class="text-align-center">
        <span id="font-style">Official Score</span>
        <b-col align="center">
          <div id="mock-score2">
            <span>{{ metacritic }}</span>
          </div>
        </b-col>
        <b-col class="d-flex flex-column-reverse">
          <div>
            <b-progress
              :value="100"
              variant="success"
              striped
              :animated="animate"
              class="mt-4"
            ></b-progress>
            <hr />
            <b-progress
              :value="25"
              variant="success"
              striped
              :animated="animate"
              class="mt-4"
            ></b-progress>
            <hr />
            <b-progress
              :value="50"
              variant="info"
              striped
              :animated="animate"
              class="mt-4"
            ></b-progress>
            <hr />
            <b-progress
              :value="75"
              variant="warning"
              striped
              :animated="animate"
              class="mt-4"
            ></b-progress>
            <hr />
            <b-progress
              :value="100"
              variant="danger"
              :animated="animate"
              class="mt-4"
            ></b-progress>
            <hr />
          </div>
        </b-col>
        <br /><br />
        <div v-if="getUserName !== null">
          <span>Write your review </span>
          <router-link :to="{ name: 'gamereview', params: { slug: slug } }">
            <img src="../../assets/penIcon.png" class="pen-icon" />
          </router-link>
        </div>
      </b-col>
    </b-row>
    <br />
  </b-container>
</template>

<script>
import { mapGetters, mapState } from "vuex";

export default {
  props: ["title", "metacritic", "platforms", "developers", "slug"],
  data() {
    return {
      animate: true,
    };
  },
  computed: {
    ...mapState("account", ["status"]),
    ...mapGetters({
      getUserName: "account/getUserName",
    })
  }
};
</script>

<style>
#font-style {
  font-size: 2vw;
}
#score-card {
  background: #b3c0ca;
  border-radius: 10px;
}
#mock-score2 {
  font-size: 4vw;
  color: #e9ecef;
  background: #18850c;
  border-radius: 7px;
}
.pen-icon {
  width: 2vw;
  height: 2vw;
}
</style>