<template>
    <CertificadoLogado v-if="token" :id_certificado="id_certificado" :token="token"/>
    <CertificadoDeslogado v-else :id_certificado="id_certificado"/>
</template>
<script>
import CertificadoLogado from "./CertificadoLogado.vue";
import CertificadoDeslogado from "./CertificadoDeslogado.vue";

import {useStore} from "../store/store.js";

export default {
  name: 'ViewCertificado',
  components: {
    CertificadoLogado,
    CertificadoDeslogado
  },
  data(){
    return{
        token: null,
    }
  },
  props: {
    id_certificado: String
  },
  created(){
    this.verificaToken()
  },
  methods:{
    verificaToken(){
        const store = useStore()
        const jwt = store.verToken
        this.token = jwt
    }
  }
}
</script>
<style scoped>
*{
    font-family: Arial, Helvetica, sans-serif;
}
</style>