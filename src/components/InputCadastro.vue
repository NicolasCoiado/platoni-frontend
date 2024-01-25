<template>
    <form class="area-form" @submit="cadastro">
        <h1>Cadastro de Usuários</h1>
        <label for="nome">Nome</label>
        <input class="input-txt" type="text" name="nome" v-model="nome" required>
        <label for="nome">E-mail</label>
        <input class="input-txt" type="email" name="email" v-model="email" required>
        <label for="senha">Senha</label>
        <input class="input-txt" type="password" name="senha" v-model="senha" minlength="8" required>
        <label>Confirme sua senha</label>
        <input class="input-txt" type="password" name="confsenha" v-model="confsenha" minlength="8" required>
        <Mensagem :msg="mensagem" classe="erro" v-show="correspSenhas"/>
        <input class="btn-submit" type="submit"/>
    </form>
</template>
<script>
import Mensagem from "../components/Mensagem.vue"
import axios from "axios"

export default {
  name: 'InputCadastro',
  data(){
    return {
      nome: null,
      email: null,
      senha: null,
      confsenha: null,
      correspSenhas:null,
      mensagem: null
    }
  },components:{
    Mensagem
  },
  methods:{
    async cadastro(e) {
      e.preventDefault()
      const api = import.meta.env.VITE_API
      const dados ={
          nome_usuario: this.nome,
          email: this.email,
          senha: this.senha,
      }
      if (this.nome && this.email && this.senha && this.confsenha) {
        if (this.senha === this.confsenha) {
          this.correspSenhas = false;
          axios
            .post(api + "cadastro", dados)
            .then((res) => {
              console.log(res.data.msg);
              this.$router.push({ path: "/" });
            })
            .catch((error) => {
              console.error(error.response.data.msg);
            });
        } else {
          this.mensagem = "As senhas devem corresponder!";
          this.correspSenhas = true;
          console.error("As senhas não correspondem.");
        }
      } else {
        this.mensagem = "Todos os campos são obrigatórios!";
        this.correspSenhas = true;
      }
    }
  }
}
</script>
<style scoped>
h1{
    margin-bottom: 0.8em;
    font-weight: bold;
    color: #4854ff;
    text-align: center;
}
@media screen and (min-width: 1650px){
  .area-form{
    margin: 5em 30em;
    padding: 5em 5em;
    box-shadow: 0em 0em 1em 0em #686868;
    display:  flex;
    flex-direction: column;
    background-color: #f8f8fa;
  }
  h1{
    font-size: 3em;
  }
}
@media screen and (max-width: 1649px) and (min-width: 760px){
  .area-form{
    margin: 5em 5em;
    padding: 5em 3em;
    box-shadow: 0em 0em 1em 0em #686868;
    display:  flex;
    flex-direction: column;
    background-color: #f8f8fa;
  }
  h1{
    font-size: 3em;
  }
}

@media screen and (max-width: 759px){
  .area-form{
    margin: 3em 0em;
    padding: 2em 1em;
    display:  flex;
    flex-direction: column;
  }
  h1{
    font-size: 2em;
  }
}

label{
    margin-bottom: 0.5em;
}
.input-txt{
    font-size: 0.9em;
    background-color: #ffffff;
    border-radius: 0.5em;
    margin-bottom: 1em;
    border-top: 2px #c7c7c7 solid;
    border-bottom: 2px #c7c7c7 solid;
    border-left: 2px #c7c7c7 solid;
    border-right: 2px #c7c7c7 solid;
}
.btn-submit{
    font-size: 1.5em;
    font-weight: bold;
    color: #FFFF;
    background-color: #4854ff;
    border: none;
    border-radius: 1.4em;
    padding: 0.5em;
    margin-top: 1em;
}
.btn-submit:hover{
    box-shadow: 0em 0.3em 0.5em 0px #a8a8a8;
  }
</style>
