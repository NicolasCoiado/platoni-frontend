<template>
    <div class="area-passo-dois">
        <p>Informe o código abaixo:</p>
        <form @submit="formToken">
            <input v-model="token" class="campo-input" type="text"  name="Código" autocomplete="Código" id="Código" placeholder="Código" required/>
            <input v-model="senha" class="campo-input" type="password"  name="Senha" autocomplete="Senha" id="Senha" placeholder="Nova senha" required/>
            <input v-model="confsenha" class="campo-input" type="password"  name="Confirmação senha" autocomplete="Confirmação senha" id="Confirmação senha" placeholder="Confirme a nova senha" required/>
            <Mensagem :msg="mensagem" classe="erro" v-show="erro"/>
            <input class="btn-submit" type="submit"/>
        </form>
    </div>
</template>
<script>
import axios from "axios";
import Mensagem from "./Mensagem.vue";
import {useStore} from "../store/store.js";

export default {
    name: 'SenhaSegundo',
    data(){
        return{
            email: null,
            token: null,
            senha: null,
            confsenha: null,
            erro: false,
            mensagem: null
        }
    },
    components:{
        Mensagem
    },
    mounted(){
        const store = useStore()
        this.email = store.verEmail
    },
    methods:{
        formToken(e) {
            e.preventDefault()
            const api = import.meta.env.VITE_API
            
            if(this.senha === this.confsenha){
                const dados ={
                    email: this.email,
                    token: this.token,
                    senha: this.senha
                }
                
                axios 
                .put(api+"reset_senha", dados)
                .then((res) => {
                    console.log(res.data.msg)
                    this.$emit("reset")
                })
                .catch((error) => {
                    console.log(error.response.data.msg)
                    this.mensagem = error.response.data.msg
                    this.erro = true
                })
            }else{
                this.mensagem = "As senhas devem ser iguais."
                this.erro = true
            }
        }
    }
}
</script>
<style scoped>
form{
    display: flex;
    flex-direction: column;
}
p{
    color: black;
    text-align: center;
    margin-bottom: 2em;
}
.campo-input{
    outline: none;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: #1f1f1f solid 0.1em;
    margin-bottom: 2em; 
}
.btn-submit{
    background-color: #4854ff;
    color: #FFFF;
    border: none;
    font-weight: bold;
    border-radius: 1.4em;
}
@media screen and (min-width: 1000px){
    .area-passo-dois{
        text-align: center;
        margin: 5em 30%;
    }
    .btn-submit{
      font-size: 1.3em;
      padding: 0.6em;
    }
    .campo-input{
      font-size: 1.2em;
      margin-bottom: 1em;
    }
}
@media screen and (max-width: 999px){
    .area-passo-dois{
        text-align: center;
        margin: 0% 10%;
    }
    .btn-submit{
      font-size: 1.1em;
      padding: 0.6em;
      margin-bottom: 1.5em;
    }
}
</style>