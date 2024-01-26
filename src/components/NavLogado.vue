<template>
  <nav>
    <div class="areas-nav">
      <router-link class="btn-logo" to="/"></router-link>
      <button class="btn-menu" :class="{ 'btn-menu-ativo': estadoMenu }" @click="abrirMenu"></button>
      <div class="area-btns">
        <router-link class="a-link" to="/certificados">Meus certificados</router-link>
        <button class="btn-drop" @click="abrirMenu"></button>
      </div>
    </div>
    <div v-show="estadoMenu" class="mini-drop">
        <router-link class="btn-mini-drop" to="/certificados">Minha Conta</router-link>
        <button class="btn-mini-drop" @click="deslogar">Deslogar</button>
    </div>
    <div v-show="estadoMenu" class="area-drop">
        <router-link class="a-link" to="/certificados">Meus certificados</router-link>
        <router-link class="a-link" id="nth-two" to="/">Minha conta</router-link>
        <button class="a-link" @click="deslogar">Deslogar</button>
    </div>
  </nav>
</template>
<script>
import {useStore} from "../store/store.js";

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
    },
    deslogar(){
      const store = useStore();
      store.setToken(null);
      this.$router.push({ path: "/" });
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
  }
  .mini-drop{
    position: absolute;
    right: 0;
    top: 9vw;
    display: flex;
    flex-direction: column;
    width: 15vw;
    margin-right: 1vw;
  }
  .btn-mini-drop{
    color: #FFFF;
    font-weight: bold;
    font-size: 100%;
    border-radius: 2em;
    text-align: center;
    padding: 1vw;
  }
  .btn-mini-drop:first-child{
    text-decoration: none;
    background-color: #4854ff;
  }
  .btn-mini-drop:last-child{
    margin-top: 2vh;
    border: none;
    background-color: rgb(253, 73, 73);
  }
  .a-link{
    text-decoration: none;
    border-radius: 2em;
    color:#FFFF;
    text-align: center;
    font-weight: bold;
    font-size: 100%;
    padding: 1.5vw 3vh;
    margin: 1vh 2vw;
  }
  .btn-drop{
    width: 2vw;
    height: 2vw;
    margin-top: 2.5vh;
    background-image: url("../assets/icon-dropdown.png");
    background-size: cover;
    background-color: #FFFF;
    border: none;
  }
  .a-link:first-child{
    background-color: #2D00B4;
    font-family: Arial, Helvetica, sans-serif;
  }

  .a-link:last-child{
    background-color: #4854ff;
    font-family: Arial, Helvetica, sans-serif;
  }
}
@media screen and (max-width: 849px){
  nav{
    display: flex;
    flex-direction: column;
    width: 100%;
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
  .mini-drop{
    display: none;
  }
  .btn-menu{
    width: 8vw;
    height: 8vw;
    background-image: url("../assets/icon-menu.png");
    background-size: cover;
    background-color: #FFFF;
    border: none;
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
  #nth-two{
    background-color: #4854ff;
    font-family: Arial, Helvetica, sans-serif;
  }
  .a-link:first-child{
    background-color: #2D00B4;
    font-family: Arial, Helvetica, sans-serif;
  }
  .a-link:last-child{
    background-color: rgb(253, 73, 73);
    border: none;
  }
}
</style>