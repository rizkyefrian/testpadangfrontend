<template>
<div>
<div  v-if="isLoggedIn">
  <div class="row justify-content-md-center" >
    <input type="search" size="120"><button>Search</button><br>
            <Slider/>
  </div>  
        <Menu/>
</div>
<div v-else>
<Login/>
</div>
</div>
</template>

<script>  
  import Slider from '@/components/Slider.vue'
  import Menu from '@/components/Menu.vue'
  import Login from './Login.vue'
  import { mapGetters } from 'vuex'

  export default {  
components: {
  Slider,
  Menu,
  Login
 },
    computed: {
      ...mapGetters({ 
        isLoggedIn: 'isLoggedIn',
        user: 'user',
      })
    },
  }

  
</script>

<style scoped>

.container{
	
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

</style>