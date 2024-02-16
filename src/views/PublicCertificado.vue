<template>
  <Navbar />
  <body>
      <ViewDeslogado :id_certificado="id_certificado"/>
  </body>
</template>
<script>
import Navbar from "../components/Navbar.vue";
import ViewDeslogado from "../components/ViewDeslogado.vue";

export default {
name: 'PubliCert',
components:{
  Navbar,
  ViewDeslogado
},
data(){
  return{
    id_certificado: null
  }
},
created(){
  this.getIdCert()
},
methods:{
  getIdCert(){
    const id = this.$route.params.id
    this.id_certificado = id
  }
}
}
</script>
<style>

</style>