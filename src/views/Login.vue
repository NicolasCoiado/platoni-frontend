<template>
  <Navbar />
  <body class="areas">
    <FormLogin/>
    <ImgLogin class="img-login"/>
  </body>
</template>
<script>
import Navbar from "../components/Navbar.vue"
import FormLogin from "../components/FormLogin.vue"
import ImgLogin from "../components/ImgLogin.vue"

export default {
  name: 'LoginHome',
  components:{
    Navbar,
    FormLogin,
    ImgLogin
  }
}
</script>
<style scoped>
*{
  font-family: Arial, Helvetica, sans-serif;
}
@media screen and (min-width: 1000px){
  .areas{
    display: flex;
    justify-content: center;
    width: 100%;
  }
}
@media screen and (max-width: 999px){
  .img-login{
    display: none;
  }
}

</style>
  