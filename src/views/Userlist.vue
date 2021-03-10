<template >
<div align="center">
  <div class="card">
    <div class="row">
      <div class="col-4">
        <div class="circular-image">
        </div></div>
      <div class="col-6 mr-auto">
      <p>User1</p>
      <p>email</p>
      </div>
    </div>
  </div><br/>
  <div class="card">
    <div class="row">
      <div class="col-4">
        <div class="circular-image">
        </div></div>
      <div class="col-6 mr-auto">
      <p>User2</p>
      <p>email</p>
      </div>
    </div>
  </div><br/>
  <div class="card">
    <div class="row">
      <div class="col-4">
        <div class="circular-image">
        </div></div>
      <div class="col-6 mr-auto">
      <p>User3</p>
      <p>email</p>
      </div>
    </div>
  </div>
</div>

</template>

<script>
export default {
  data(){
    return{
      
    }
  }
}
</script>

<style>
.card{
    /* position: absolute; */
  /* width: 367px; */
  /* height: 96px; */
  /* left: 23px; */
  /* top: 128px; */
  padding: 30px;
  background: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
}
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