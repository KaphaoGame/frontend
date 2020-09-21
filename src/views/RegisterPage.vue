<template>
  <div>
    <p>RegisterPage hello</p>
    <!-- register field -->
    <div class="container">
      <div class="row col-12">
        <div class="form-group col-6">
          <label for="firstNameInput">First Name</label>
          <input class="form-control" v-model="user.firstName" />
        </div>

        <div class="form-group col-6">
          <label for="lastNameInput">Last Name</label>
          <input class="form-control" v-model="user.lastName" />
        </div>

        <div class="form-group col-6">
          <label for="emailInput">Email</label>
          <input type="email" class="form-control" v-model="user.email" />
        </div>

        <div class="form-group col-6">
          <label for="usernameInput">Username</label>
          <input class="form-control" v-model="user.userName" />
        </div>

        <div class="form-group col-6">
          <label for="passwordInput">Password</label>
          <input type="password" class="form-control" v-model="user.password" />
        </div>

        <div class="form-group col-6">
          <label for="confirmPasswordInput">ConfirmPassword</label>
          <input type="password" class="form-control" v-model="user.cpassword" />
        </div>

        <div class="form-group col-6">
          <label for="displayName">Display Name</label>
          <input class="form-control" v-model="user.displayName" />
        </div>
      </div>
        <button class="btn btn-primary col-md-2 offset-5" v-on:click="handleSubmit()">Register</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import AccountService from "@/api/AccountService"

const accountService = new AccountService();

export default {
  name: "registerPage",
  data: () => ({
    user: {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      cpassword: null,
      displayName: null,
      userName: null,
    },
    submitted: false,
  }),
  computed: {
    ...mapState("account", ["status"]),
  },
  methods: {
    ...mapActions("account", ["register"]),
    handleSubmit() {
      this.submitted = true;
      this.register(this.user);
      const formdata = new FormData();
      formdata.append("firstName", this.user.firstName)
      formdata.append("lastName", this.user.lastName)
      formdata.append("email", this.user.email)
      formdata.append("password", this.user.password)
      formdata.append("displayName", this.user.displayName)
      formdata.append("userName", this.user.userName)
      
      
      console.log(accountService.getKaphaoGameAccount())
     
    },
  },
};

</script>

<style>
.body {
  background: #495057;
}
.font-style {
  font-size: 3.5vw;
  color: #e8eaec;
}
.text-align-center {
  text-align: center;
}
.font-style-2 {
  font-size: 2.5vw;
  color: #e8eaec;
}
</style>