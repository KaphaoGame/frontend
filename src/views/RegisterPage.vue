<template>
  <div>
    <p>RegisterPage hello</p>
    <!-- register field -->
    <div class="container">
      <div class="row col-12">
        <div class="form-group col-6">
          <label for="emailInput">Email</label>
          <input type="email" class="form-control" />
        </div>

        <div class="form-group col-6">
          <label for="usernameInput">Username</label>
          <input type="username" class="form-control" />
        </div>

        <div class="form-group col-6">
          <label for="passwordInput">Password</label>
          <input type="password" class="form-control" />
        </div>

        <div class="form-group col-6">
          <label for="confirmPasswordInput">ConfirmPassword</label>
          <input type="comfirmPassword" class="form-control" />
        </div>

        <div class="form-group col-6">
          <label for="displayName">Display Name</label>
          <input type="displayName" class="form-control" />
        </div>

      </div>
      <div class="btn btn-primary col-md-2 offset-5">Register</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.body {
  background: #495057;
}
.font-style {
  font-size: 3.5vw;
  color: #E8EAEC;
}
.text-align-center {
  text-align: center;
}
.font-style-2 {
  font-size: 2.5vw;
  color: #E8EAEC;
}
</style>