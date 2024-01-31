<template>
    <div class="area-form">
        <div v-if="!editar" class="flex">
            <h1>{{nome}}</h1>
            <button @click="clickNome" class="btn-edit"></button>
        </div>
        <form v-else class="flex" @submit="editarNome">
            <input v-model="nome" class="campo-input" placeholder="Nome" type="text"  name="nome" autocomplete="nome" id="nome" required/>
            <div class="areas-btns">
                <button class="btn-fechar" @click="clickNome">X</button>
                <input  class="btn-salvar" value="Salvar" type="submit">
            </div>
        </form>
        <div class="flex">
            <p>{{email}}</p>
            <router-link class="btn-edit" to="/editar/email"></router-link>
        </div>
        <router-link class="btn-edit-senha" to="/recuperacao">Editar senha</router-link>
        <router-link class="btn-delete" to="/delete/usuario">Deletar conta</router-link>
    </div>
</template>
<script>
import axios from "axios";
import {useStore} from "../store/store.js";

export default {
    name: 'InfosPerfil.vue',
    data(){
        return{
            id: null,
            nome: null,
            email: null,
            editar: false
        }
    },
    created(){
        this.getId();
    },
    methods:{
        clickNome(){
            this.editar = !this.editar
        },
        getId(){
            const api = import.meta.env.VITE_API
            const store = useStore()
            const jwt = store.verToken
            
            axios
            .get(api+"get_id", {headers: {Authorization: "Bearer "+jwt}})
            .then((res) => {
                this.id = res.data.id
                this.listarUsuario()
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
        listarUsuario(){
            const api = import.meta.env.VITE_API
            const store = useStore()
            const jwt = store.verToken

            const dado ={
                id: this.id
            } 

            axios
            .post(api+"get_infos", dado, {headers: {Authorization: "Bearer "+jwt}})
            .then((res) => {
                console.log("Informações do usuário listadas.")
                this.nome = res.data.nome_usuario;
                this.email = res.data.email;
            })
            .catch((error) => {
                console.log(error)
                console.log(this.id)
            })
        },
        editarNome(e){
            e.preventDefault()
            const store = useStore()
            const api = import.meta.env.VITE_API
            const jwt = store.verToken

            const dado ={
                nome_usuario: this.nome,
                email: this.email
            }
           
            axios
            .put(api+"edit_usuario", dado, {headers: {Authorization: "Bearer "+jwt}})
            .then((res) => {
                console.log(res.data.msg)
                this.editar = false
            })
            .catch((error) => {
                this.editar = false
            })
        }
    }
}
</script>
<style scoped>
*{
    font-family: Arial, Helvetica, sans-serif;
}

@media screen and (min-width: 1050px){
  .area-form{
    width: 50%;
    margin: 5% 25%;
    padding: 4% 4%;
    box-shadow: 0em 0em 1em 0em #686868;
    display:  flex;
    flex-direction: column;
  }
  .flex{
    display: flex;
    flex-direction: row;
    justify-content:space-between;
  }
  h1{
    width: 90%;
    font-size: 180%;
    font-weight: bold;
    color: #4854ff;
  }
  p{
    font-size: 150%;
  }
  .btn-edit{
    width: 2vw;
    height: 2vw;
    margin-left: 10%;
    margin-bottom: 5vh;
    border: none;
    border-radius: 2em;
    background-image: url("../assets/icon-edit.png");
    background-color: #2D00B4;
    background-size: 90%;
    background-position: center;
  }
  .btn-edit-senha{
    border-radius: 2em;
    padding: 0.5em;
    text-align: center;
    text-decoration:none;
    font-weight: bold;
    color: #FFFF;
    background-color: #2D00B4;
    margin-bottom: 3em;
  }
  .campo-input{
    width: 80%;
    font-size: 135%;
    outline: none;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: #1f1f1f solid 0.1em;
    margin-bottom: 2em; 
  }
  .btn-fechar{
    font-weight: bold;
    color: #FFFF;
    background-color: #ff2e2e;
    border: none;
    border-radius: 2em;
    width: 2vw;
    height: 2vw;
  }
  .btn-salvar{
    border: none;
    border-radius: 2em;
    height: 2vw;
    font-weight: bold;
    color: #FFFF;
    background-color: #4854ff;
    margin-left: 1.5em;
  }
  .btn-delete{
        border-radius: 2em;
        padding: 0.5em;
        text-align: center;
        text-decoration:none;
        font-weight: bold;
        color: #FFFF;
        background-color: rgb(253, 73, 73);
        margin-bottom: 3em;
    }
}
@media screen and (max-width: 1049px) and (min-width: 800px){
    .area-form{
        margin: 5% 5%;
        padding: 4% 4%;
        box-shadow: 0em 0em 1em 0em #686868;
        display:  flex;
        flex-direction: column;
    }
    .flex{
        display: flex;
        flex-direction: row;
        justify-content:space-between;
    }
    h1{
        width: 90%;
        font-size: 180%;
        font-weight: bold;
        color: #4854ff;
    }
    p{
        font-size: 150%;
    }
    .btn-edit{
        width: 2vw;
        height: 2vw;
        margin-left: 10%;
        margin-bottom: 10vh;
        border: none;
        border-radius: 2em;
        background-image: url("../assets/icon-edit.png");
        background-color: #2D00B4;
        background-size: 90%;
        background-position: center;
    }
    .btn-edit-senha{
        border-radius: 2em;
        padding: 0.5em;
        text-align: center;
        text-decoration:none;
        font-weight: bold;
        color: #FFFF;
        background-color: #2D00B4;
        margin-bottom: 3em;
    }
    .campo-input{
        width: 80%;
        font-size: 135%;
        outline: none;
        border-top: none;
        border-left: none;
        border-right: none;
        border-bottom: #1f1f1f solid 0.1em;
        margin-bottom: 2em; 
    }
    .btn-fechar{
        font-weight: bold;
        color: #FFFF;
        background-color: #ff2e2e;
        border: none;
        border-radius: 2em;
        width: 2vw;
        height: 2vw;
    }
    .btn-salvar{
        border: none;
        border-radius: 2em;
        height: 2vw;
        font-weight: bold;
        color: #FFFF;
        background-color: #4854ff;
        margin-left: 1.5em;
    }
    .btn-delete{
        border-radius: 2em;
        padding: 0.5em;
        text-align: center;
        text-decoration:none;
        font-weight: bold;
        color: #FFFF;
        background-color: rgb(253, 73, 73);
        margin-bottom: 3em;
    }
}
@media screen and (max-width: 799px){
    .area-form{
        margin: 5% 5%;
        display:  flex;
        flex-direction: column;
        text-align: center;
    }
    .flex{
        display: flex;
        flex-direction: column;
    }
    h1{
        margin-top: 5vh;
        width: 90%;
        font-size: 100%;
        font-weight: bold;
        color: #4854ff;
    }
    .btn-edit{
        width: 100%;
        height: 6vh;
        margin-top: 2vh;
        margin-bottom: 10vh;
        border: none;
        border-radius: 2em;
        background-image: url("../assets/icon-edit.png");
        background-color: #2D00B4;
        background-size:contain;
        background-repeat: no-repeat;
        background-position: center;
    }
    .btn-edit-senha{
        width: 100%;
        padding: 2vh 0%;
        border-radius: 2em;
        text-align: center;
        text-decoration:none;
        font-weight: bold;
        color: #FFFF;
        background-color: #2D00B4;
        margin-bottom: 3em;
    }
    .campo-input{
        font-size: 1em;
        margin-top: 3em;
        margin-bottom: 1em;
        outline: none;
        border-top: none;
        border-left: none;
        border-right: none;
        border-bottom: #1f1f1f solid 0.1em;
    }
    .areas-btns{
        width: 100%;
    }
    .btn-fechar{
        width: 45%;
        background-color: #ff2e2e;
        font-weight: bold;
        color: #FFFF;
        border: none;
        border-radius: 2em;
        padding: 0.5em;
    }
    .btn-salvar{
        margin-left: 5%;
        margin-bottom: 10%;
        width: 45%;
        background-color: #4854ff;
        font-weight: bold;
        color: #FFFF;
        border: none;
        border-radius: 2em;
        padding: 0.5em;
    }
    .btn-delete{
        width: 100%;
        padding: 2vh 0%;
        border-radius: 2em;
        text-align: center;
        text-decoration:none;
        font-weight: bold;
        color: #FFFF;
        background-color: rgb(253, 73, 73);
    }
}
</style>