<template>
<div v-if="isLoggedIn">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
   <div align="center">        
   <router-link class="navbar-brand" to="/">
            <img src="../assets/logoapps.png" alt="">
    </router-link>
    </div>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
            <router-link class="nav-link" to="/userlist">User List</router-link>
        </li>
        <li class="nav-item">
            <a class="nav-link" @click="logout">Logout</a>
        </li>
      </ul>
    </div>
  </nav>
</div>
</template>
<script> 
  import {mapGetters} from 'vuex'
  
  export default {
    computed: {
      ...mapGetters({
        isLoggedIn: 'isLoggedIn',
        user: 'user',
        userlist: 'userlist',
      })
    },
    methods: {
        logout: function() {
        this.$store.dispatch("logout").then(() => {
        this.$router.push("/login");
        });
        }
    }
  }
</script>

