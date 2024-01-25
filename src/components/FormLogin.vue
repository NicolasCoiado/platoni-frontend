<template>
    <div class="area-form">
      <h1>LOGIN</h1>
      <form @submit="login">
        <input v-model="email" class="campo-input" placeholder="E-mail" type="email" required>
        <input v-model="senha" class="campo-input" placeholder="Senha" type="password" required>
        <Mensagem msg="E-mail ou senha incorretos." classe="erro" v-show="incorreto"/>
        <router-link class="a-esqueci" to="/">Esqueceu sua senha?</router-link>
        <input class="btn-submit" type="submit"/>
        <div class="area-registrar">
          <p>Ainda não tem uma conta?</p>
          <div class="btn-registrar">
            <router-link to="/registrar">Registrar-se</router-link>
          </div>
        </div>
      </form>
    </div>
</template>
<script>
import axios from "axios";
import Mensagem from "./Mensagem.vue"
import {useStore} from "../store/store.js";

export default {
  name: 'FormLogin',
  data(){
    return {
      email: null,
      senha: null,
      incorreto: null
    }
  },components:{
    Mensagem
  },
  methods:{
    async login(e) {
      e.preventDefault()
      const api = import.meta.env.VITE_API
    
      const dados ={
        email: this.email,
        senha: this.senha
      }

      const store = useStore();

      axios
        .post(api, dados)
        .then((res) => {
          store.setToken(res.data.token);
          console.log(res.data.msg);
          this.$router.push({ path: "/certificados" });
        })
        .catch((error) => {
          this.incorreto = true
          console.log(error)
        })
        // setTimeout(this.deslogar, 3600000);
        setTimeout(this.deslogar, 5000);
    },
    async deslogar() {
          console.log(this.deslogar)
    }
  }
}
</script>
<style scoped>


  @media screen and (min-width: 1000px){
    .area-form{
      width: 40%;
      margin-top: 5%;
      margin-left: 10%;
      box-shadow: 0em 0em 1em 0em #686868;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    form{
      padding: 5em;
    }
    h1{
      font-weight: bold;
      font-size: 3em;
      text-align: center;
      color: #1f1f1f;
    }
    .campo-input{
      font-size: 1.2em;
      margin-bottom: 1em;
    }
    .btn-submit{
      font-size: 1.3em;
      padding: 0.6em;
    }
    
    .area-registrar{
      display: none;
      width: 10em;
    }
  }
  @media screen and (max-width: 999px){
    .area-form{
      margin: 10% 5%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    form{
      padding: 2em;
    }
    h1{
      margin-top: 1em;
      font-size: 3em;
    }
    .campo-input{
      font-size: 1em;
      margin-bottom: 2em;
    }
    .infos-area{
      display: flex;
      flex-direction:column-reverse;
      text-align: left;
    }
    .a-esqueci{
      font-size: 0.9em;
      text-align: center;
    }
    .btn-submit{
      font-size: 1.1em;
      padding: 0.6em;
      margin-bottom: 1.5em;
    }
    .area-registrar{
      border-top: #1f1f1f solid 0.1em;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
    }
    .area-registrar p {
      margin: 1.5em 0em;
      font-size: 0.9em;
    }
    .btn-registrar{
      font-size: 1.1em;
      padding: 0.6em;
      background-color: #2D00B4;
      color: #FFFF;
      border: none;
      border-radius: 1.4em;
      font-weight: bold;
      width: 95%;
    }
    .btn-registrar a{
      color: #FFFF;
      text-decoration: none;
    }
  }
  form{
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  .campo-input{
    outline: none;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: #1f1f1f solid 0.1em;
  }
  .a-esqueci{
    color: #2D00B4;
    font-style: italic;
    text-decoration: none;
    margin-bottom: 2em;
    margin-top: 2em;
  }
  .btn-submit{
    background-color: #4854ff;
    color: #FFFF;
    border: none;
    font-weight: bold;
    border-radius: 1.4em;
  }
  h1{
    font-weight: bold;
    text-align: center;
    color: #1f1f1f;
  }
  .btn-submit:hover{
    box-shadow: 0em 0.3em 0.5em 0px #a8a8a8;
  }
</style>