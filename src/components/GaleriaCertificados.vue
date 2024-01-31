<template>
  <div class="container">
    <div class="galeria">
      <router-link to="/cadastro/certificados" id="btn-add" class="cert"></router-link>
      <Certificado class="cert" v-for="certificado in certificados" :key="certificado.id_certificado" :id_certificado="certificado.id_certificado" :nome_certificado="certificado.nome_certificado" :img="certificado.url"/>
    </div>
  </div>
</template>
<script>
  import axios from "axios";
  import {useStore} from "../store/store.js";
  import Certificado from "./Certificado.vue";
  export default {
    name: 'GaleriaCertificados',
    data(){
      return {
        certificados : []
      }
    },
    components:{
      Certificado
    },
    mounted(){
      this.getId();
    },
    methods:{
      async getId(){
        const api = import.meta.env.VITE_API
        const store = useStore()
        const jwt = store.verToken
        
        axios
        .get(api+"get_id", {headers: {Authorization: "Bearer "+jwt}})
        .then((res) => {
          this.listarCertificados(res.data.id);
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
      async listarCertificados(id_usuario) {
        const api = import.meta.env.VITE_API;
        const store = useStore();
        const jwt = store.verToken;
        const params = {id_usuario: id_usuario};

        axios
        .post(api + "listar_cert", params, {headers: {Authorization: "Bearer " + jwt}})
        .then((res)=>{
          console.log(res.data.msg);
          this.certificados = res.data.certificados;
        })
        .catch((error)=>{
          console.error(error);
        })
      }
    }
  }
</script>
<style scoped>
.container{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.galeria{
  display: flex;
  flex-direction: row;
  justify-content:center;
  flex-wrap:wrap;
}
#btn-add{
  background-color: #717af8;
  background-image: url("../assets/icon+.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  color: #FFFF;
}
.cert{
  background-size: cover;
  background-position: center;
}
@media screen and (min-width: 500px){
  .galeria{
    width: 80vw;
  }
  .cert{
    width: 20em;
    height: 15em;
    margin: 1vw;
  }
}@media screen and (max-width: 499px){
    .galeria{
      width: 95vw;
    }
    .cert{
    width: 20em;
    height: 10em;
    margin: 2vw;
  }
}
  
</style>
    