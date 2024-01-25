<template>
    <Navbar />
    <body>
        <InputCadastro/>
    </body>
</template>
<script>
import Navbar from "../components/Navbar.vue"
import InputCadastro from "../components/InputCadastro.vue"

export default {
  name: 'CadastroUsuario',
  components:{
    Navbar,
    InputCadastro
  }
}
</script>
<style scoped>
*{
    font-family: Arial, Helvetica, sans-serif;
}
</style>
