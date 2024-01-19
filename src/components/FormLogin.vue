<template>
    <div class="area-form">
      <h1>LOGIN</h1>
      <form @submit="login">
        <input v-model="email" class="campo-input" placeholder="E-mail" type="email">
        <input v-model="senha" class="campo-input" placeholder="Senha" type="password">
        <router-link class="a-esqueci" to="/">Esqueceu sua senha?</router-link>
        <input class="btn-submit" type="submit"/>
      </form>
    </div>
</template>
<script>


export default {
  name: 'NavBar',
  data(){
    return {
      email: null,
      senha: null
    }
  },
  methods:{
    async login(e) {
      e.preventDefault()
      console.log(process.env.VUE_APP_BASE_URL)
      // const dados ={
      //   email: this.email,
      //   senha: this.senha
      // }

      // const json = JSON.stringify(dados)
      
      // const req = await fetch ()
    }
  }
}
</script>
<style scoped>
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
    display: flex;
    flex-direction: column;
    padding: 5em;
    text-align: center;
  }
  h1{
    font-weight: bold;
    font-size: 3em;
    text-align: center;
    color: #1f1f1f;
  }
  .campo-input{
    outline: none;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: #1f1f1f solid 0.1em;
    font-size: 1.2em;
    margin-bottom: 1em;
  }
  .a-esqueci{
    margin-bottom: 1em;
    color: #2D00B4;
    font-style: italic;
    text-decoration: none;
  }
  .btn-submit{
    background-color: #4854ff;
    color: #FFFF;
    border: none;
    font-size: 1.3em;
    font-weight: bold;
    padding: 0.6em;
    border-radius: 1.4em;
  }
  .btn-submit:hover{
    box-shadow: 0em 0.3em 0.5em 0px #a8a8a8;
  }
  
</style>