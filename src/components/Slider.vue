<template>
<div v-if="isLoggedIn" align="center">
        <vue-image-slider :images="imageArray" :intervalVal=4000 :height=700 :width=1100 />    
</div>
</template>
<script> 
  import {mapGetters} from 'vuex'
  import VueImageSlider from 'vue-image-slider'

  export default {
    computed: {
      ...mapGetters({
        isLoggedIn: 'isLoggedIn',
        user: 'user',
        userlist: 'userlist',
      })
    },
    components: {
  VueImageSlider
 },
    data(){
      return {
        imageArray: [
            'https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXB4H7zcUL8kHWZseJueSBsiOAAPGJK63-kQ&usqp=CAU',
        ],
        errors: null
      }
    },
  }
</script>

