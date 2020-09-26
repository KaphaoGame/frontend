<template>
  <div>
    <b-row class="col-12">
      <b-col class="col-4">
          <div id="mock-score"  align="center">
            <b-avatar src="https://placekitten.com/300/300" size="4rem"></b-avatar>
            <span> {{score}}</span>
          </div>
          <div>
            <div class="specific-score" align="start">
                <span class="specific-score-font">Story</span>
                <br>
                <span class="specific-score-font">Gameplay</span>
                <br>
                <span class="specific-score-font">Graphics</span>
                <br>
                <span class="specific-score-font">Performance</span>
                <br>
                <span class="specific-score-font">Sound</span>
                <br>
            </div>
          </div>
      </b-col>

      <b-col class="review-card col-8">
        <p class="font-style2 text-break">{{username}}</p>
        <p class="text-break">{{reviewParagraph}}</p>
      </b-col>
    </b-row>
  </div>
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
}

.review-card {
  background: #bbc5ce;
  border-radius: 7px;
}

.specific-score {
  background: #ffffff;  
  border-radius: 7px;
}

.specific-score-font {
  font-size: 1vw;
}

.font-style2 {
  font-size: 3.0vw;
}

</style>