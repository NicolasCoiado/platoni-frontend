<template>
  <nav>
    <div class="areas-nav">
      <router-link class="btn-logo" to="/"></router-link>
      <button class="btn-menu" :class="{ 'btn-menu-ativo': estadoMenu }" @click="abrirMenu">.</button>
      <div class="area-btns">
        <router-link class="a-link" to="/">Login</router-link>
        <router-link class="a-link" to="/registrar">Registrar-se</router-link>
      </div>
    </div>
    <div v-show="estadoMenu" class="area-drop">
        <router-link class="a-link" to="/registrar">Registrar-se</router-link>
        <router-link class="a-link" to="/">Login</router-link>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'NavDeslogado',
  data() {
    return {
      estadoMenu: false
    };
  },
  methods: {
    abrirMenu() {
      this.estadoMenu = !this.estadoMenu;
    }
  }
}
</script>
<style scoped>
@media screen and (min-width: 850px){
  nav{
    display: flex;
    flex-direction: column;
    width: 100%;
    font-family: Arial, Helvetica, sans-serif;
  }
  .areas-nav{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1% 3%;
    box-shadow: 0em 0.5em 1em 0px #a8a8a8;
  }
  .area-drop{
    display: none;
  }
  .btn-logo{
    width: 5vw;
    height: 5vw;
    background-image: url("../assets/logo.png");
    background-size: cover;
  }
  .area-btns{
    display: flex;
    justify-content:space-between;
  }
  .btn-menu{
    display: none;
    color: #4854ff;
  }
  .a-link{
    text-decoration: none;
    border-radius: 2em;
    color:#FFFF;
    text-align: center;
    font-weight: bold;
    font-size: 100%;
    padding: 2vh 4vh;
    margin: 1vh 2vh;
  }
  .a-link:first-child{
    background-color: #4854ff;
  }
  .a-link:last-child{
    background-color: #2D00B4;
  }
}
@media screen and (max-width: 849px){
  nav{
    display: flex;
    flex-direction: column;
    width: 100%;
    font-family: Arial, Helvetica, sans-serif;
  }
  .areas-nav{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 2% 3%;
    box-shadow: 0em 0.5em 1em 0px #a8a8a8;
  }
  .btn-logo{
    width: 11vw;
    height: 11vw;
    background-image: url("../assets/logo.png");
    background-size: cover;
  }
  .area-btns{
    display: none;
  }
  .btn-menu{
    width: 8vw;
    height: 8vw;
    background-image: url("../assets/icon-menu.png");
    background-size: cover;
    background-color: #FFFF;
    border: none;
    color: #4854ff;
  }
  .btn-menu-ativo{
    background-image: url("../assets/close-icon.png");
  }
  .area-drop{
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 0vh 2vh;
    padding: 2vh 0vh;
    border-bottom: 1px solid #a8a8a8;
  }
  .a-link{
    text-decoration: none;
    border-radius: 1em;
    color:#FFFF;
    font-weight: bold;
    font-size: 100%;
    padding: 1vh;
    margin: 1vh 0vh;
  }
  .a-link:first-child{
    background-color: #2D00B4;
  }
  .a-link:last-child{
    background-color: #4854ff;
  }
}
</style>