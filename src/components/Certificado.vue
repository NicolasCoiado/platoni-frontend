<template>
    <div :style="{ 'background-image': 'url(' + img + ')' }">
        <div class="front">
            <h1>{{ nome_certificado }}</h1>
        </div>
    </div>
</template>
  
<script>
  export default {
    name: "Certificado",
    props: {
      id_certificado: Number,
      nome_certificado: String,
      img: String
    },
    data(){
        return{

        }
    },
    mounted(){
        this.definirRota()
    },
    methods:{
        definirRota(){
            let certificado
            certificado = this.nome_certificado.substring(0, 10)
            certificado = certificado.toLowerCase();
            console.log(certificado)
        }
    }
  };
</script>
<style scoped>
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
    h1{
        margin: 5%;
    }
</style>
  