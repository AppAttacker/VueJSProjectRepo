<template>
  <!-- <div id="app"> -->
    <b-container fluid>
      <b-row cols="1" class=" header text-center">
        <b-col>header content</b-col>
        <b-col>Sub header</b-col>
      </b-row>

      <b-row class="menu">
        <b-navbar type="light" variant="faded">
          <b-navbar-nav>
            <b-nav-item href="#"><router-link to="/about">About</router-link></b-nav-item>
            <b-nav-item href="#"><router-link to="/skill/kumar">Skills</router-link></b-nav-item>
            <b-nav-item href="#"><router-link to="/logo">Vue Logo</router-link></b-nav-item>
          </b-navbar-nav>
        </b-navbar>
        <!-- <b-col md="auto"><router-link to="/about">About</router-link></b-col>
        <b-col md="auto"><router-link to="/skill/kumar">Skills</router-link></b-col>
        <b-col md="auto"><router-link to="/logo">Vue Logo</router-link></b-col> -->
      </b-row>
    <b-row class="content">
      <b-col cols="2" class="sidebar">Side bar</b-col>
      <b-col>
        <b-row cols="1">
          <b-col>
            <b-row class="activity">
              <b-col>
                Recent Activities..
              </b-col>
            </b-row>
          </b-col>
          <b-col class="view-area text-center">
            <router-view/>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    </b-container>
  <!-- </div> -->
</template>

<script>
import Skills from './components/Skills';
import About from './components/About';
import Logo from './components/VueLogo'
export default {
  name: 'App',
  components: {
    Skills,
    About,
    Logo
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
.header {
background-color: rgb(173, 248, 155);
}
.sidebar {
  /* background-color: rgb(209, 198, 219); */
}
.activity {
background-color:rgb(252, 206, 153);
}
.menu {
background-color:rgb(252, 177, 239);
}
.view-area {
/* background-color:palegoldenrod; */
}
.emp-comp {
  background-color: firebrick;
  border-radius: 5px;
  margin-top: 5px;
  margin-left: 5px;
  padding: 8px;
}
b-row {
  border-radius: 10px;
  margin-top: 5px;
  margin-left: 5px;
  padding: 8px;
}
</style>
