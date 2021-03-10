<template>
<div v-if="isLoggedIn">
      <div class="footer">
      <div class="row" align="center"> 
      <div class="col-4"> 
        <router-link class="nav-link" to="/">       
            <img src="../assets/home_24px_outlined.png" alt="" style="width:50px">
            <p style="color:#2492F4">Home</p>
            </router-link>
      </div>
      <div class="col-4">    
                <router-link class="nav-link" to="">        
    
            <img src="../assets/add_shopping_cart_24px_outlined.png" alt="" style="width:50px">
            <p style="color:#2492F4">Cart</p>
            </router-link>
      </div>
      <div class="col-4">
        <router-link class="nav-link" to="/profile">        
            <img src="../assets/perm_identity_24px_outlined.png" alt="" style="width:50px">
             <p style="color:#2492F4">Account</p></router-link>
      </div>
      </div>
    </div>
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

<style>
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