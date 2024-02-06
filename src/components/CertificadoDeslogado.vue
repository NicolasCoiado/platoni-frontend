<template>
  <div class="full">
    <div v-if="conteudo" >
      <img @click="altenarConteudo" class="imagem" :src="infos.url" alt="Certificado" />
      <p>Clique na imagem para exibir mais informações.</p>
    </div>
    <div class="infos" v-else>
      <h1>{{ infos.nome_certificado }}</h1>
      <h2 v-if="infos.emissor">Emissor: {{ infos.emissor }}</h2>
      <p v-if="infos.descricao">{{ infos.descricao }}</p>
      <a target="_blank" class="btn-full" :href="infos.url">Certificado full screen</a>
      <button class="btn-fechar" @click="altenarConteudo">Fechar informações</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CertificadoDeslogado',
  data(){
    return{
      conteudo: true
    }
  },
  created(){
    this.checkNull()
  },
  methods:{
    altenarConteudo(){
      this.conteudo = !this.conteudo
    },
    checkNull(){
      if(this.infos.emissor == "null"){
        this.infos.emissor=""
      }
      if(this.infos.descricao == "null"){
        this.infos.descricao = ""
      }
    }
  },
  props: {
    infos: Object
  }
}
</script>
<style scoped>
.full{
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.infos{
  background-color: #FFFF;
  width: 70%;
  margin-top: 5%;
  margin-bottom: 5%;
  text-align: center;
}
.full div{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.infos h1{
  font-weight: bold;
  color: #4854ff;
}
.infos h2{
  color: #2D00B4;
}
.btn-full{
  text-decoration: none;
  background-color: #2D00B4;
  color: #FFFF;
  font-weight: bold;
  border-radius: 2em;
}
.btn-fechar{
  background-color: #ff2e2e;
  border: none;
  border-radius: 2em;
  font-weight: bold;
  color: #FFFF;
}
@media screen and (min-width: 850px){
  .full{
    margin-top: 2vw;
  }
  .imagem{
    width: 70%;
    margin-bottom: 1%;
  }
  .infos h1{
    font-size: 220%;
    margin-bottom: 3%;
  }
  .infos h2{
    font-size: 140%;
    margin-bottom: 5%;
  }
  .infos p{
    font-size: 120%;
    margin-bottom: 3%;
  }
  .btn-full{
    font-size: 1.3em;
    border-radius: 2em;
    width: 50%;
    padding: 1% 0%;
    margin-top: 3%;
    margin-bottom: 3%;
  }
  .btn-fechar{
    width: 50%;
    font-size: 1.5em;
  }
}
@media screen and (max-width: 849px){
  .full{
    margin-top: 10vw;
    text-align: center;
  }
  .imagem{
    width: 100%;
    margin-bottom: 5%;
  }
  .infos h1{
    font-size: 100%;
    margin-bottom: 5%;
  }
  .infos h2{
    font-size: 100%;
    margin-bottom: 10%;
  }
  .infos p{
    margin-bottom: 10%;
  }
  .btn-full{
    font-size: 100%;
    border-radius: 2em;
    width: 100%;
    padding: 2% 0%;
    margin-top: 3%;
    margin-bottom: 3%;
  }
  .btn-fechar{
    width: 100%;
    font-size: 1.2em;
  }
}
</style>