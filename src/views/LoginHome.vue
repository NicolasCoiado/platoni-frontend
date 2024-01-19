<template>
  <body class="areas">
    <FormLogin/>
    <ImgLogin class="img-login"/>
  </body>
</template>
<script>
import FormLogin from "../components/FormLogin.vue"
import ImgLogin from "../components/ImgLogin.vue"

export default {
  name: 'LoginHome',
  components:{
    FormLogin,
    ImgLogin
  }
}
</script>
<style scoped>
*{
  font-family: Arial, Helvetica, sans-serif;
}
@media screen and (min-width: 850px){
  .areas{
    display: flex;
    justify-content: center;
    width: 100%;
  }
}
@media screen and (max-width: 849px){
  .img-login{
    display: none;
  }
}

</style>
  