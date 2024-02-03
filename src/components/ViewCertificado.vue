<template>
    <CertificadoLogado v-if="token" :id_certificado="id_certificado" :token="token"/>
    <CertificadoDeslogado v-else :id_certificado="id_certificado"/>
</template>
<script>
import CertificadoLogado from "./CertificadoLogado.vue";
import CertificadoDeslogado from "./CertificadoDeslogado.vue";

import {useStore} from "../store/store.js";
import axios from "axios";

export default {
  name: 'ViewCertificado',
  components: {
    CertificadoLogado,
    CertificadoDeslogado
  },
  data(){
    return{
        token: null,
        id_usuario: null,
        api: import.meta.env.VITE_API
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
      const api = this.api
      const store = useStore()
      const jwt = store.verToken
      this.token = jwt
      
      axios
      .get(api+"get_id", {headers: {Authorization: "Bearer "+this.token}})
      .then((res) => {
          this.id_usuario = res.data.id
          this.verificaUsuario()
      })
      .catch((error) => {
          if(error.response.data.msg === "Token inválido."){
              this.$router.push({ path: "/" });
              console.error(error.response.data.msg)
          }else{
              console.error(error.response.data.msg)
          }
      })
    },
    verificaUsuario(){
      const api = this.api
      const dado = {
        id_certificado: this.id_certificado
      }
      axios
      .put(api+"infos_cert", dado, {headers: {Authorization: "Bearer "+this.token}})
      .then((res) => {
          console.log(res)
      })
      .catch((error) => {
          console.log(error)
      })
    }
  }
}
</script>
<style scoped>
*{
    font-family: Arial, Helvetica, sans-serif;
}
</style>