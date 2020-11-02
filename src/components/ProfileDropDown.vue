<template>
  <div>
    <b-dropdown
      id="dropdown-form"
      ref="dropdown"
      class="m-2"
      no-caret
      variant="secondary"
    >
      <template slot="button-content">
        <b-row>
          <b-col cols="8">
            <span class="profile-font">{{ getDisplayName }}</span>
          </b-col>
          <b-col>
            <img class="profile-icon" src="../assets/account.png" />
          </b-col>
        </b-row>
      </template>
      <b-dropdown-form>
        <b-form-group
          label="Username"
          label-for="dropdown-form-email"
          @submit.stop.prevent
        >
          <b-form-input
            id="dropdown-form-email"
            size="sm"
            placeholder="Username"
            v-model="user.username"
          ></b-form-input>
        </b-form-group>

        <b-form-group label="Password" label-for="dropdown-form-password">
          <b-form-input
            id="dropdown-form-password"
            type="password"
            size="sm"
            placeholder="Password"
            v-model="user.password"
          ></b-form-input>
        </b-form-group>

        <router-link to="/">
          <b-button variant="primary" size="sm" v-on:click="handleSubmit()">
            Login
          </b-button>
        </router-link>
      </b-dropdown-form>

      <b-dropdown-divider></b-dropdown-divider>
      
      <b-dropdown-item-button
        ><router-link to="/register"
          >New around here? Sign up</router-link
        ></b-dropdown-item-button
      >
    </b-dropdown>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import AccountService from "@/api/AccountService";

const accountService = new AccountService();

export default {
  name: "profileDropDown",
  data: () => ({
    user: {
      username: null,
      password: null,
    },
    profile: {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      displayName: null,
      userName: null,
    }
  }),
  computed: {
    ...mapState("account", ["status"]),
    ...mapGetters({
      getDisplayName: "account/getDisplayName",
    })
  },
  methods: {
    ...mapActions("account", ["login"]),
    async handleSubmit() {
      this.submitted = true;
      this.login(this.profile);
      const formdata = new FormData();
      formdata.append("username", this.user.username);
      formdata.append("password", this.user.password);
      const profile = await accountService.loginKaphaoGameAccount(formdata);
      this.profile.firstName = profile.firstName;
      this.profile.lastName = profile.lastName;
      this.profile.email = profile.email;
      this.profile.password = profile.password;
      this.profile.displayName = profile.displayName;
      this.profile.userName = profile.userName;
    },
  },
};
</script>

<style>
.profile-background {
  background: #e9ecef;
}
.profile-icon {
  width: 2.5vw;
  height: 2.5vw;
}
.profile-font {
  font-size: 1.5vw;
  color: #aeb0b2;
}
</style>