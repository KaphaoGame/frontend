<template>
  <div class="header">
      <b-navbar class="container">
        <router-link to="/"> 
          <img src="../assets/kaphaogamelogo.png" class="logo"/>
        </router-link>
        <b-collapse id="nav-collapse" is-nav>
          <b-nav>
            <b-col>
              <b-nav-item href="/" link-classes="font-nav-bar">Home</b-nav-item>
            </b-col>
          </b-nav>
          <b-nav class="ml-auto">
            <b-col>
              <b-nav-item href="/FAQ" link-classes="font-nav-bar">FAQ</b-nav-item>
            </b-col>
          </b-nav>
          <ProfileDropDown />
          <router-link to="/search"> 
            <img src="../assets/search.png" class="logo-search" />
          </router-link>
        </b-collapse>     
      </b-navbar>
  </div>
</template>

<script>
import ProfileDropDown from '../components/ProfileDropDown'

export default {
  name: 'Header',
  components: {
    ProfileDropDown,
  }
}

</script>

<style scoped>
.header{
  background-color: #212529;
}
.font-style {
  color: #ffffff;
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