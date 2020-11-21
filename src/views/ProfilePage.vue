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
        <div class="align-self-start-username">{{ getUserName }}</div>

        <!-- <div class="align-self-start-bio">*Enter your long and pointless bio here*</div> -->
      </div>
    </div>

    <br />

    <div class="form-group-2">
      <div class="realName">Real Name: {{ getFirstName }} {{getLastName}}</div>
      <br />
      <div class="displayName">Display Name: {{ getDisplayName }}</div>
      <br />
      <div class="email">Email: {{ getEmail }}</div>
      <br />
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions, mapGetters } from "vuex";

  export default {
    name: "Profile",
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
    }),
    computed: {
    ...mapState("account", ["status"]),
    ...mapGetters({
      getFirstName: "account/getFirstName",
      getLastName: "account/getLastName",
      getEmail: "account/getEmail",
      getDisplayName: "account/getDisplayName",
      getUserName: "account/getUserName",
    })
    },
    methods: {
      ...mapActions("account", ["login"]),
    },
  };
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