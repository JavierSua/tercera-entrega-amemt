<template>
  <div id="app">
    <!--  <router-link to="/">Home</router-link>  -->
    <!--  <router-link to="/about">About</router-link>  -->
    <NavBar></NavBar>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import NavBar from './components/NavBar'
import Footer from './components/Footer'
export default {
  components: {
    NavBar,
    Footer,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.carousel-caption{
    background-color: rgb(0, 0, 0, 0.7)
}
.container{
    background-color: #7ad66880;
    padding: 15px;
}

.container-footer{ 
    font-size: 15px;
    background-color: rgb(17, 17, 17);
}
.bg-text{
    background-color: #afc8af!important;
    overflow: auto;
}
.bg-text .col-12{
    font-size: 1.1rem;
}
</style>
