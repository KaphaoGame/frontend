<template>
  <div>
    <p>RegisterPage hello</p>
    <!-- register field -->
    <div class="container">
      <div class="row col-12">

        <div class="form-group col-6">
          <label for="firstNameInput">First Name</label>
          <input class="form-control" v-model="form.firstName" />
        </div>

        <div class="form-group col-6">
          <label for="lastNameInput">Last Name</label>
          <input class="form-control" v-model="form.lastName" />
        </div>

        <div class="form-group col-6">
          <label for="emailInput">Email</label>
          <input type="email" class="form-control" v-model="form.email" />
        </div>

        <div class="form-group col-6">
          <label for="usernameInput">Username</label>
          <input class="form-control" v-model="form.userName" />
        </div>

        <div class="form-group col-6">
          <label for="passwordInput">Password</label>
          <input type="password" class="form-control" v-model="form.password" />
        </div>

        <div class="form-group col-6">
          <label for="confirmPasswordInput">ConfirmPassword</label>
          <input type="password" class="form-control" v-model="form.cpassword" />
        </div>

        <div class="form-group col-6">
          <label for="displayName">Display Name</label>
          <input class="form-control" v-model="form.displayName"/>
        </div>

      </div>
      <button class="btn btn-primary col-md-2 offset-5" v-on:click="onSubmit()">Register</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'registerPage',
  data: () => ({
    form: {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      cpassword: null,
      displayName: null,
      userName: null,
    }
  }),
  methods: {
    onSubmit() {
      alert(JSON.stringify(this.form))
    },
  }

};
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