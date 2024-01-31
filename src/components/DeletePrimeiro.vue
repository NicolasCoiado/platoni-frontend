<template>
    <div class="area-passo-um">
        <h1>Deseja excluir sua conta?</h1>
        <p>Enviaremos um código de confirmação para o seu e-mail.</p>
        <form @submit="exclusao">
            <input v-model="email" class="campo-input" placeholder="E-mail" type="email"  name="email" autocomplete="email" id="email" required/>
            <Mensagem msg="Houve um erro, tente novamente." classe="erro" v-show="erro"/>
            <input class="btn-submit" type="submit"/>
        </form>
    </div>
</template>
<script>
import axios from "axios";
import Mensagem from "./Mensagem.vue";
import {useStore} from "../store/store.js";

export default {
    name: 'EmailPrimeiro',
    data(){
        return{
            email: null,
            id: null,
            erro: false
        }
    },
    created(){
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
        exclusao(e) {
            e.preventDefault()
            const api = import.meta.env.VITE_API
            const store = useStore()
            const jwt = store.verToken

            const dados ={
                id: this.id,
                email: this.email,
            }

            axios 
            .put(api+"codigo_exclusao", dados, {headers: {Authorization: "Bearer "+jwt}})
            .then((res) => {
                this.$emit("sent")
                console.log(res.data.msg)
            })
            .catch((error) => {
                console.log(error.response.data.msg)
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
h1{
    font-weight: bold;
    color: #4854ff;
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
    .area-passo-um{
        text-align: center;
        margin: 5em 30%;
    }

    h1{
        font-size: 200%;
        margin-bottom: 2em;
    }
    p{
        margin-bottom: 3em; 
        font-size: 1.3em;
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
    .area-passo-um{
        text-align: center;
        margin: 20% 10%;
    }
    h1{
        font-size: 110%;
        margin-bottom: 2em; 
    }
    p{
        margin-bottom: 2em; 
        font-size: 90%;
    }
    .btn-submit{
      font-size: 110%;
      padding: 0.6em;
      margin-bottom: 1.5em;
    }
}
</style>