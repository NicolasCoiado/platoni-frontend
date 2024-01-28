<template>
    <p :class="classe === 'erro' ? 'erro' : classe === 'sucesso' ? 'sucesso' : ''">{{msg}}</p>
</template>
<script>
    export default {
        name: "Mensagem",
        props: {
            msg: String,
            classe: String
        }
    }
</script>
<style scoped>
    .erro{
        font-style: italic;
        color:brown;
    }
    .sucesso{
        color:#2D00B4;
        text-align: center;
    }
    @media screen and (min-width: 1000px){
        .sucesso{
            font-size: 150%;
            margin: 8% 10%;
        }
    }
    @media screen and (max-width: 999px){
        .sucesso{
            font-size: 110%;
            margin: 15% 5%;
        }
    }

</style>