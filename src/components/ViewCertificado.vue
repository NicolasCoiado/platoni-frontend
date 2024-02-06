<template>
    <div  v-if="infosCert">
        <CertificadoLogado v-if="dono" :infos="infosCert"/>
        <CertificadoDeslogado v-else :infos="infosCert"/>
    </div>
    <div class="view" v-else>
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
        api: import.meta.env.VITE_API,
        infosCert: null,
        id_acessor: null,
        dono: null
    }
  },
  props: {
    id_certificado: String,
    infos: Object
  },
  created(){
    this.main()
  },
  methods: {
    async main(){
      await this.getInfos()
      await this.getIdUser()
      await this.checkDono()
    },
    async getInfos(){
      const api = this.api
      const dado = {
        id_certificado: this.id_certificado
      }
      await axios
      .put(api+"infos_cert", dado)
      .then((res) => {
          this.infosCert = res.data.informacoes[0] 
      })
    },
    async getIdUser() {
      const api = this.api
      const store = useStore()
      const jwt = store.verToken
      if(jwt){
        await axios
        .get(api+"get_id", {headers: {Authorization: "Bearer "+jwt}})
        .then((res) => {
            this.id_acessor = res.data.id        
        })
        .catch((error) => {
            if(error.response.data.msg === "Token inválido."){
                this.$router.push({ path: "/" });
                console.error(error.response.data.msg)
            }else{
                console.error(error.response.data.msg)
            }
        })
      }else{
        this.dono = false
      }
    },
    async checkDono(){
      const id_acessor = this.id_acessor
      const id_dono = this.infosCert.id_usuario
      
      if(id_acessor === id_dono){
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
.view{
  width: 100%;
}
.view p{
  margin-top: 40vw;
  text-align: center;
  font-weight: bold;
  color: #2d00b1;
}
@media screen and (min-width: 400px){
  .view p{
    font-size: 200%;
  }
}
@media screen and (max-width: 400px){
  .view p{
    font-size: 100%;
  }
}
</style>