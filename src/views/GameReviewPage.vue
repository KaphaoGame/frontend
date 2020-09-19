<template>
  <div>
    <h1>
      GameReviewPage
    </h1>
    <p>GameName</p>
    <li>Story</li>
    <RatingStar />
    <br>
    <li>Gameplay</li>
    <RatingStar />
    <br>
    <li>Graphics</li>
    <RatingStar />
    <br>
    <li>Performance</li>
    <RatingStar />
    <br>
    <li>Sound</li>
    <RatingStar />
  </div>
  
</template>

<script>
import RatingStar from '../components/GameReviewComponent/RatingForm'
export default {
  components: {
    RatingStar
  }
}
</script>


<style>
</style>