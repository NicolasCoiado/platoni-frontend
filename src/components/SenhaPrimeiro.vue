<template>
    <div class="area-passo-um">
        <h1>Esqueceu sua senha?</h1>
        <p>Informe seu e-mail:</p>
        <form @submit="formEmail">
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
    name: 'SenhaPrimeiro',
    data(){
        return{
            email: null,
            erro: false
        }
    },
    components:{
        Mensagem
    },
    methods:{
        async formEmail(e) {
            e.preventDefault()
            const api = import.meta.env.VITE_API
    
            const dados ={
                email: this.email
            }

            const store = useStore()

            axios 
            .put(api+"recuperacao", dados)
            .then((res) => {
                store.setEmail(this.email)
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
        margin-bottom: 1em;
    }
    p{
        margin-bottom: 1em; 
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
        font-size: 130%;
        margin-bottom: 1em;
    }
    p{
        margin-bottom: 1em; 
        font-size: 1.1em;
    }
    .btn-submit{
      font-size: 1.1em;
      padding: 0.6em;
      margin-bottom: 1.5em;
    }
}
</style>