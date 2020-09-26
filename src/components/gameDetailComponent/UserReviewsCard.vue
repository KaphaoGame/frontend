<template>
  <b-container>
    <b-row>
      <b-col>
        <div align="center">
          <div id="mock-score">
            <b-avatar src="https://placekitten.com/300/300" size="4rem"></b-avatar>
            <span> {{score}}</span>
          </div>
          <div>
            <div class="specific-score" align="start">
                <span>Story</span>
                <br>
                <span>Gameplay</span>
                <br>
                <span>Graphics</span>
                <br>
                <span>Performance</span>
                <br>
                <span>Sound</span>
                <br>
            </div>
          </div>
        </div>
      </b-col>

      <b-col>
        <div>
          <div class="review-card">
            <span class="font-style2">{{username}}</span>
            <br>
            <span>{{reviewParagraph}}</span>

          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
    props: [
    'username',
    'score',
    'reviewParagraph'
  ],
  data() {
      return {
        animate: true
      }
    } 
};
</script>

<style>
#mock-score {
  font-size: 2vw;
  color: #e9ecef;
  background: #18850c;
  border-radius: 7px;
  width: 150px;
}

.review-card {
  background: #bbc5ce;
  width: 400px;
  height: 200px;
}

.specific-score {
  background: #ffffff;
  width: 150px;
  height: 120px;
}

.font-style2 {
    font-size: 3.0vw;
}

</style>