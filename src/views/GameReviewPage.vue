<template>
  <div>
    <h1>GameReviewPage</h1>
    <p>Genshin Impact</p>
    <img src="https://i.ytimg.com/vi/S1WmmsEXtyE/maxresdefault.jpg"/>
    

    <label>Story</label>
    <RatingStar />
    <br />
    <label>Gameplay</label>
    <RatingStar />
    <br />
    <label>Graphics</label>
    <RatingStar />
    <br />
    <label>Performance</label>
    <RatingStar />
    <br />
    <label>Sound</label>
    <RatingStar />

    <br />
      
  <div class="mb-2">
    <b-avatar src="https://placekitten.com/300/300" size="6rem"></b-avatar>
    <div>
      <b-form-textarea
        id="textarea"
        v-model="text"
        placeholder="Enter something..."
        rows="3"
        max-rows="6"
      ></b-form-textarea>

      <pre class="mt-3 mb-0">{{ text }}</pre>
    </div>
    <div class="d-flex flex-row-reverse">
      <b-button variant="primary">Primary</b-button>
    </div>
    
  </div>
  </div>
  
  
</template>
    

<script>
import RatingStar from "../components/GameReviewComponent/RatingForm";
export default {
  components: {
    RatingStar,
  },
  data() {
    return {
      mainProps: {
        blank: true,
        blankColor: "#777",
        width: 75,
        height: 75,
        class: "m1",
      },
    };
  },
};
</script>


<style>

</style>