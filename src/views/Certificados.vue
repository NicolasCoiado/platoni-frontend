<template>
    <Navbar />
    <body>
      <GaleriaCertificados />
    </body>
  </template>
  <script>
  import Navbar from "../components/Navbar.vue";
  import GaleriaCertificados from "../components/GaleriaCertificados.vue";
  
  export default {
    name: 'Certificados',
    components:{
      Navbar,
      GaleriaCertificados
    }
  }
  </script>
  <style scoped>
  </style>
    