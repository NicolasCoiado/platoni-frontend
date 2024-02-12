<template>
    <form class="area-form" @submit="cadastrarCert">
        <h1>Cadastro de Certificados</h1>
        <label for="nome">Nome *</label>
        <input class="input-txt" type="text" name="nome" v-model="nome" required>
        <label for="emissor">Emissor</label>
        <input class="input-txt" type="text" name="emissor" v-model="emissor">
        <label for="Descrição">Descrição</label>
        <input class="input-txt" type="text" name="descricao" v-model="descricao">
        <label class="input-file" for="imagem">{{msgFile}}</label>
        <input @change="inputFile" type="file" name="imagem" id="imagem" accept="image/png, image/jpeg" />
        <button class="btn-clean" v-show="file" @click="cleanFile">Retirar imagem</button>
        <Mensagem msg="Os campos de nome e imagem são obrigatórios." classe="erro" v-show="erro"/>
        <input class="btn-submit" type="submit"/>
    </form>
</template>
<script>
import axios from "axios";
import {useStore} from "../store/store.js";
import Mensagem from "../components/Mensagem.vue";

export default {
  name: 'FormCertificado',
  data(){
    return{
      nome: null,
      emissor: null,
      descricao: null,
      id: null,
      imagem: null,
      file: false,
      msgFile: "Imagem *",
      erro: false
    }
  },
  components:{
    Mensagem
  },
  mounted(){
    this.getId();
  },
  methods:{
    inputFile(e){
      this.file = true
      this.msgFile = "Imagem selecionada"
      this.imagem = e.target.files[0]
    },
    cleanFile(){
      this.file = false
      this.msgFile = "Imagem *"
    },
    getId(){
      const api = import.meta.env.VITE_API
      const store = useStore()
      const jwt = store.verToken
      
      axios
      .get(api+"get_id", {headers: {Authorization: "Bearer "+jwt}})
      .then((res) => {
        this.id = res.data.id;
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
    cadastrarCert(e){
      e.preventDefault()
      const api = import.meta.env.VITE_API;
      const store = useStore();
      const jwt = store.verToken;

      const form = new FormData();
      form.append('nome_certificado', this.nome);
      form.append('emissor', this.emissor);
      form.append('descricao', this.descricao);
      form.append('id_usuario', this.id);
      form.append('imagem', this.imagem);

      axios
      .post(api + "cadastro_cert", form, {headers: {Authorization: "Bearer " + jwt}})
      .then((res)=>{
        console.log(res.data.msg);
        this.$router.push({ path: "/certificados" });
      })
      .catch((error)=>{
        this.erro = true
        console.error("Os campos de nome e imagem são obrigatórios.");
        console.error(error)
      })
    }
  }
}
</script>
<style scoped>
h1{
    margin-bottom: 1.8em;
    font-weight: bold;
    color: #4854ff;
    text-align: center;
}
input[type='file'] {
  display: none
}
.input-file{
  background-color: #4854ff;
  font-weight: bold;
  text-align: center;
  color: #FFFF;
  padding: 1%;
  border-radius: 0.5em;
  margin-top: 2%;
}
.input-file:hover{
  box-shadow: 0em 0.3em 0.5em 0px #a8a8a8;
}
.btn-clean{
  background-color: #ff2e2e;
  font-weight: bold;
  text-align: center;
  color: #FFFF;
  padding: 1%;
  border-radius: 0.5em;
  margin-top: 2%;
  border: none;
  margin-bottom: 3%;
}
.btn-clean:hover{
  box-shadow: 0em 0.3em 0.5em 0px #a8a8a8;
}
.flex{
  display: flex;
  flex-direction: row;
}
@media screen and (min-width: 1650px){
  .area-form{
    margin: 5em 30em;
    padding: 5em 5em;
    box-shadow: 0em 0em 1em 0em #686868;
    display:  flex;
    flex-direction: column;
  }
  h1{
    font-size: 3em;
  }
}
@media screen and (max-width: 1649px) and (min-width: 850px){
  .area-form{
    margin: 5em 5em;
    padding: 5em 3em;
    box-shadow: 0em 0em 1em 0em #686868;
    display:  flex;
    flex-direction: column;
  }
  h1{
    font-size: 3em;
  }
}

@media screen and (max-width: 844px){
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

.input-txt{
  font-size: 0.9em;
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
  background-color: #2D00B4;
  border: none;
  border-radius: 0.5em;
  padding: 0.5em;
  margin-top: 1em;
}
.btn-submit:hover{
  box-shadow: 0em 0.3em 0.5em 0px #a8a8a8;
}
</style>