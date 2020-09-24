<template>
  <div class="container">
    <br />
    <div class="form-group-1 row">
      <div class="col-2">
        <img
          src="../assets/account.png"
          class="image-profile"
          width="100vw"
          height="100vh"
        />
      </div>

      <div class="col-8">
        <div class="align-self-start-username">*Username here*</div>

        <div class="align-self-start-bio">*Enter your long and pointless bio here*</div>
      </div>
    </div>

    <br />

    <div class="form-group-2">
      <div class="realName">Real Name: *Real Name Here*</div>
      <br />
      <div class="displayName">Display Name: *display name here*</div>
      <br />
      <div class="dateOfBirth">Date of Birth: *date of birth here*</div>
      <br />
      <div class="email">Email: *email here*</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.image-profile {
  width: 10vw;
  height: auto;
}

.align-self-start-username {
  font-size: 2vw;
}

.form-group-1 {
  font-size: 1vw;
  color: #e8eaec;
}

.form-group-2 {
  font-size: 2vw;
  color: #e8eaec;
}
</style>