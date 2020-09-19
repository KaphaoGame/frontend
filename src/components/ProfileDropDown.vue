<template>
  <div>
    <b-dropdown id="dropdown-form" ref="dropdown" class="m-2" no-caret variant="secondary">
      <template slot="button-content">
        <b-row>
        <b-col cols="8">
          <span class="profile-font">User Name</span>
        </b-col>
        <b-col>
          <img class="profile-icon" src="../assets/account.png" />
        </b-col>
        </b-row>
      </template>
      <b-dropdown-form>
        <b-form-group label="Email" label-for="dropdown-form-email" @submit.stop.prevent>
          <b-form-input
            id="dropdown-form-email"
            size="sm"
            placeholder="email@example.com"
          ></b-form-input>
        </b-form-group>

        <b-form-group label="Password" label-for="dropdown-form-password">
          <b-form-input
            id="dropdown-form-password"
            type="password"
            size="sm"
            placeholder="Password"
          ></b-form-input>
        </b-form-group>

        <b-form-checkbox class="mb-3">Remember me</b-form-checkbox>
        <b-button variant="primary" size="sm" @click="onClick">Sign In</b-button>
      </b-dropdown-form>
      <b-dropdown-divider></b-dropdown-divider>
      <b-dropdown-item-button><router-link to="/register">New around here? Sign up</router-link></b-dropdown-item-button>
      <b-dropdown-item-button>Forgot Password?</b-dropdown-item-button>
    </b-dropdown>
    
  </div>
</template>

<script>
export default {
  name: 'profileDropDown',
}
</script>

<style>
.profile-background {
  background: #E9ECEF;
}
.profile-icon {
  width: 2.5vw;
  height: 2.5vw;
}
.profile-font {
  font-size: 1.5vw;
  color: #AEB0B2;
}
</style>