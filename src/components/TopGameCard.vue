<template>
  <div id="backgroundCard" v-bind:style = "{ backgroundColor: '#495057'}">
    <h3>Minecratf</h3>
  </div>
</template>

<script>
export default {
    data() {
      return {
        value: 45,
        max: 100
      }
    },
    methods: {
      randomValue() {
        this.value = Math.random() * this.max
      }
    }
}
</script>

<style>

</style>