<template>
  <div class="container">
    <br />
    <div v-if="editStatus === false">
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
          <br />
          <br />
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
      
      <div v-if="deleteStatus === false">
        <b-button @click="editPro" variant="warning">Edit Profile</b-button>
        <b-button @click="deletePro" variant="danger"> Delete Profile </b-button>
      </div>
      <div v-else>
        <b-button @click="onDeleteCancel">Cancel</b-button>
        <b-button @click="onDeleteSubmit" variant="danger">Confirm</b-button>
      </div>
      <br />
      <br />
    </div>

    <div v-else align="center" id="edit-card">
      <div>
        <img
          src="../assets/account.png"
          class="image-profile"
          width="100vw"
          height="100vh"
        />
      </div>
        <span class="form-group-2"> Username : {{ user.userName}} </span>
      <br />
        <span class="form-group-2"> Firstname </span>
      <br />
      <input
        v-model="user.firstName"
        :placeholder="user.firstName"
      />
      <br />
        <span class="form-group-2"> Lastname </span>
      <br />
      <input
        v-model="user.lastName"
        :placeholder="user.lastName"
      />
      <br />
        <span class="form-group-2"> Display Name </span>
      <br />
      <input
        v-model.number="user.displayName"
        :placeholder="user.displayName"
      />
      <br />
        <span class="form-group-2"> Email </span>
      <br />
      <input
        v-model.number="user.email"
        :placeholder="user.email"
      />
      <br />
      <br />
      <div>
        <b-button @click="onEditCancel">Cancel</b-button>
        <b-button variant="primary" @click="onEditSubmit">Confirm</b-button>
      </div>
      <br />
      <br />
    </div>
    <br />
  </div>
</template>

<script>
  import { mapState, mapActions, mapGetters } from "vuex";
  import AccountService from "@/api/AccountService"

  const accountService = new AccountService();

  export default {
    name: "Profile",
    data() {
      return {
        user: [],
        editStatus: false,
        deleteStatus: false,
      }
    },
    computed: {
    ...mapState("account", ["status"]),
    ...mapGetters({
      getFirstName: "account/getFirstName",
      getLastName: "account/getLastName",
      getEmail: "account/getEmail",
      getPassword: "account/getPassword",
      getDisplayName: "account/getDisplayName",
      getUserName: "account/getUserName",
    })
    },
    async created() {
      this.setUser()
    },
    methods: {
      ...mapActions("account", ["login"]),
      setUser() {
        this.user = {
          firstName: this.getFirstName,
          lastName: this.getLastName,
          email: this.getEmail,
          password: this.getPassword,
          displayName: this.getDisplayName,
          userName: this.getUserName,
        }
      },
      editPro() {
        this.editStatus = true
      },
      onEditCancel() {
        this.editStatus = false
        this.setUser()
      },
      onEditSubmit() {
        const formdata = new FormData();
        formdata.append("firstName", this.user.firstName)
        formdata.append("lastName", this.user.lastName)
        formdata.append("email", this.user.email)
        formdata.append("password", this.user.password)
        formdata.append("displayName", this.user.displayName)
        formdata.append("userName", this.user.userName)

        this.onEditCancel()
        accountService.createKaphaoGameAccount(formdata)
        // Can't refresh because the API didn't finish sending its data before refreshing the page
        // window.location.reload()
      },
      deletePro() {
        this.deleteStatus = true
      },
      onDeleteCancel() {
        this.deleteStatus = false
      },
      onDeleteSubmit() {
        accountService.deleteKaphaoGameAccount(this.getUserName)
        this.deleteStatus = false
        window.location.reload()
      }
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
#edit-card {
  background:slategrey;
}
</style>