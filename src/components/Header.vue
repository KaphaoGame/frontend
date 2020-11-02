<template>
  <div class="header">
    <b-navbar class="container">
      <b-collapse id="nav-collapse" is-nav>
        <b-nav>
          <b-col>
            <router-link to="/">
              <img src="../assets/kaphaogamelogo.png" class="logo" />
            </router-link>
          </b-col>
        </b-nav>
        <b-nav>
          <b-col>
            <router-link to="/" link-classes="font-nav-bar">
              <span class="font-style">Home</span>
            </router-link>
          </b-col>
        </b-nav>
        <b-nav class="ml-auto">
          <b-col>
            <router-link to="/FAQ" link-classes="font-nav-bar">
              <span class="font-style">FAQ</span>
            </router-link>
          </b-col>
        </b-nav>
        <ProfileDropDown />
        <b-nav>
          <b-col>
            <b-nav-item href="search">
              <img src="../assets/search.png" class="logo-search" />
            </b-nav-item>
          </b-col>
        </b-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import ProfileDropDown from "../components/ProfileDropDown";

export default {
  name: "Header",
  components: {
    ProfileDropDown,
  },
};
</script>

<style scoped>
.header {
  background-color: #212529;
}
.font-style {
  color: #ffffff;
  font-size: 1.5vw;
}
.logo {
  width: 4.5vw;
  height: 4.5vw;
}
.font-nav-bar {
  color: #929497;
  font-size: 1.5vw;
}
.logo-search {
  width: 3.5vw;
  height: 3.5vw;
}
</style>