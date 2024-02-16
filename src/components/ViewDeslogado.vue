<template>
    <div  v-if="infosCert">
      <CertificadoDeslogado :infos="infosCert"/>
    </div>
    <div class="view" v-else>
        <p>Carregando...</p>
    </div>
</template>
<script>
import CertificadoDeslogado from "./CertificadoDeslogado.vue";
import axios from "axios";

export default {
  name: 'ViewCertificado',
  components: {
    CertificadoDeslogado
  },
  data(){
    return{
        api: import.meta.env.VITE_API,
        infosCert: null,
    }
  },
  props: {
    id_certificado: String,
  },
  created(){
    this.getInfos()
  },
  methods: {
    getInfos(){
      const api = this.api
      const dado = {
        id_certificado: this.id_certificado
      }
      axios
      .put(api+"infos_cert", dado)
      .then((res) => {
          this.infosCert = res.data.informacoes[0] 
      })
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