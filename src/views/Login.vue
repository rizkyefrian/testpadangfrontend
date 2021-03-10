<template>
<div class="login">
  <div  v-if="isLoggedIn">
  </div>
  <div v-else>
  <div class="row justify-content-md-center">
    <div class="col-md-6">
      <div class="card" style="border:none;">
        <div align="center">        
            <img src="../assets/logoapps.png" alt="">
        </div>
        <div class="card-body">
          <div class="alert alert-danger" v-for="(error, index) in errors" :key="index">
            {{ error[0] }}
          </div>
          <form @submit.prevent="userLogin">
            <div class="form-group">
              <label for="email">Email</label>
              <input v-model="form.email" type="email" class="form-control" >
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input v-model='form.password' type="password" class="form-control">				<i id="show-password" class="fa fa-eye"></i>
            </div>
            <div class="row">
            <div class="col-6">
            <p style="color:#2492F4;">Forgot Password</p>
            </div>
            <div class="col-6">
            <button type="submit" class="btn btn-primary" style="float: right;">Log In</button>
            </div>
            </div><br>
            <div align="center">
                Don't have an account?<br>
              <router-link class="nav-link" to="/register"><p style="color:#2492F4;">Register</p></router-link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  </div>
</div>

</template>
<script>  
  import { mapGetters } from 'vuex'

  export default {  
    data(){
      return {
        form: {
          email: '',
          password: '',
        },
        errors: null
      }
    },
    computed: {
      ...mapGetters({ 
        isLoggedIn: 'isLoggedIn',
        user: 'user',
      })
    },
    methods: {
      userLogin () { 
      this.$store.dispatch('login', this.form)
      .then(response => {
        console.log(response)
  	  this.$router.push({name:'Home'})
      }).catch(error => {
        this.errors = error.response.data.errors
        // this.error = alert("asd")
      })
    } 
    }
  }
</script>

<style scoped>

.login{
	width: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, 25%);
}

</style>