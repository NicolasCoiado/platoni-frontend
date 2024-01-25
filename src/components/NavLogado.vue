<template>
  <router-link class="area-nav" to="/">
    <img class="img-nav" src="../assets/logo.png" alt="Logo Platoni">
  </router-link>
  <div class="area-nav">
    <router-link class="a" to="/certificados">Meus certificados</router-link>
    <router-link class="a" to="/registrar">Minha conta</router-link>
  </div>
</template>

<script>
export default {
  name: 'NavLogado'
}
</script>

<style scoped>
  .a:hover{
    box-shadow: 0em 0.3em 0.5em 0px #a8a8a8;
  }
  .a:first-child{
    background-color: #4854ff;
  }
  .a:last-child{
    background-color: #2D00B4;
  }

  @media screen and (min-width: 850px){
  img{
    width: 4.5em;
    margin: 0.5em 0em;
  }
  .area-nav:first-child {
    margin: 0em 5em;
    width: 10%;
  }
  .area-nav:last-child{
    text-align: end;
  }
  .a{
    font-family: Arial, Tahoma, sans-serif;
    color: #FFFF;
    text-decoration: none;
    font-weight: bold;
    margin: 0em 1em;
    padding: 1em;
    border-radius: 1.4em;
  }
}
@media screen and (max-width: 849px){
  img{
    width: 3em;
  }
  .area-nav:first-child {
    margin: 0.5em 1em;
    width: 10%;
  }
  .area-nav:last-child{
    text-align: end;
    font-size: 0.8em;
    margin: 0.5em 1em;
  }
  .a{
    font-size: 80%;
    font-family: Arial, Tahoma, sans-serif;
    color: #FFFF;
    text-decoration: none;
    font-weight: bold;
    margin: 0em 0.1em;
    padding: 0.5em;
    border-radius: 1.4em;
  }
}
</style>