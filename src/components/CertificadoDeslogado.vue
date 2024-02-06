<template>
  <div class="img" :style="{ 'background-image': 'url(' + infos.url + ')' }">
    <div class="front">
      <h1>{{infos.nome}}</h1>
    </div>
    
  </div>
</template>
<script>
export default {
  name: 'CertificadoDeslogado',
  created(){
    console.log(this.infos)
  },
  data(){
    return{
    }
  },
  props: {
    infos: Object
  }
}
</script>
<style scoped>
@media screen and (min-width: 850px){
  .img{
    width: 100%;
    height: 80vh;
    margin-top: 3vh;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }
  .front{
        background-color: #1200b4fa;
        opacity: 1;
        width: 100%;
        height: 100%;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: bold;
        text-decoration: none;
        color: #FFFF;
        font-size: 150%;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
    }
    .front:hover{
        opacity: 1;
    }
}
@media screen and (max-width: 849px){
  .img{
    width: 100%;
    height: 80vh;
    margin-top: 4vh;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
}
</style>