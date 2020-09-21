<template>
  <b-col align-self="between">
    <b-row id="background-card">
      <b-col cols="6">
        <div>
          <span class="font-style-title">{{ title }}</span>
          <router-link :to="{name: 'gamedetail', params: {slug: slug}}" >
            <b-img :src=gameImageURL width="225vw" height="320vh" />
          </router-link>
        </div>
      </b-col>

      <b-col class="d-flex flex-column-reverse">
        <b-row class="mb-3 d-flex flex-row-reverse">
          <span>Story</span>
        </b-row>
        <b-row class="mb-3 d-flex flex-row-reverse">
          <span>Gameplay</span>
        </b-row>
        <b-row class="mb-3 d-flex flex-row-reverse">
          <span>Graphics</span>
        </b-row>
        <b-row class="mb-3 d-flex flex-row-reverse">
          <span>Performance</span>
        </b-row>
        <b-row class="mb-3 d-flex flex-row-reverse">
          <span>Sound</span>
        </b-row>
      </b-col>

      <b-col class="d-flex flex-column-reverse">
        <div class="padding-progress">
          <b-progress :value="100" variant="success" striped :animated="animate" class="mt-4"></b-progress>
          <b-progress :value="100" variant="success" :animated="animate" class="mt-4"></b-progress>
          <b-progress :value="70" variant="success" striped :animated="animate" class="mt-4"></b-progress>
          <b-progress :value="50" variant="warning" striped :animated="animate" class="mt-4"></b-progress>
          <b-progress :value="30" variant="danger" striped :animated="animate" class="mt-4"></b-progress>
        </div>
        <b-col align-self="start">
          <div class="mock-score">
            <span>{{metacritic}}</span>
          </div>
        </b-col>
      </b-col>
    </b-row>
  </b-col>
</template>

<script>
export default {
  props: ["title", "gameImageURL", "metacritic", "slug"],
  data() {
    return {
      animate: true,
    };
  },
};
</script>

<style>
.font-style-title {
  font-size: 1.2vw;
  color: #212529;
}
#background-card {
  background: #e9ecef;
  border-radius: 7px;
}
.mock-score {
  font-size: 5vw;
  color: #e9ecef;
  background: #18850c;
  border-radius: 7px;
}
.padding-progress {
  padding: 20px;
}
</style>>

