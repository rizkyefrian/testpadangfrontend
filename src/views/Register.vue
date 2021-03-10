<template>
  <div class="row justify-content-md-center">
    <div class="col-md-6">
      <div class="card">
        <div class="card-header">
          Register
        </div>
        <div class="card-body">
          <div class="alert alert-danger" v-for="(error, index) in errors" :key="index">
            {{ error[0] }}
          </div>
          <form @submit.prevent="register">
             <div class="form-group">
              <label for="firstname">Firstname</label>
              <input v-model="firstname" type="text" class="form-control">
            </div>
             <div class="form-group">
              <label for="lastname">Lastname</label>
              <input v-model="lastname" type="text" class="form-control" >
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input v-model="email" type="email" class="form-control">
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input v-model="password" type="password" class="form-control" ref="password">
            </div>
            <div class="form-group">
              <label for="confirmpassword">Confirm Password</label>
              <input v-model="confirmpassword" type="password" class="form-control"  v-validate="'required|target:password'">
              <span class="glyphicon glyphicon-eye-open"></span>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmpassword: "",
      errors: null
    };
  },
  methods: {
    register: function () {
      let data = {
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        password: this.password,
      };
      this.$store
        .dispatch("register", data)
        .then(response => {
          console.log(response)
          alert("Congratulations! Registration is succesful")
          this.$router.push({
            name: 'Login'
          })
        }).catch(error => {
          alert("Oops! Registration failed, Please check your data.")
          this.errors = error.response.data.errors
        })
    }
  }
};
</script>

