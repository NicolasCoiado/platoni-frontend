<template>
    <Navbar />
    <body>
        <ViewCertificado :id_certificado="id_certificado"/>
    </body>
</template>
<script>
import Navbar from "../components/Navbar.vue";
import ViewCertificado from "../components/ViewCertificado.vue";
import CryptoJS from "crypto-js";

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
  mounted(){
    this.getIdCert()
  },
  methods:{
    getIdCert(){
      const secret = import.meta.env.VITE_SECRET

      const codigoCert = this.$route.params.codigo
      const decrypted = CryptoJS.AES.decrypt(codigoCert, secret).toString(CryptoJS.enc.Utf8)
      const id = decrypted.substring(13);
      
      this.id_certificado = id
    }
  }
}
</script>
<style>

</style>