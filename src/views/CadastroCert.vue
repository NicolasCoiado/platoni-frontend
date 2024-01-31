<template>
    <Navbar />
    <body>
        <FormCertificado />
    </body>
</template>
<script>
import Navbar from "../components/Navbar.vue"
import FormCertificado from "../components/FormCertificado.vue"

export default {
  name: 'CadastroCert',
  components:{
    Navbar,
    FormCertificado
  }
}
</script>
<style scoped>
*{
    font-family: Arial, Helvetica, sans-serif;
}
</style>
