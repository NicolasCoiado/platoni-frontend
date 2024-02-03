<template>
    <div :style="{ 'background-image': 'url(' + img + ')' }">
        <router-link  :to="{ name: 'PageCert', params: { codigo: this.codigo }}" class="front">
            <h1>{{ nome_certificado }}</h1>
        </router-link>
    </div>
</template>
  
<script>
import CryptoJS from 'crypto-js'

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
    },
    created(){
        this.definirRota();
    },
    methods: {
        definirRota(){
            const agora = new Date().getTime();
            const string = agora.toString();
            const substring = string.substring(0, 13);
            
            const secret = import.meta.env.VITE_SECRET;

            const codp1 = substring + this.id_certificado;
            const codp2 = CryptoJS.AES.encrypt(codp1, secret).toString();
            
            this.codigo = codp2;
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
  