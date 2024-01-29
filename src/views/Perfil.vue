<template>
    <Navbar />
    <body>
        <InfosPerfil />
    </body>
</template>
<script>
import Navbar from "../components/Navbar.vue";
import InfosPerfil from "../components/InfosPerfil.vue";

export default {
    name: 'Perfil',
    components:{
        Navbar,
        InfosPerfil
    }
}
</script>
<style>

</style>