<template>
  <nav>
    <router-link class="area-nav" to="/">
      <img class="img-nav" src="../assets/logo.png" alt="Logo Platoni">
    </router-link>
    <div class="area-nav">
      <router-link class="a" to="/">Login</router-link>
      <router-link class="a" to="/">Registrar-se</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
  nav {
    width: 100%;
    background-color: #FFFF;
    box-shadow: 0em 0.5em 1em 0px #a8a8a8;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  img{
    width: 4.5em;
    margin: 0.5em 0em;
  }
  .area-nav {
    margin: 0em 5em;
    width: 50%;
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
  .a:hover{
    box-shadow: 0em 0.3em 0.5em 0px #a8a8a8;
  }
  .a:first-child{
    background-color: #4854ff;
  }
  .a:last-child{
    background-color: #2D00B4;
  }
</style>