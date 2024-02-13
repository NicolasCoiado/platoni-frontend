<template>
    <Navbar />
    <body>
        <ViewCertificado :id_certificado="id_certificado"/>
    </body>
</template>
<script>
import Navbar from "../components/Navbar.vue";
import ViewCertificado from "../components/ViewCertificado.vue";

export default {
  name: 'PageCert',
  components:{
    Navbar,
    ViewCertificado
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