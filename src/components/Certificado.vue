<template>
    <div :style="{ 'background-image': 'url(' + img + ')' }">
        <router-link  :to="{ name: 'PageCert', params: { id: this.id_certificado }}" class="front">
            <h1>{{ nome_certificado }}</h1>
        </router-link>
    </div>
</template>
  
<script>
export default {
    name:   "Certificado",
    data(){
        return{
            nome: null,
            codigo: null
        }
    },
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
  