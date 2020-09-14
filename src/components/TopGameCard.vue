<template>
  <b-col align-self="between">
    <b-row id="background-card">
      <b-col cols="6">
        <div>
          <span class="font-style">{{ title }}</span>
          <b-img src="https://uknow.in.th/wp-content/uploads/2020/03/7-7.jpg" width="300" height="540"/>
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

      <b-col  class="d-flex flex-column-reverse">
        <div>
          <b-progress :value="100" variant="success" striped :animated="animate" class="mt-4"></b-progress>
          <b-progress :value="25" variant="success" striped :animated="animate" class="mt-4"></b-progress>
          <b-progress :value="50" variant="info" striped :animated="animate" class="mt-4"></b-progress>
          <b-progress :value="75" variant="warning" striped :animated="animate" class="mt-4"></b-progress>
          <b-progress :value="100" variant="danger" :animated="animate" class="mt-4"></b-progress>
        </div>
        <b-col align-self="start">
          <div class="mock-score">
            <span>85</span>
          </div>
        </b-col>
      </b-col>
    </b-row>
  </b-col>
</template>

<script>
export default {
  props: [
    'title'
  ],
  data() {
      return {
        animate: true
      }
    } 
}
</script>

<style>
.font-style {
  font-size: 1.2vw;
  color: #212529;
}
#background-card {
  background: #E9ECEF;
  border-radius: 7px;
}
.mock-score {
  font-size: 5vw;
  color: #E9ECEF;
  background: #18850C;
  border-radius: 7px;
}
</style>>

