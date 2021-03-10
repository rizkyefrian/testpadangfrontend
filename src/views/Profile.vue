<template>
  <div align="center">
    <h1><b>My Account</b></h1>
        <div class="circular-image">
        </div>
        <div class="card-body">
          <template v-if="isLoggedIn">
            <h5 class="card-title">{{user.name}}</h5>
            <p class="card-text">{{user.email}}</p>
          </template>
        </div>
      </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  
  export default {
    computed: {
      ...mapGetters({ 
        isLoggedIn: 'isLoggedIn',
        user: 'user',
      })
    },
  }
</script>

<style>
.circular-image {
     width: 150px;
     height: 150px;
     overflow: hidden;
     border-radius: 50%; 
     background: #C4C4C4;
     background-image: url('../assets/perm_identity_24px_outlined.png');
      background-position: center; 
  background-repeat: no-repeat; 
  background-size: cover;
}
</style>
