<template>
  <div id="app">
    <Navbar/>
    <div class="container pt-4">
      <router-view/>
    </div>
      <Footer/>

  </div>
</template>
<script> 
  import Navbar from '@/components/Navbar.vue'
  import Footer from '@/components/Footer.vue'
  
  export default { 
    components: {
      Navbar,
      Footer
    }
  }
</script>
<style>
  #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; 
  color: #2c3e50;
  } 
  #app .navbar-nav a{ 
  color: #2c3e50;
  cursor: pointer;
  }
  #app .navbar-nav a.router-link-exact-active {
  color: #42b983;
  }
  .container{
    position:relative;
}
 .footer{
		bottom: 0;
    width: 100%;
    position: fixed;
    height:100px;
    line-height:50px;
    background: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
    box-shadow: 0px -2px 5px rgba(0, 0, 0, 0.25);
  } 
 
</style>