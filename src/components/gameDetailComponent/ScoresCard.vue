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
            <b-progress :value="100" variant="success" striped :animated="animate" class="mt-4"></b-progress>
            <hr />
            <b-progress :value="25" variant="success" striped :animated="animate" class="mt-4"></b-progress>
            <hr />
            <b-progress :value="50" variant="info" striped :animated="animate" class="mt-4"></b-progress>
            <hr />
            <b-progress :value="75" variant="warning" striped :animated="animate" class="mt-4"></b-progress>
            <hr />
            <b-progress :value="100" variant="danger" :animated="animate" class="mt-4"></b-progress>
            <hr />
          </div>
        </b-col>
        <span>Platform PC, PS5, XBOX</span>
        <br /><br />
        <span>Developer EA</span>
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
            <span>85</span>
          </div>
        </b-col>
        <b-col class="d-flex flex-column-reverse">
          <div>
            <b-progress :value="100" variant="success" striped :animated="animate" class="mt-4"></b-progress>
            <hr />
            <b-progress :value="25" variant="success" striped :animated="animate" class="mt-4"></b-progress>
            <hr />
            <b-progress :value="50" variant="info" striped :animated="animate" class="mt-4"></b-progress>
            <hr />
            <b-progress :value="75" variant="warning" striped :animated="animate" class="mt-4"></b-progress>
            <hr />
            <b-progress :value="100" variant="danger" :animated="animate" class="mt-4"></b-progress>
            <hr />
          </div>
        </b-col>
        <br /><br />
        <span>Write your review </span>
        <router-link to="/gamereview"> 
          <img src="../../assets/penIcon.png" class="pen-icon"/>
        </router-link>
      </b-col>
    </b-row>
    <br />
  </b-container>
</template>

<script>
export default {
  props: [
      "title"
    ],
  data() {
    return {
      animate: true,
    };
  },
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