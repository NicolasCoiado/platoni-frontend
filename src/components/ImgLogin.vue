<template>
    <div class="area-img">
      <div class="conteudo">
        <h1>Não tem conta ainda?</h1>
        <router-link class="btn-registrar" to="/registrar">Registrar-se</router-link>
      </div>
    </div>
</template>
<script>
  export default {
    name: 'ImgLogin',
  }
</script>
<style scoped>
h1{
  color: #FFFF;
  font-size: 2em;
  margin-bottom: 1em;
}
.btn-registrar{
  background-color: #FFFF;
  color: #1200b4bb;
  font-size: 1.5em;
  font-weight: bold;
  text-decoration:none;
  border-radius: 1.4em;
  width: 70%;
  padding: 1em;
  text-align: center;
}
.area-img{
  box-shadow: 0.5em 0.1em 1em 0em #686868;
  width: 40%;
  height: 40em;
  margin-top: 5%;
  margin-right: 10%;
  background-image: url("../assets/img-login.jpg");
  background-position: center;
  background-size: cover;
}
.conteudo{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #1200b4bb;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.5s;
}
.area-img:hover .conteudo{
  
  opacity: 1;
}

</style>
    