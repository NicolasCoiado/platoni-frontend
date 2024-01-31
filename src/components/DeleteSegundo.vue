<template>
    <div class="area-passo-dois">
        <p>Informe o código abaixo:</p>
        <form @submit="formToken">
            <input v-model="token" class="campo-input" type="text"  name="Código" autocomplete="Código" id="Código" placeholder="Código" required/>
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
            token: null,
            erro: false,
            mensagem: null
        }
    },
    mounted(){
        this.getId();
    },
    components:{
        Mensagem
    },
    methods:{
        getId(){
            const api = import.meta.env.VITE_API
            const store = useStore()
            const jwt = store.verToken
            
            axios
            .get(api+"get_id", {headers: {Authorization: "Bearer "+jwt}})
            .then((res) => {
                this.id = res.data.id
            })
            .catch((error) => {
                if(error.response.data.msg === "Token inválido."){
                    this.$router.push({ path: "/" });
                    console.error(error.response.data.msg)
                }else{
                    console.error(error.response.data.msg)
                }
            })
        },
        formToken(e) {
            e.preventDefault()
            const api = import.meta.env.VITE_API
            
            const dados ={
                id: this.id,
                token: this.token,
            }
            
            const store = useStore()
            const jwt = store.verToken
            
            axios 
            .put(api+"exclusao_usuario", dados, {headers: {Authorization: "Bearer "+jwt}})
            .then((res) => {
                console.log(res.data.msg)
                this.$emit("reset")
            })
            .catch((error) => {
                console.log(error.response.data.msg)
                this.mensagem = error.response.data.msg
                this.erro = true
            })      
        }
    }
}
</script>
<style scoped>
*{
    font-family: Arial, Helvetica, sans-serif;
}
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