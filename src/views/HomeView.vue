<template>
  <div class="areas">
    <FormLogin/>
    <ImgLogin/>
  </div>
</template>
<script>
import FormLogin from "../components/FormLogin.vue"
import ImgLogin from "../components/ImgLogin.vue"

export default {
  name: 'HomeView',
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
.areas{
  display: flex;
  justify-content: center;
  width: 100%;
}
</style>
  