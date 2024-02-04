<template>
    <div v-if="infosCert">
        <CertificadoLogado v-if="dono" :infos="infosCert"/>
        <CertificadoDeslogado v-else :infos="infosCert"/>
    </div>
    <div v-else>
        <p>Carregando...</p>
    </div>
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
        api: import.meta.env.VITE_API,
        id_usuario: null,
        infosCert: null,
        dono: null
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

      if(jwt){
        this.token = jwt
        this.getIdUser()
      }else{
        this.dono = false
      }
    },
    getIdUser(){
      const api = this.api
      axios
        .get(api+"get_id", {headers: {Authorization: "Bearer "+this.token}})
        .then((res) => {
            this.id_usuario = res.data.id
            this.reqCert()          
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
    reqCert(){
      const api = this.api

      const dado = {
        id_certificado: this.id_certificado
      }

      axios
      .put(api+"infos_cert", dado)
      .then((res) => {
          this.infosCert = res.data.informacoes[0]
          console.log(this.infosCert) 
      })
      .catch((error) => {
          console.error(error)
      })
    },
    verificaUsuario(){
      const dono = this.infosCert.id_usuario
      const acessor = this.id_usuario
      if(dono === acessor){
        this.dono = true
      }else{
        this.dono = false
      }
    }
  }
}
</script>
<style scoped>
*{
    font-family: Arial, Helvetica, sans-serif;
}
</style>