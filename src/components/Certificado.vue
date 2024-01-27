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
        color: #FFFF;
        font-size: 150%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .front:hover{
        opacity: 0;
    }
    h1{
        margin: 5%;
    }
</style>
  