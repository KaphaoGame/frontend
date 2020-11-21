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
                <span class="specific-score-font">Story {{storyVal}}</span>
                <br>
                <span class="specific-score-font">Gameplay {{gameplayVal}}</span>
                <br>
                <span class="specific-score-font">Graphics {{graphicVal}}</span>
                <br>
                <span class="specific-score-font">Performance {{performanceVal}}</span>
                <br>
                <span class="specific-score-font">Sound {{soundVal}}</span>
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
    'reviewParagraph',
    'soundVal',
    'gameplayVal',
    'performanceVal',
    'graphicVal',
    'storyVal',
    'score',    
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